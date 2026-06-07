/**
 * Upload tất cả ảnh trong public/ lên Cloudinary, sau đó tự động cập nhật:
 *   - lib/assets.ts
 *   - components/HeroSection.tsx  (slides array)
 *   - components/ValuesSection.tsx (tamnhin)
 *
 * Chạy: node scripts/upload-to-cloudinary.mjs
 */

import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { existsSync, readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname, relative, extname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

config({ path: join(ROOT, ".env.local") });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("❌  Thiếu credentials. Kiểm tra file .env.local");
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const FOLDER = "hoang-viet";
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Quét đệ quy, trả về tất cả file ảnh trong dir */
function scanImages(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...scanImages(full));
    } else if (IMAGE_EXTS.has(extname(entry).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

/** Chuyển đường dẫn file sang Cloudinary public_id */
function toPublicId(fullPath) {
  // relative từ public/ → loại bỏ extension
  const rel = relative(join(ROOT, "public"), fullPath);
  const withoutExt = rel.replace(/\.[^.]+$/, "").replace(/\\/g, "/");
  return withoutExt;
}

/** Upload 1 file lên Cloudinary */
async function upload(src, publicId) {
  const res = await cloudinary.uploader.upload(src, {
    public_id: publicId,
    folder: FOLDER,
    overwrite: true,
    resource_type: "image",
  });
  return res.secure_url.replace("/upload/", "/upload/f_auto,q_auto/");
}

/** Đọc file, áp patch function, ghi lại nếu có thay đổi */
function patchFile(filePath, patchFn) {
  const src = readFileSync(filePath, "utf-8");
  const patched = patchFn(src);
  if (patched !== src) {
    writeFileSync(filePath, patched, "utf-8");
    return true;
  }
  return false;
}

// ── Figma CDN images (vẫn upload, phòng khi URL còn hạn) ────────────────────

const figmaImages = [
  { url: "https://www.figma.com/api/mcp/asset/5591da35-246e-432a-bd98-38c0ef234da0", key: "visionBg",         id: "vision-bg"           },
  { url: "https://www.figma.com/api/mcp/asset/4d0b2a28-dd5d-4db8-acae-b52739616e80", key: "missionBg",        id: "mission-bg"          },
  { url: "https://www.figma.com/api/mcp/asset/33ba7951-a127-47e7-be33-84e24705fe47", key: "coreValuesBg",     id: "core-values-bg"      },
  { url: "https://www.figma.com/api/mcp/asset/a1908cd6-2e89-42d7-899d-25e984038a0f", key: "galleryBig",       id: "gallery-big"         },
  { url: "https://www.figma.com/api/mcp/asset/3b05daf2-a338-4663-8da7-69e43b6f142f", key: "galleryTopRight1", id: "gallery-top-right-1" },
  { url: "https://www.figma.com/api/mcp/asset/b50dff9d-743e-4c4b-8ea6-7e6918e2d23f", key: "galleryTopRight2", id: "gallery-top-right-2" },
  { url: "https://www.figma.com/api/mcp/asset/d666be91-51eb-474b-97ac-c0cd936a495e", key: "galleryBottomRight",id:"gallery-bottom-right" },
];

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n☁  Cloudinary upload — cloud: ${CLOUDINARY_CLOUD_NAME} | folder: ${FOLDER}\n`);

  const urls = {}; // publicId → CDN URL

  // ── 1. Quét & upload toàn bộ ảnh trong public/ ───────────────────────────

  const publicDir = join(ROOT, "public");
  const imageFiles = scanImages(publicDir);

  console.log(`📁  Tìm thấy ${imageFiles.length} ảnh trong public/:\n`);

  for (const filePath of imageFiles) {
    const publicId = toPublicId(filePath);
    const displayName = relative(publicDir, filePath).replace(/\\/g, "/");
    try {
      urls[publicId] = await upload(filePath, publicId);
      console.log(`   ✓  ${displayName}`);
    } catch (e) {
      console.error(`   ✗  ${displayName} — ${e.message}`);
    }
  }

  // ── 2. Upload ảnh Figma CDN ───────────────────────────────────────────────

  console.log("\n🎨  Ảnh Figma CDN:\n");
  const figmaUrls = {};

  for (const { url, key, id } of figmaImages) {
    try {
      figmaUrls[key] = await upload(url, id);
      urls[id] = figmaUrls[key];
      console.log(`   ✓  ${key}`);
    } catch (e) {
      console.warn(`   ⚠  ${key} — Figma URL có thể hết hạn: ${e.message}`);
    }
  }

  // ── 3. Cập nhật lib/assets.ts ─────────────────────────────────────────────

  const assetKeys = ["visionBg","missionBg","coreValuesBg","galleryBig","galleryTopRight1","galleryTopRight2","galleryBottomRight"];
  const assetsContent =
    `// Cloudinary CDN — cloud: ${CLOUDINARY_CLOUD_NAME} | folder: ${FOLDER}\n` +
    `export const ASSETS = {\n` +
    assetKeys.map((k) => `  ${k}: "${figmaUrls[k] ?? ""}",`).join("\n") +
    `\n};\n`;

  writeFileSync(join(ROOT, "lib", "assets.ts"), assetsContent, "utf-8");
  console.log("\n✅  lib/assets.ts — cập nhật");

  // ── 4. Cập nhật HeroSection.tsx (slides) ─────────────────────────────────

  const heroSlides = ["hero/hero1","hero/hero2","hero/hero3","hero/hero4","hero/hero5","hero/hero6","hero/hero7"]
    .filter((k) => urls[k])
    .map((k, i) => `  { src: "${urls[k]}", alt: "Hoàng Việt – slide ${i + 1}" },`)
    .join("\n");

  if (heroSlides) {
    const heroPath = join(ROOT, "components", "HeroSection.tsx");
    const patched = patchFile(heroPath, (src) =>
      src.replace(/const slides = \[[\s\S]*?\];/, `const slides = [\n${heroSlides}\n];`)
    );
    console.log(`${patched ? "✅" : "⚠ "}  HeroSection.tsx — ${patched ? "slides cập nhật" : "patch thất bại, cập nhật thủ công"}`);
  }

  // ── 5. Cập nhật ValuesSection.tsx (tamnhin) ───────────────────────────────

  const tamnhinUrl = urls["tamnhin"];
  if (tamnhinUrl) {
    const valuesPath = join(ROOT, "components", "ValuesSection.tsx");
    const patched = patchFile(valuesPath, (src) =>
      src.replace(/bg: "\/tamnhin\.jpg"/, `bg: "${tamnhinUrl}"`)
        .replace(/bg: "https:\/\/res\.cloudinary\.com[^"]*tamnhin[^"]*"/, `bg: "${tamnhinUrl}"`)
    );
    console.log(`${patched ? "✅" : "⚠ "}  ValuesSection.tsx — ${patched ? "tamnhin cập nhật" : "patch thất bại"}`);
  }

  // ── 6. Bảng URL đầy đủ ───────────────────────────────────────────────────

  console.log("\n─────────────────────────────────────────────────────────");
  console.log("📋  Tất cả CDN URLs (dùng trong code):\n");
  for (const [id, url] of Object.entries(urls)) {
    console.log(`  ${id.padEnd(35)} ${url}`);
  }
  console.log("\n─────────────────────────────────────────────────────────");

  const total = imageFiles.length + figmaImages.length;
  const success = Object.keys(urls).length;
  console.log(`\n🎉  Hoàn thành: ${success}/${total} ảnh đã upload\n`);
}

main().catch((err) => {
  console.error("\n❌  Lỗi:", err.message);
  process.exit(1);
});

import { ASSETS } from "@/lib/assets";

// Layout: 4 cột × 3 hàng (200px mỗi hàng)
// [  img1 (2×2)  ] [ img2 ] [ img3 ]
// [  img1 (2×2)  ] [ img4 ] [ img5 ]
// [   img6 (2×1) ] [  img7 (2×1)  ]

const alts = [
  "Sân tập lái xe Hoàng Việt",
  "Học viên thực hành sa hình",
  "Đội xe tập lái",
  "Giáo viên hướng dẫn",
  "Học viên nhận bằng lái",
  "Cơ sở đào tạo Hoàng Việt",
  "Lễ trao bằng lái xe",
];

export default function GallerySection() {
  const imgs = ASSETS.thucte;

  return (
    <section className="bg-bg-light py-24 px-6 lg:px-10" id="gallery">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-primary text-3xl font-bold text-center mb-12">Hình Ảnh Thực Tế</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px_200px] gap-4">

          {/* img1 — big, 2 col × 2 row */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <img src={imgs[0]} alt={alts[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* img2 — top right 1 */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src={imgs[1]} alt={alts[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* img3 — top right 2 */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src={imgs[2]} alt={alts[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* img4 — mid right 1 */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src={imgs[3]} alt={alts[3]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* img5 — mid right 2 */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src={imgs[4]} alt={alts[4]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* img6 — bottom left, 2 col */}
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
            <img src={imgs[5]} alt={alts[5]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* img7 — bottom right, 2 col */}
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
            <img src={imgs[6]} alt={alts[6]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

        </div>
      </div>
    </section>
  );
}

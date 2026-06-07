import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const courseLinks = [
  { label: "Hạng B tự động (B1)", href: "#courses" },
  { label: "Hạng B số sàn (B2)", href: "#courses" },
  { label: "Hạng C1 – Xe tải", href: "#courses" },
  { label: "Bổ túc tay lái cá nhân", href: "#courses" },
];

const offices = [
  {
    name: "Văn phòng Đơn Dương",
    address: "42 đường 2/4, xã Đơn Dương, Lâm Đồng",
    phone: "0986.219.113",
  },
  {
    name: "Văn phòng Đức Trọng",
    address: "47E Cù Chính Lan, xã Đức Trọng, Lâm Đồng",
    phone: "0986.219.113",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white" id="footer">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={ASSETS.logo}
                alt="Logo Hoàng Việt"
                width={64}
                height={64}
                className="rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-bold text-white text-lg leading-tight">HOÀNG VIỆT</p>
                <p className="text-gold text-xs">Vững tay lái – Sáng tương lai</p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Trung tâm đào tạo lái xe uy tín hàng đầu, cam kết đồng hành cùng học viên đến khi nhận bằng.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="mailto:daotaolaixehoangviet@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:0986219113"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Hotline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 pb-3 border-b border-white/10">Đào Tạo</h4>
            <ul className="flex flex-col gap-3">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 pb-3 border-b border-white/10">Liên Hệ</h4>
            <div className="flex flex-col gap-5">
              {offices.map((o) => (
                <div key={o.name}>
                  <p className="text-white font-semibold text-sm mb-1">{o.name}:</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-1">{o.address}</p>
                  <a href={`tel:${o.phone.replace(/\./g, "")}`} className="text-gold text-sm font-medium hover:text-gold-light transition-colors">
                    Hotline: {o.phone}
                  </a>
                </div>
              ))}
              <div>
                <p className="text-white font-semibold text-sm mb-1">Email:</p>
                <a href="mailto:daotaolaixehoangviet@gmail.com" className="text-gold text-sm hover:text-gold-light transition-colors break-all">
                  daotaolaixehoangviet@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 Trung tâm Đào tạo Lái xe Hoàng Việt. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Điều khoản sử dụng</a>
            <a href="#footer" className="text-white/40 hover:text-white/70 text-xs transition-colors">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

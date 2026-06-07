import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trả GPLX – Hoàng Việt",
  description: "Hướng dẫn nhận Giấy phép lái xe sau khi đậu sát hạch tại Hoàng Việt.",
};

const steps = [
  {
    step: "01",
    title: "Nhận thông báo từ trung tâm",
    description:
      "Sau khi kết quả sát hạch được Sở GTVT xác nhận (thường 7–14 ngày làm việc sau ngày thi), nhân viên Hoàng Việt sẽ gọi điện hoặc nhắn tin Zalo thông báo.",
  },
  {
    step: "02",
    title: "Kiểm tra thông tin trên hệ thống",
    description:
      "Truy cập Cổng dịch vụ công Bộ GTVT hoặc tra cứu tại văn phòng Hoàng Việt để xác nhận GPLX đã được in và sẵn sàng nhận.",
  },
  {
    step: "03",
    title: "Đến trung tâm nhận GPLX",
    description:
      "Mang theo CCCD gốc đến văn phòng Hoàng Việt trong giờ hành chính. Nhân viên sẽ kiểm tra, ký nhận và trao GPLX ngay tại chỗ.",
  },
  {
    step: "04",
    title: "Kiểm tra thông tin GPLX",
    description:
      "Kiểm tra họ tên, ngày sinh, hạng bằng, và ngày cấp trên GPLX. Nếu có sai sót, thông báo ngay để Hoàng Việt hỗ trợ làm thủ tục đính chính.",
  },
];

const offices = [
  {
    name: "Cơ sở 1 – Đà Lạt",
    address: "123 Nguyễn Văn Cừ, Phường 1, TP. Đà Lạt, Lâm Đồng",
    hours: "Thứ 2 – Thứ 7: 7h30 – 17h00",
    phone: "0986.219.113",
  },
  {
    name: "Cơ sở 2 – Bảo Lộc",
    address: "78 Trần Phú, TP. Bảo Lộc, Lâm Đồng",
    hours: "Thứ 2 – Thứ 7: 7h30 – 17h00",
    phone: "0986.219.113",
  },
];

const notes = [
  "GPLX được cấp bởi Sở GTVT Lâm Đồng, không phải do trung tâm cấp.",
  "Thời gian chờ GPLX sau sát hạch: 7–20 ngày làm việc (tùy thời điểm trong năm).",
  "Không cần đặt lịch trước – đến trực tiếp trong giờ hành chính là nhận được.",
  "Trường hợp đặc biệt (đi công tác, xuất ngoại…) có thể ủy quyền người thân nhận thay.",
];

export default function TraGPLXPage() {
  return (
    <main className="bg-bg-lighter min-h-screen">
      {/* Page header */}
      <div className="bg-primary py-14 px-6">
        <div className="max-w-container mx-auto px-6">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/tin-tuc" className="hover:text-white transition-colors">Thông tin</Link>
            <span>/</span>
            <span className="text-white">Trả GPLX</span>
          </nav>
          <h1 className="text-white text-3xl font-bold mb-1">Nhận Giấy phép lái xe (GPLX)</h1>
          <p className="text-white/60">Hướng dẫn nhận bằng sau khi đậu sát hạch</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          <div className="flex flex-col gap-8">
            {/* Steps */}
            <div>
              <h2 className="text-primary-mid text-xl font-bold mb-6">Quy trình nhận GPLX</h2>
              <div className="flex flex-col gap-5">
                {steps.map((s) => (
                  <div key={s.step} className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-gold font-extrabold text-sm">{s.step}</span>
                    </div>
                    <div>
                      <h3 className="text-primary font-bold text-base mb-1">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-primary font-bold text-lg mb-4">Lưu ý quan trọng</h2>
              <ul className="flex flex-col gap-3">
                {notes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: offices */}
          <div className="flex flex-col gap-6">
            {offices.map((office) => (
              <div key={office.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-primary font-bold text-base mb-3">{office.name}</h3>
                <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {office.address}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {office.hours}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href={`tel:${office.phone.replace(/\./g, "")}`} className="text-primary-mid font-semibold hover:text-gold transition-colors">
                      {office.phone}
                    </a>
                  </li>
                </ul>
              </div>
            ))}

            <div className="bg-primary rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-1">Chưa nhận được thông báo?</h3>
              <p className="text-white/60 text-sm mb-4">Gọi để kiểm tra trạng thái GPLX của bạn</p>
              <a
                href="tel:0986219113"
                className="flex items-center justify-center gap-2 bg-gold text-primary font-bold text-sm w-full py-3 rounded-xl hover:bg-gold-light transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0986.219.113
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

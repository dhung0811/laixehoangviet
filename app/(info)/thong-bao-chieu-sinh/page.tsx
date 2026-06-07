import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thông báo chiêu sinh – Hoàng Việt",
  description: "Thông báo tuyển sinh các khoá học lái xe tại Trung tâm Hoàng Việt.",
};

const batches = [
  {
    id: 1,
    name: "Khoá B1 – Tháng 7/2026",
    course: "Hạng B tự động (B1)",
    status: "Đang nhận hồ sơ",
    statusColor: "bg-green-100 text-green-700",
    startDate: "07/07/2026",
    deadline: "30/06/2026",
    slots: 20,
    price: "24.000.000 đ",
    schedule: "Sáng: 7h–11h | Chiều: 13h–17h | Tối: 18h–21h",
  },
  {
    id: 2,
    name: "Khoá B2 – Tháng 7/2026",
    course: "Hạng B số sàn (B2)",
    status: "Đang nhận hồ sơ",
    statusColor: "bg-green-100 text-green-700",
    startDate: "10/07/2026",
    deadline: "03/07/2026",
    slots: 15,
    price: "22.000.000 đ",
    schedule: "Sáng: 7h–11h | Chiều: 13h–17h",
  },
  {
    id: 3,
    name: "Khoá C1 – Tháng 8/2026",
    course: "Hạng C1",
    status: "Sắp mở",
    statusColor: "bg-yellow-100 text-yellow-700",
    startDate: "04/08/2026",
    deadline: "28/07/2026",
    slots: 10,
    price: "25.000.000 đ",
    schedule: "Sáng: 7h–11h | Chiều: 13h–17h",
  },
];

const requirements = [
  "Bản photo Căn cước công dân (mang bản gốc để đối chiếu)",
  "8–10 ảnh thẻ 3×5 nền xanh",
  "Giấy khám sức khoẻ theo quy định Bộ Y tế (có thể khám tại trung tâm)",
  "Bằng lái hạng thấp hơn (nếu học nâng hạng)",
];

export default function ThongBaoChieuSinhPage() {
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
            <span className="text-white">Thông báo chiêu sinh</span>
          </nav>
          <h1 className="text-white text-3xl font-bold mb-1">Thông báo chiêu sinh</h1>
          <p className="text-white/60">Các khoá học đang và sắp khai giảng tại Hoàng Việt</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

          {/* Batch list */}
          <div className="flex flex-col gap-6">
            {batches.map((batch) => (
              <div key={batch.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between p-6 pb-5 border-b border-gray-100">
                  <div>
                    <h2 className="text-primary font-bold text-xl mb-1">{batch.name}</h2>
                    <p className="text-gray-500 text-sm">{batch.course}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full shrink-0 ml-4 ${batch.statusColor}`}>
                    {batch.status}
                  </span>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
                  {[
                    { label: "Khai giảng", value: batch.startDate },
                    { label: "Hạn đăng ký", value: batch.deadline },
                    { label: "Còn lại", value: `${batch.slots} chỗ` },
                    { label: "Học phí", value: batch.price },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-primary font-semibold text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Schedule + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-4 bg-bg-lighter border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {batch.schedule}
                  </div>
                  <Link
                    href="/#cta"
                    className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-primary-mid transition-colors shrink-0"
                  >
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar: hồ sơ requirements */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-primary font-bold text-lg mb-4">Hồ sơ đăng ký</h3>
              <ul className="flex flex-col gap-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-1">Cần tư vấn thêm?</h3>
              <p className="text-white/60 text-sm mb-4">Gọi ngay – chúng tôi phản hồi trong 15 phút</p>
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

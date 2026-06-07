import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lịch thi sát hạch – Hoàng Việt",
  description: "Lịch thi sát hạch lái xe sắp tới tại Lâm Đồng.",
};

const schedules = [
  {
    date: "15/07/2026",
    day: "Thứ Ba",
    type: "Hạng B (B1 + B2)",
    location: "Trung tâm sát hạch Lâm Đồng",
    address: "Quốc lộ 20, TP. Đà Lạt",
    slots: 30,
    status: "Còn chỗ",
    statusColor: "text-green-600",
  },
  {
    date: "22/07/2026",
    day: "Thứ Ba",
    type: "Hạng C1",
    location: "Trung tâm sát hạch Lâm Đồng",
    address: "Quốc lộ 20, TP. Đà Lạt",
    slots: 12,
    status: "Còn chỗ",
    statusColor: "text-green-600",
  },
  {
    date: "29/07/2026",
    day: "Thứ Ba",
    type: "Hạng B (B1 + B2)",
    location: "Trung tâm sát hạch Lâm Đồng",
    address: "Quốc lộ 20, TP. Đà Lạt",
    slots: 5,
    status: "Gần đầy",
    statusColor: "text-orange-500",
  },
  {
    date: "05/08/2026",
    day: "Thứ Tư",
    type: "Hạng B (B1 + B2)",
    location: "Trung tâm sát hạch Lâm Đồng",
    address: "Quốc lộ 20, TP. Đà Lạt",
    slots: 30,
    status: "Còn chỗ",
    statusColor: "text-green-600",
  },
  {
    date: "12/08/2026",
    day: "Thứ Ba",
    type: "Hạng C1",
    location: "Trung tâm sát hạch Lâm Đồng",
    address: "Quốc lộ 20, TP. Đà Lạt",
    slots: 15,
    status: "Còn chỗ",
    statusColor: "text-green-600",
  },
];

const requirements = [
  "Chứng chỉ hoàn thành khoá học (do trung tâm cấp)",
  "Căn cước công dân gốc",
  "Đủ số giờ thực hành theo quy định (Hoàng Việt xác nhận)",
  "Đậu bài kiểm tra lý thuyết nội bộ (≥ 21/25 câu)",
  "Nộp lệ phí sát hạch theo quy định Sở GTVT",
];

export default function LichThiSatHachPage() {
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
            <span className="text-white">Lịch thi sát hạch</span>
          </nav>
          <h1 className="text-white text-3xl font-bold mb-1">Lịch thi sát hạch</h1>
          <p className="text-white/60">Các kỳ thi sát hạch sắp tới tại Lâm Đồng</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          {/* Schedule table */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-primary font-bold text-lg">Lịch thi dự kiến</h2>
                <p className="text-gray-400 text-xs mt-0.5">Cập nhật theo lịch của Sở GTVT Lâm Đồng</p>
              </div>

              {/* Desktop table */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-bg-lighter text-xs text-gray-500 uppercase tracking-wide">
                    <tr>
                      {["Ngày thi", "Hạng thi", "Địa điểm", "Chỗ còn lại", "Trạng thái"].map((h) => (
                        <th key={h} className="px-5 py-3 text-left font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {schedules.map((s, i) => (
                      <tr key={i} className="hover:bg-bg-lighter transition-colors">
                        <td className="px-5 py-4">
                          <p className="text-primary font-bold text-sm">{s.date}</p>
                          <p className="text-gray-400 text-xs">{s.day}</p>
                        </td>
                        <td className="px-5 py-4">
                          <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                            {s.type}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <p className="text-gray-700 text-sm font-medium">{s.location}</p>
                          <p className="text-gray-400 text-xs">{s.address}</p>
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-primary">{s.slots}</td>
                        <td className="px-5 py-4">
                          <span className={`text-sm font-semibold ${s.statusColor}`}>{s.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="sm:hidden divide-y divide-gray-100">
                {schedules.map((s, i) => (
                  <div key={i} className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-primary font-bold">{s.date} – {s.day}</p>
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">{s.type}</span>
                      </div>
                      <span className={`text-sm font-semibold ${s.statusColor}`}>{s.status}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{s.location}</p>
                    <p className="text-gray-400 text-xs">{s.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Còn <strong className="text-primary">{s.slots}</strong> chỗ</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-3 italic">
              * Lịch thi có thể thay đổi theo quyết định của Sở GTVT Lâm Đồng. Hoàng Việt sẽ thông báo cụ thể trước ít nhất 7 ngày.
            </p>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-primary font-bold text-base mb-4">Điều kiện dự thi</h3>
              <ul className="flex flex-col gap-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-1">Hỏi về lịch thi?</h3>
              <p className="text-white/60 text-sm mb-4">Liên hệ ngay để được xếp lịch sớm nhất</p>
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

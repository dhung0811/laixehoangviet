import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tin tức – Hoàng Việt",
  description: "Cập nhật tin tức mới nhất từ Trung tâm Đào tạo Lái xe Hoàng Việt.",
};

const articles = [
  {
    id: 1,
    date: { day: "12", month: "06", year: "2026" },
    title: "Khai giảng khoá học bằng lái B1 tháng 7 – Ưu đãi học phí 10%",
    excerpt:
      "Trung tâm Hoàng Việt thông báo khai giảng khoá B1 tự động tháng 7/2026 với ưu đãi đặc biệt cho học viên đăng ký trước ngày 25/6. Lịch học linh hoạt sáng – chiều – tối.",
    tag: "Ưu đãi",
    tagColor: "bg-gold text-primary",
  },
  {
    id: 2,
    date: { day: "05", month: "06", year: "2026" },
    title: "Cập nhật quy định sát hạch lái xe theo Thông tư 38/2025",
    excerpt:
      "Bộ Giao thông Vận tải ban hành Thông tư 38/2025 với nhiều điểm mới về bài thi sa hình và nội dung lý thuyết. Hoàng Việt đã cập nhật giáo trình theo đúng quy định mới nhất.",
    tag: "Quy định",
    tagColor: "bg-primary text-white",
  },
  {
    id: 3,
    date: { day: "28", month: "05", year: "2026" },
    title: "Hoàng Việt đón nhận đội xe Toyota Vios 2024 mới cho khoá B",
    excerpt:
      "Trung tâm vừa bàn giao 6 xe Toyota Vios 2024 phục vụ khoá học B1 và B2, nâng tổng đội xe lên 18 chiếc, đảm bảo học viên có đủ thời gian thực hành theo quy định.",
    tag: "Cơ sở vật chất",
    tagColor: "bg-green-600 text-white",
  },
  {
    id: 4,
    date: { day: "15", month: "05", year: "2026" },
    title: "Tỷ lệ đậu sát hạch đạt 94% trong quý I/2026",
    excerpt:
      "Kết quả kỳ sát hạch tháng 4/2026: 47/50 học viên Hoàng Việt đậu thi lần đầu, đạt tỷ lệ 94% – cao hơn mức trung bình tỉnh Lâm Đồng 18 điểm phần trăm.",
    tag: "Thành tích",
    tagColor: "bg-blue-600 text-white",
  },
  {
    id: 5,
    date: { day: "02", month: "05", year: "2026" },
    title: "Lớp học lái xe bổ túc ra mắt – Chỉ từ 350.000đ/giờ",
    excerpt:
      "Dành cho người đã có bằng nhưng thiếu tự tin, khoá bổ túc 1 kèm 1 tại Hoàng Việt giúp học viên nhanh chóng làm chủ tay lái trên đường phố và đường đèo núi Lâm Đồng.",
    tag: "Khoá mới",
    tagColor: "bg-purple-600 text-white",
  },
  {
    id: 6,
    date: { day: "20", month: "04", year: "2026" },
    title: "Hoàng Việt khai trương cơ sở 2 tại Bảo Lộc",
    excerpt:
      "Đáp ứng nhu cầu học lái xe ngày càng tăng tại khu vực phía Nam tỉnh, Trung tâm Hoàng Việt chính thức mở cơ sở 2 tại 78 Trần Phú, TP. Bảo Lộc từ ngày 20/4/2026.",
    tag: "Mở rộng",
    tagColor: "bg-orange-500 text-white",
  },
];

export default function TinTucPage() {
  return (
    <main className="bg-bg-lighter min-h-screen">
      {/* Page header */}
      <div className="bg-primary py-14 px-6">
        <div className="max-w-container mx-auto px-6">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-white">Tin tức</span>
          </nav>
          <h1 className="text-white text-3xl font-bold mb-1">Tin tức</h1>
          <p className="text-white/60">Cập nhật mới nhất từ Trung tâm Đào tạo Lái xe Hoàng Việt</p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-container mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              {/* Date bar */}
              <div className="flex items-center gap-4 bg-primary px-5 py-4 shrink-0">
                <div className="text-center">
                  <p className="text-gold font-extrabold text-2xl leading-none">{article.date.day}</p>
                  <p className="text-white/60 text-xs mt-0.5">{article.date.month}/{article.date.year}</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${article.tagColor}`}>
                  {article.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-primary font-bold text-base leading-snug mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-4">
                  {article.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link
                    href={`/tin-tuc/${article.id}`}
                    className="flex items-center gap-2 text-primary-mid text-sm font-semibold hover:text-gold transition-colors"
                  >
                    Đọc thêm
                    <svg className="w-4 h-3" viewBox="0 0 19 9" fill="none">
                      <path d="M0 4.5h17M13 1l5 3.5-5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

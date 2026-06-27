import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const courses: Record<string, {
  title: string;
  subtitle: string;
  price: string;
  pdf: string | null;
  highlights: string[];
  description: string;
}> = {
  "hang-b-tu-dong": {
    title: "Hạng B tự động (B1)",
    subtitle: "Phù hợp lái xe cá nhân, xe gia đình",
    price: "24.000.000 đ",
    pdf: "/hang-b.pdf",
    highlights: ["710 km đường trường (DAT)", "11 bài sa hình chuẩn", "168h lý thuyết theo TT12/2017"],
    description:
      "Khoá học bằng lái xe hạng B tự động phù hợp với học viên có nhu cầu lái xe cá nhân, xe gia đình và không kinh doanh vận tải. Xe số tự động dễ học, thích hợp cho người mới bắt đầu.",
  },
  "hang-b-so-san": {
    title: "Hạng B số sàn (B2)",
    subtitle: "Linh hoạt hơn — lái được cả xe tự động",
    price: "22.000.000 đ",
    pdf: "/hang-b.pdf",
    highlights: ["810 km đường trường (DAT)", "11 bài sa hình chuẩn", "168h lý thuyết theo TT12/2017"],
    description:
      "Khoá học bằng lái xe hạng B số sàn phù hợp với học viên muốn lái xe cá nhân, xe dịch vụ hoặc có nhu cầu sử dụng bằng lái linh hoạt hơn. Bằng B số sàn cho phép lái cả xe tự động.",
  },
  "hang-c1": {
    title: "Hạng C1",
    subtitle: "Xe tải từ 3.5 – 7.5 tấn và xe chuyên dùng",
    price: "25.000.000 đ",
    pdf: "/hang-c1.pdf",
    highlights: ["850 km đường trường (DAT)", "11 bài sa hình chuẩn", "168h lý thuyết theo TT12/2017"],
    description:
      "Khoá học bằng lái xe hạng C1 phù hợp với học viên muốn lái xe tải trung bình, xe chuyên dùng từ trên 3.500 kg đến 7.500 kg và các loại xe thuộc hạng B theo quy định.",
  },
  "bo-tuc": {
    title: "Bổ túc tay lái",
    subtitle: "Dành cho người đã có bằng nhưng chưa tự tin",
    price: "350.000đ / giờ",
    pdf: null,
    highlights: ["Lịch học linh hoạt theo yêu cầu", "Giáo viên 1 kèm 1 tận tâm", "Tối thiểu 1 giờ, không giới hạn số buổi"],
    description:
      "Khoá bổ túc tay lái dành cho người đã có bằng lái nhưng còn thiếu tự tin khi lái xe ngoài thực tế. Nội dung gồm lái trong phố đông, đường hẹp, đỗ xe, lùi xe, quay đầu và lái đèo núi.",
  },
};

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return Object.keys(courses).map((id) => ({ id }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = courses[id];
  if (!course) return { title: "Không tìm thấy khoá học" };
  return {
    title: `${course.title} – Hoàng Việt`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses[id];
  if (!course) notFound();

  return (
    <main className="bg-bg-lighter min-h-screen">
      {/* Breadcrumb + heading */}
      <div className="bg-primary py-12 px-6">
        <div className="max-w-container mx-auto px-6">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/#courses" className="hover:text-white transition-colors">Khoá học</Link>
            <span>/</span>
            <span className="text-white">{course.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-white text-3xl font-bold mb-1">{course.title}</h1>
              <p className="text-white/60 text-base">{course.subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gold font-bold text-2xl">{course.price}</span>
              <Link
                href="#cta-contact"
                className="bg-gold text-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-gold-light transition-colors"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

          {/* ── PDF Viewer ── */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-primary-mid text-xl font-bold">Chương trình đào tạo chi tiết</h2>
              {course.pdf && (
                <a
                  href={course.pdf}
                  download
                  className="flex items-center gap-2 text-primary-mid text-sm font-semibold hover:text-gold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Tải xuống PDF
                </a>
              )}
            </div>

            {course.pdf ? (
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  src={course.pdf}
                  className="w-full"
                  style={{ height: "80vh", minHeight: 600 }}
                  title={`Chương trình ${course.title}`}
                />
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-base mb-2">Khoá học này tư vấn trực tiếp theo nhu cầu</p>
                <p className="text-gray-400 text-sm">Vui lòng liên hệ hotline <a href="tel:0986219113" className="text-primary font-semibold">0986.219.113</a> để được tư vấn lịch học phù hợp.</p>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-6">
            {/* Course info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-primary font-bold text-lg mb-4">Thông tin khoá học</h3>
              <ul className="flex flex-col gap-3">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                {course.description}
              </p>
            </div>

            {/* Hồ sơ */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-primary font-bold text-lg mb-4">Hồ sơ đăng ký</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Bản photo Căn cước công dân
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Ảnh thẻ 3×5 nền xanh (8–10 ảnh)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Giấy khám sức khoẻ theo quy định
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div id="cta-contact" className="bg-primary rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-1">Đăng ký tư vấn</h3>
              <p className="text-white/60 text-sm mb-5">Chúng tôi sẽ liên hệ trong 30 phút</p>
              <a
                href="tel:0986219113"
                className="flex items-center justify-center gap-2 bg-gold text-primary font-bold text-sm w-full py-3 rounded-xl hover:bg-gold-light transition-colors mb-3"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0986.219.113
              </a>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 border border-white/20 text-white/70 text-sm w-full py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                ← Về trang chủ
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

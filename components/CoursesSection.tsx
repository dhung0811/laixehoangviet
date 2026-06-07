import Link from "next/link";
import { ASSETS } from "@/lib/assets";

const courses = [
  {
    id: "hang-b-tu-dong",
    name: "Hạng B tự động (B1)",
    price: "24.000.000 đ",
    badge: "Phổ biến",
    description: "Dành cho lái xe gia đình, du lịch. Dễ học, xe đời mới 2024.",
    image: ASSETS.galleryTopRight1,
    highlights: ["710 km đường trường", "11 bài sa hình", "168h lý thuyết"],
  },
  {
    id: "hang-b-so-san",
    name: "Hạng B số sàn (B2)",
    price: "22.000.000 đ",
    badge: null,
    description: "Dành cho người muốn lái xe cá nhân, xe dịch vụ, linh hoạt hơn số tự động.",
    image: ASSETS.galleryBottomRight,
    highlights: ["810 km đường trường", "11 bài sa hình", "168h lý thuyết"],
  },
  {
    id: "hang-c1",
    name: "Hạng C1",
    price: "25.000.000 đ",
    badge: "Phổ biến",
    description: "Lái xe tải từ 3.5 – 7.5 tấn. Cơ hội nghề nghiệp mở rộng.",
    image: ASSETS.galleryBig,
    highlights: ["850 km đường trường", "11 bài sa hình", "168h lý thuyết"],
  },
  {
    id: "bo-tuc",
    name: "Bổ túc tay lái",
    price: "350.000đ / giờ",
    badge: null,
    description: "Dành cho người đã có bằng nhưng chưa tự tin cầm lái một mình.",
    image: ASSETS.galleryTopRight2,
    highlights: ["Lịch linh hoạt", "1 kèm 1 tận tâm", "Từ 1 giờ trở lên"],
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-white py-24 px-6 lg:px-10" id="courses">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-primary-mid text-3xl font-bold mb-2">Các Khoá Học</h2>
            <p className="text-gray-500 text-base">Lựa chọn khoá học phù hợp với nhu cầu của bạn</p>
          </div>
          <Link
            href="/khoa-hoc/hang-b-tu-dong"
            className="flex items-center gap-2 text-primary-mid font-semibold text-sm hover:text-gold transition-colors w-fit"
          >
            Xem tất cả khoá học
            <svg className="w-5 h-3" viewBox="0 0 19 9" fill="none">
              <path d="M0 4.5h17M13 1l5 3.5-5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col"
            >
              {/* Badge */}
              {course.badge && (
                <div className="absolute top-4 right-4 z-10 bg-gold text-primary-mid text-xs font-bold px-3 py-1 rounded-full shadow">
                  {course.badge}
                </div>
              )}

              {/* Image */}
              <div className="h-48 overflow-hidden shrink-0">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-primary font-bold text-lg mb-2">{course.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{course.description}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5 mb-5">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Price + CTAs */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-bold text-base">{course.price}</span>
                    <Link
                      href={`/khoa-hoc/${course.id}`}
                      className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary-mid transition-colors"
                    >
                      Đăng ký
                    </Link>
                  </div>
                  <Link
                    href={`/khoa-hoc/${course.id}`}
                    className="flex items-center gap-1.5 text-primary-mid text-xs font-semibold hover:text-gold transition-colors"
                  >
                    Xem chi tiết chương trình
                    <svg className="w-3 h-2" viewBox="0 0 19 9" fill="none">
                      <path d="M0 4.5h17M13 1l5 3.5-5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const news = [
  {
    month: "06",
    day: "07",
    title: "Khai giảng lớp hạng B tháng 7/2026",
    description:
      "Trung tâm thông báo khai giảng lớp học bằng lái xe hạng B tháng 7/2026. Đăng ký sớm nhận ưu đãi giảm học phí.",
  },
  {
    month: "05",
    day: "20",
    title: "Ưu đãi giảm 1 triệu khi giới thiệu bạn bè",
    description:
      "Áp dụng đến hết ngày 31/12/2026 cho tất cả các khoá học tại trung tâm theo điều kiện của chương trình.",
  },
  {
    month: "04",
    day: "15",
    title: "Trung tâm mở thêm văn phòng tại Đức Trọng",
    description:
      "Hoàng Việt chính thức mở rộng với văn phòng thứ 2 tại 47E Cù Chính Lan, Đức Trọng, Lâm Đồng.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hỗ trợ 24/7",
    description: "Luôn sẵn sàng giải đáp mọi thắc mắc của bạn.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Giờ học linh hoạt",
    description: "Tự chọn lịch học theo thời gian rảnh.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Miễn phí xăng xe",
    description: "Trọn gói chi phí, không phát sinh thêm.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Ưu đãi giới thiệu",
    description: "Giảm 1.000.000đ cho học viên cũ giới thiệu thành công.",
  },
];

export default function NewsBenefitsSection() {
  return (
    <section className="bg-bg-lighter py-24 px-6 lg:px-10" id="benefits">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-14">

          {/* ── LEFT: News ── */}
          <div>
            {/* Heading + horizontal divider */}
            <div className="flex items-center gap-5 mb-8">
              <h2 className="text-primary-mid text-2xl font-bold shrink-0">Tin tức mới nhất</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex flex-col divide-y divide-gray-100">
              {news.map((item, i) => (
                <div key={i} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  {/* Date box */}
                  <div className="shrink-0 w-[96px] h-[96px] rounded-xl bg-primary flex flex-col items-center justify-center gap-1">
                    <span className="text-white/50 text-[10px] font-semibold uppercase tracking-widest">
                      Tháng {item.month}
                    </span>
                    <span className="text-gold font-bold text-4xl leading-none">{item.day}</span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-primary font-semibold text-base mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Benefits ── */}
          <div>
            <h2 className="text-primary-mid text-2xl font-bold mb-8">Quyền lợi học viên</h2>

            <div className="grid grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <div key={i} className="bg-primary rounded-2xl p-6 flex flex-col gap-4">
                  {/* Icon */}
                  <div className="w-8 h-8 text-gold">
                    {b.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-base mb-1.5">{b.title}</h5>
                    <p className="text-white/60 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

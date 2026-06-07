import { ASSETS } from "@/lib/assets";

const VisionIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const MissionIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CoreValuesIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const cards = [
  {
    id: "vision",
    title: "Tầm nhìn",
    bg: ASSETS.visionBg,
    Icon: VisionIcon,
    description:
      "Xây dựng Trung tâm Đào tạo Lái xe Hoàng Việt trở thành đơn vị đào tạo lái xe uy tín nằm trong tốp đầu trong lĩnh vực đào tạo lái xe tại Việt Nam.",
  },
  {
    id: "mission",
    title: "Sứ mệnh",
    bg: ASSETS.missionBg,
    Icon: MissionIcon,
    description:
      "Đồng hành cùng học viên trên hành trình chinh phục kỹ năng lái xe, góp phần xây dựng văn hoá giao thông an toàn và văn minh tại Việt Nam.",
  },
  {
    id: "coreValues",
    title: "Giá trị cốt lõi",
    bg: ASSETS.coreValuesBg,
    Icon: CoreValuesIcon,
    highlight: "AN TOÀN – TẬN TÂM –\nTRÁCH NHIỆM",
    description: "Safety – Dedication – Responsibility",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-bg-lighter py-24 px-6 lg:px-10" id="values">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-primary-mid text-3xl font-bold">Giới thiệu về Trung tâm</h2>
          <a
            href="#cta"
            className="hidden sm:inline-flex bg-primary-mid text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-primary transition-colors shadow-md"
          >
            Xem tất cả
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group"
            >
              {/* Background image */}
              <img
                src={card.bg}
                alt={card.title}
                className="absolute inset-0 w-[125%] h-full object-cover -left-[12.5%] group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[rgba(0,23,54,0.70)]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg text-primary">
                  <card.Icon />
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-bold mb-4">{card.title}</h3>

                {/* Highlight (core values) or description */}
                {card.highlight ? (
                  <div>
                    <p className="text-gold font-extrabold text-lg tracking-wide leading-snug mb-2 whitespace-pre-line">
                      {card.highlight}
                    </p>
                    <p className="text-white/70 text-sm italic">{card.description}</p>
                  </div>
                ) : (
                  <p className="text-white/85 text-sm leading-relaxed">{card.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

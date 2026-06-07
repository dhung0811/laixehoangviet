import { ASSETS } from "@/lib/assets";

const VisionIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const MissionIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CoreValuesIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const cards = [
  {
    id: "vision",
    title: "Tầm nhìn",
    bg: ASSETS.visionBg,
    Icon: VisionIcon,
    highlight: null as string | null,
    description:
      "Xây dựng Trung tâm Đào tạo Lái xe Hoàng Việt trở thành đơn vị đào tạo lái xe uy tín nằm trong tốp đầu trong lĩnh vực đào tạo lái xe tại Việt Nam.",
  },
  {
    id: "mission",
    title: "Sứ mệnh",
    bg: ASSETS.missionBg,
    Icon: MissionIcon,
    highlight: null as string | null,
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
            Liên hệ tư vấn
          </a>
        </div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group aspect-[4/5] [perspective:1000px]"
            >
              {/* Flipper */}
              <div className="relative w-full h-full [transform-style:preserve-3d] transition-[transform] duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]">

                {/* ── FRONT: image + icon + title ── */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl [backface-visibility:hidden]">
                  <img
                    src={card.bg}
                    alt={card.title}
                    className="absolute inset-0 w-[125%] h-full object-cover -left-[12.5%]"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,23,54,0.70)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg text-primary">
                      <card.Icon />
                    </div>
                    <h3 className="text-white text-3xl font-bold">{card.title}</h3>
                  </div>
                </div>

                {/* ── BACK: description on dark navy ── */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl bg-primary [backface-visibility:hidden] flex flex-col items-center justify-center px-8 text-center"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {/* Faint bg image for depth */}
                  <div className="absolute inset-0 opacity-[0.08]">
                    <img src={card.bg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-gold/30 flex items-center justify-center text-gold shadow-lg">
                      <card.Icon />
                    </div>
                    <h3 className="text-white text-2xl font-bold">{card.title}</h3>
                    {card.highlight ? (
                      <div>
                        <p className="text-gold font-extrabold text-lg tracking-wide leading-snug mb-2 whitespace-pre-line">
                          {card.highlight}
                        </p>
                        <p className="text-white/60 text-sm italic">{card.description}</p>
                      </div>
                    ) : (
                      <p className="text-white/80 text-sm leading-relaxed">{card.description}</p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

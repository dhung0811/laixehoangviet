import { ASSETS } from "@/lib/assets";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBg}
          alt="Trung tâm đào tạo lái xe Hoàng Việt"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,23,54,0.92)] via-[rgba(0,23,54,0.65)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-10 w-full">
        {/* Heading — no width cap so the full first line can render without wrapping */}
        {/* md:whitespace-nowrap keeps the first line intact once the viewport is wide enough;
            font sizes are chosen so the full line fits at each breakpoint without clipping. */}
        <h1 className="font-display text-[28px] sm:text-[34px] md:text-[38px] lg:text-[50px] leading-[1.15] tracking-tight mb-6 md:whitespace-nowrap">
          <span className="text-gold-gradient">
            TRUNG TÂM ĐÀO TẠO LÁI XE
            <br />
            HOÀNG VIỆT
          </span>
        </h1>

        {/* Description — constrained for readability */}
        <div className="max-w-[580px]">
          <p className="text-white/90 text-base leading-relaxed mb-4">
            Trung tâm Đào tạo Lái xe Hoàng Việt được thành lập vào năm 2026, hoạt động tại Lâm Đồng,
            với tổng 1000 học viên được đào tạo, tỷ lệ đậu sát hạch đạt{" "}
            <span className="text-gold font-semibold">90%</span>, đội ngũ giáo viên 1 kèm 1,
            lịch học linh động, đảm bảo không phát sinh chi phí ngoài hợp đồng.
          </p>

          <p className="text-white/80 text-sm leading-relaxed mb-8 italic">
            "Với phương châm{" "}
            <span className="text-gold not-italic font-medium">Vững tay lái – Sáng tương lai</span>,
            Trung tâm luôn đặt sự an toàn, chất lượng đào tạo và trải nghiệm học viên lên hàng đầu."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-gold text-[#705100] font-bold text-lg px-8 py-4 rounded-xl hover:bg-gold-light transition-colors shadow-lg"
            >
              Đăng ký tư vấn miễn phí
              <img src={ASSETS.heroArrow} alt="" className="w-4 h-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Xem các khóa học
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

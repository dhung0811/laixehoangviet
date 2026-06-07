"use client";

import { useState, useEffect } from "react";

const slides = [
  { src: "/hero/hero1.jpg", alt: "Trung tâm Đào tạo Lái xe Hoàng Việt" },
  { src: "/hero/hero2.jpg", alt: "Hoàng Việt – lớp học lý thuyết" },
  { src: "/hero/hero3.jpg", alt: "Hoàng Việt – thực hành sa hình" },
  { src: "/hero/hero4.jpg", alt: "Hoàng Việt – đội xe tập lái" },
  { src: "/hero/hero5.jpg", alt: "Hoàng Việt – sân lái xe" },
  { src: "/hero/hero6.jpg", alt: "Hoàng Việt – sa hình" },
  { src: "/hero/hero7.jpg", alt: "Hoàng Việt – sân lái xe1"},
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setIdx((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setIdx((p) => (p + 1) % slides.length);

  return (
    <section
      className="relative h-[600px] flex items-center overflow-hidden"
      id="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide images — fade between them */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[rgba(0,23,54,0.92)] via-[rgba(0,23,54,0.65)] to-transparent" />

      {/* Content */}
      <div className="relative z-30 max-w-container mx-auto px-6 lg:px-10 w-full">
        {/* Heading */}
        <h1 className="font-display text-[28px] sm:text-[34px] md:text-[38px] lg:text-[50px] leading-[1.15] tracking-tight mb-6 md:whitespace-nowrap">
          <span className="text-gold-gradient">
            TRUNG TÂM ĐÀO TẠO LÁI XE
            <br />
            HOÀNG VIỆT
          </span>
        </h1>

        <div className="max-w-[580px]">
          <p className="text-white/90 text-base leading-relaxed mb-4">
            Trung tâm Đào tạo Lái xe Hoàng Việt được thành lập vào năm 2024, hoạt động tại Lâm Đồng,
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
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

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Slide trước"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Slide tiếp theo"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === idx
                ? "w-6 h-2.5 bg-gold"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

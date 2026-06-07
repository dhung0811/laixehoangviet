"use client";

import { useState } from "react";
import { ASSETS } from "@/lib/assets";

const slides = [
  {
    number: "01",
    title: "Giáo dục\ntoàn diện",
    subtitle: "Holistic Driver Education",
    description:
      "Kết hợp kiến thức pháp luật, kỹ năng điều khiển phương tiện và kỹ năng mềm như quan sát, xử lý tình huống, giữ bình tĩnh; giúp học viên lái xe an toàn, tự tin và có trách nhiệm.",
    image: ASSETS.galleryTopRight1,
  },
  {
    number: "02",
    title: "Lấy người học\nlàm trung tâm",
    subtitle: "Learner-Centered Education",
    description:
      "Thấu hiểu năng lực tiếp thu, tâm lý và kinh nghiệm lái xe của từng học viên; từ đó xây dựng cách hướng dẫn phù hợp, giúp người học từng bước tiến bộ, tự tin và làm chủ tay lái.",
    image: ASSETS.galleryBottomRight,
  },
  {
    number: "03",
    title: "Đào tạo\nthực tiễn",
    subtitle: "Experiential Learning",
    description:
      "Gắn lý thuyết với thực hành sân tập, đường trường và tình huống giao thông thực tế; giúp học viên biết vận dụng kiến thức, kỹ năng vào quá trình lái xe an toàn hằng ngày.",
    image: ASSETS.galleryBig,
  },
];

export default function TimelineSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  const leftIdx = (active - 1 + slides.length) % slides.length;
  const rightIdx = (active + 1) % slides.length;

  return (
    <section className="relative overflow-hidden" id="philosophy">
      {/* Split background */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="h-[461px] bg-primary" />
        <div className="flex-1 bg-bg-lighter" />
      </div>

      <div className="relative z-10 py-24">
        {/* Header */}
        <div className="text-center mb-14 px-6">
          <h2 className="text-white text-[36px] font-bold mb-3">Triết lý giáo dục của chúng tôi</h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto">
            Chúng tôi tin rằng mọi học viên đều xứng đáng được đào tạo theo phương pháp tốt nhất,
            phù hợp với từng cá nhân.
          </p>
        </div>

        {/* Carousel track — full width, partial cards visible on sides */}
        <div className="relative flex items-center justify-center gap-4 px-4">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide row */}
          <div className="flex items-center gap-4 overflow-hidden max-w-[calc(259px+16px+512px+16px+259px)] w-full">
            {/* Left partial neighbor */}
            <div className="hidden md:block shrink-0 w-[259px] h-[288px] rounded-xl overflow-hidden relative">
              <img
                src={slides[leftIdx].image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,23,54,0.6)]" />
            </div>

            {/* Active center card */}
            <div className="flex-1 md:w-[512px] md:flex-none h-[450px] rounded-2xl overflow-hidden shadow-2xl flex">
              {/* Left: image */}
              <div className="w-1/2 relative shrink-0">
                <img
                  src={slides[active].image}
                  alt={slides[active].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Right: content */}
              <div className="w-1/2 bg-primary flex flex-col justify-center px-8 py-8 shrink-0">
                <span className="text-gold font-bold text-2xl mb-3">{slides[active].number}</span>
                <h3 className="text-white font-bold text-lg leading-snug mb-1 whitespace-pre-line">
                  {slides[active].title}
                </h3>
                <p className="text-white/50 text-xs italic mb-5">{slides[active].subtitle}</p>
                <p className="text-white/75 text-sm leading-relaxed mb-8">{slides[active].description}</p>
                <button
                  onClick={next}
                  className="flex items-center gap-2 text-white/70 font-semibold text-sm hover:text-gold transition-colors w-fit"
                >
                  Tiếp theo
                  <svg className="w-5 h-3" viewBox="0 0 19 9" fill="none">
                    <path d="M0 4.5h17M13 1l5 3.5-5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right partial neighbor */}
            <div className="hidden md:block shrink-0 w-[259px] h-[288px] rounded-xl overflow-hidden relative">
              <img
                src={slides[rightIdx].image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,23,54,0.6)]" />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-8 h-3 bg-gold" : "w-3 h-3 bg-primary/25 hover:bg-primary/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

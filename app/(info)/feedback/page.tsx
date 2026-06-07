"use client";

import { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Nguyễn Thị Lan",
    course: "Hạng B tự động (B1)",
    rating: 5,
    month: "Tháng 5/2026",
    content:
      "Giáo viên rất tận tâm, kiên nhẫn hướng dẫn từng động tác. Tôi trước giờ chưa bao giờ lái xe nhưng sau 3 tháng học ở Hoàng Việt đã đậu ngay lần đầu. Lịch học linh hoạt rất phù hợp với người đi làm như tôi.",
  },
  {
    name: "Trần Văn Minh",
    course: "Hạng B số sàn (B2)",
    rating: 5,
    month: "Tháng 4/2026",
    content:
      "Xe tập mới, sân bãi rộng rãi. Thầy dạy rất nhiệt tình, luôn sẵn sàng giải thích lại khi mình chưa hiểu. Chi phí thực tế đúng như hợp đồng, không phát sinh thêm bất kỳ khoản nào.",
  },
  {
    name: "Lê Thị Hương",
    course: "Bổ túc tay lái",
    rating: 5,
    month: "Tháng 5/2026",
    content:
      "Đã có bằng được 2 năm nhưng vẫn rất run khi lái một mình. Sau 5 buổi bổ túc 1 kèm 1 tại Hoàng Việt, tôi đã tự tin chạy đường Đà Lạt – Bảo Lộc một mình. Rất đáng tiền!",
  },
  {
    name: "Phạm Quốc Tuấn",
    course: "Hạng C1",
    rating: 4,
    month: "Tháng 3/2026",
    content:
      "Khoá C1 có ít học viên hơn nên được thực hành nhiều. Thầy có kinh nghiệm lái xe tải lâu năm, chia sẻ nhiều kinh nghiệm thực tế rất hữu ích. Thi đậu sau 2 lần, lần đầu trượt bài 7 nhưng được trung tâm hỗ trợ ôn thêm miễn phí.",
  },
  {
    name: "Ngô Thị Thu",
    course: "Hạng B tự động (B1)",
    rating: 5,
    month: "Tháng 4/2026",
    content:
      "Môi trường học thoải mái, không bị áp lực. Các thầy cô ở đây rất thân thiện và hay động viên học viên. Tôi đậu sát hạch lần đầu, điểm lý thuyết 23/25. Cảm ơn Hoàng Việt rất nhiều!",
  },
  {
    name: "Đinh Văn Hùng",
    course: "Hạng B số sàn (B2)",
    rating: 5,
    month: "Tháng 2/2026",
    content:
      "Đã giới thiệu thêm 3 người bạn tới học ở Hoàng Việt. Chất lượng đào tạo ổn định, tỷ lệ đậu của lớp tôi đạt 100%. Đặc biệt thích cái xe tập đời mới, phanh nhạy, dễ điều khiển hơn những chỗ khác.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i <= count ? "text-gold" : "text-gray-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", course: "", rating: 5, content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.content.trim()) return;
    setSubmitted(true);
  };

  const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <main className="bg-bg-lighter min-h-screen">
      {/* Page header */}
      <div className="bg-primary py-14 px-6">
        <div className="max-w-container mx-auto px-6">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-white">Đánh giá</span>
          </nav>
          <h1 className="text-white text-3xl font-bold mb-1">Học viên nói gì về chúng tôi?</h1>
          <p className="text-white/60">Ý kiến thực tế từ các học viên đã tốt nghiệp tại Hoàng Việt</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-10 py-14">

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { value: avgRating, label: "Điểm trung bình", suffix: "/5" },
            { value: "1000+", label: "Học viên đã học", suffix: "" },
            { value: "90%", label: "Tỷ lệ đậu lần đầu", suffix: "" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
              <p className="text-primary font-extrabold text-3xl">
                {stat.value}<span className="text-lg text-gray-400">{stat.suffix}</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              {stat.suffix === "/5" && (
                <div className="flex justify-center mt-2">
                  <Stars count={5} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gold font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-primary font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.month}</p>
                  </div>
                </div>
                <Stars count={t.rating} />
              </div>

              {/* Course badge */}
              <span className="w-fit bg-bg-light text-primary-mid text-xs font-semibold px-2.5 py-1 rounded-full">
                {t.course}
              </span>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.content}</p>

              {/* Verified */}
              <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Học viên đã xác minh
              </div>
            </div>
          ))}
        </div>

        {/* Submit feedback form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-primary font-bold text-xl mb-1">Gửi đánh giá của bạn</h2>
          <p className="text-gray-400 text-sm mb-6">Ý kiến của bạn giúp chúng tôi cải thiện chất lượng đào tạo</p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-primary font-bold text-lg">Cảm ơn bạn đã đánh giá!</p>
              <p className="text-gray-500 text-sm">Đánh giá của bạn sẽ được hiển thị sau khi kiểm duyệt.</p>
              <button
                className="mt-2 text-sm text-primary-mid font-semibold hover:text-gold transition-colors"
                onClick={() => setSubmitted(false)}
              >
                Gửi đánh giá khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">Họ và tên *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">Khoá đã học</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Chọn khoá học</option>
                    <option>Hạng B tự động (B1)</option>
                    <option>Hạng B số sàn (B2)</option>
                    <option>Hạng C1</option>
                    <option>Bổ túc tay lái</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Đánh giá sao</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setForm({ ...form, rating: star })}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-7 h-7 transition-colors ${star <= form.rating ? "text-gold" : "text-gray-200 hover:text-gold/50"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Nội dung đánh giá *</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={4}
                  placeholder="Chia sẻ trải nghiệm của bạn tại Hoàng Việt..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-primary-mid transition-colors"
              >
                Gửi đánh giá
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function CTASection() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
    setPhone("");
  };

  return (
    <section className="bg-gold py-14 px-6 lg:px-10" id="cta">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Text */}
          <div>
            <h3 className="text-primary font-bold text-2xl mb-1">
              Bạn đã sẵn sàng để cầm lái?
            </h3>
            <p className="text-primary/70 text-sm">
              Để lại thông tin, chúng tôi sẽ gọi lại tư vấn chi tiết cho bạn ngay!
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex items-center gap-2 text-primary font-semibold py-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cảm ơn! Chúng tôi sẽ liên hệ sớm.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại của bạn"
                className="flex-1 sm:w-64 bg-white text-primary placeholder-gray-400 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <button
                type="submit"
                className="bg-primary text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-primary-mid transition-colors shrink-0"
              >
                Đăng ký ngay
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

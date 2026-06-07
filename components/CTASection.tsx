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
    <section className="bg-primary py-16 px-6 lg:px-10" id="cta">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Text */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Sẵn sàng bắt đầu hành trình học lái xe?
            </h3>
            <p className="text-white/60 text-sm">
              Để lại số điện thoại, tư vấn viên sẽ liên hệ trong vòng 30 phút.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
          >
            {submitted ? (
              <div className="flex items-center gap-2 text-gold font-semibold py-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cảm ơn! Chúng tôi sẽ liên hệ sớm.
              </div>
            ) : (
              <>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại của bạn"
                  className="flex-1 sm:w-64 bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gold text-primary-mid font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-gold-light transition-colors shrink-0"
                >
                  Đăng ký ngay
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Trang chủ", href: "#" },
  { label: "Thông tin", href: "#values" },
  { label: "Khoá đào tạo", href: "#courses" },
  { label: "Quyền lợi", href: "#benefits" },
  { label: "Liên hệ", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top branding bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Logo Hoàng Việt"
              width={56}
              height={56}
              className="rounded-full object-cover shrink-0"
            />
            <div>
              <p className="font-bold text-primary text-sm lg:text-base leading-tight">
                TRUNG TÂM ĐÀO TẠO LÁI XE HOÀNG VIỆT
              </p>
              <p className="text-xs text-gray-500">Vững tay lái – Sáng tương lai</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-primary">
            <a
              href="tel:0986219113"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-semibold">0986.219.113</span>
            </a>
            <a
              href="mailto:daotaolaixehoangviet@gmail.com"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden xl:inline">daotaolaixehoangviet@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-primary">
        <div className="max-w-container mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className="hidden lg:inline-flex items-center bg-gold text-primary-mid font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-gold-light transition-colors"
          >
            Đăng ký học
          </a>

          {/* Mobile */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-white font-bold text-sm">HOÀNG VIỆT</span>
            <button
              className="text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-primary-mid border-t border-white/10">
            <ul className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm text-white/80 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cta"
                  className="mt-2 block text-center bg-gold text-primary-mid font-bold text-sm px-6 py-2.5 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Đăng ký học
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

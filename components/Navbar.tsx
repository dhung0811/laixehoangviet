"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type DropdownItem = { label: string; href: string };
type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Thông tin",
    href: "/tin-tuc",
    dropdown: [
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Thông báo chiêu sinh", href: "/thong-bao-chieu-sinh" },
      { label: "Lịch thi sát hạch", href: "/lich-thi-sat-hach" },
      { label: "Trả GPLX", href: "/tra-gplx" },
    ],
  },
  {
    label: "Khoá đào tạo",
    href: "/#courses",
    dropdown: [
      { label: "Hạng B tự động (B1)", href: "/khoa-hoc/hang-b-tu-dong" },
      { label: "Hạng B số sàn (B2)", href: "/khoa-hoc/hang-b-so-san" },
      { label: "Hạng C1", href: "/khoa-hoc/hang-c1" },
      { label: "Bổ túc tay lái", href: "/khoa-hoc/bo-tuc" },
    ],
  },
  { label: "Quyền lợi", href: "/#benefits" },
  { label: "Đánh giá", href: "/feedback" },
  { label: "Liên hệ", href: "/#footer" },
];

const ChevronDown = () => (
  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  const toggleMobile = (label: string) =>
    setOpenMobile((prev) => (prev === label ? null : label));

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top branding bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          {/* Contact info */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-primary">
            <a href="tel:0986219113" className="flex items-center gap-2 hover:text-gold transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-semibold">0986.219.113</span>
            </a>
            <a href="mailto:daotaolaixehoangviet@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
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

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 h-full">
            {navLinks.map((link) =>
              link.dropdown ? (
                /* Item with dropdown */
                <li key={link.label} className="group relative h-full flex items-center">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    {link.label}
                    <ChevronDown />
                  </Link>

                  {/* Dropdown panel */}
                  <div className="absolute top-full left-0 pt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[220px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-primary hover:bg-bg-light hover:text-primary-mid transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                /* Simple item */
                <li key={link.label} className="h-full flex items-center">
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <Link
            href="/#cta"
            className="hidden lg:inline-flex items-center bg-gold text-primary-mid font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-gold-light transition-colors"
          >
            Đăng ký học
          </Link>

          {/* Mobile toggle */}
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-primary-mid border-t border-white/10">
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li key={link.label}>
                    <button
                      className="flex items-center justify-between w-full py-2.5 text-sm text-white/80 hover:text-white"
                      onClick={() => toggleMobile(link.label)}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${openMobile === link.label ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobile === link.label && (
                      <ul className="pl-4 pb-2 flex flex-col gap-0.5 border-l border-white/10 ml-1">
                        {link.dropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-2 py-2 text-xs text-white/60 hover:text-white transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-2.5 text-sm text-white/80 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/#cta"
                  className="mt-2 block text-center bg-gold text-primary-mid font-bold text-sm px-6 py-2.5 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Đăng ký học
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

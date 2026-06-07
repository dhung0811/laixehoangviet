import type { Metadata } from "next";
import { Inter, Abril_Fatface } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trung tâm Đào tạo Lái xe Hoàng Việt – Vững tay lái, Sáng tương lai",
  description:
    "Trung tâm Đào tạo Lái xe Hoàng Việt tại Lâm Đồng. Đào tạo bằng lái B tự động, B số sàn, C1 và bổ túc tay lái. Tỷ lệ đậu 90%. Hotline: 0986.219.113",
  keywords: "học lái xe Lâm Đồng, bằng lái xe B, C1, Hoàng Việt, trung tâm lái xe",
  icons: {
    icon: "https://res.cloudinary.com/dsun7efy3/image/upload/f_auto,q_auto/v1780841121/logo_lydtft.jpg",
    apple: "https://res.cloudinary.com/dsun7efy3/image/upload/f_auto,q_auto/v1780841121/logo_lydtft.jpg",
  },
  openGraph: {
    title: "Trung tâm Đào tạo Lái xe Hoàng Việt",
    description: "Vững tay lái – Sáng tương lai. Đào tạo lái xe uy tín tại Lâm Đồng.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${abrilFatface.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

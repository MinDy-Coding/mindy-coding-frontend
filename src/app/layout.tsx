import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MinDy Coding",
  description: "Nền tảng học lập trình hàng đầu",
  icons: {
    icon: "/logos/logo-mindy.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

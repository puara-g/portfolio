import type { Metadata } from "next";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// TODO: 실제 이름/설명으로 교체하세요.
export const metadata: Metadata = {
  title: "김가현 | 포트폴리오",
  description:
    "데이터 설계부터 React·Next.js UI까지, 서비스 전 과정을 만드는 풀스택 개발자 김가현의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-bg text-text antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

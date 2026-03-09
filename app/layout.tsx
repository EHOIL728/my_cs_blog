import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../public/fonts/Pretendard-ExtraBold.otf",
});

export const metadata: Metadata = {
  title: "홍익인간 2.0의 블로그",
  description: "데이터로 널리 인간 세상을 이롭게 하기 위해",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={myFont.className}>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl">데홍익인간</h1>
        </header>
        {"데이터로 널리 인간 세상을 이롭게 하다."}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

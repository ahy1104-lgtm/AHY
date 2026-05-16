import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "약산 에듀케이션",
  description: "모두가 행복해지는 교육 서비스, 약산 에듀케이션입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* 상단 헤더 영역 */}
        <header className="w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-bold text-blue-600 tracking-tight">약산</span>
              <span className="text-lg font-medium text-slate-500">Education</span>
            </div>
            
            <nav className="flex gap-4 sm:gap-8">
              {/* 여기에 새로운 네비게이션 링크를 추가하세요 */}
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">소개</a>
              <a href="/guestbook" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">방명록</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">과정안내</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">고객센터</a>
            </nav>
            
            <div className="flex items-center gap-3">
              {/* 여기에 로그인/회원가입 버튼 등 새로운 컴포넌트를 추가하세요 */}
              <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2">
                로그인
              </button>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* 하단 푸터 영역 */}
        <footer className="w-full bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} 약산 에듀케이션. All rights reserved.
            </p>
            <div className="flex gap-4">
               {/* 여기에 추가적인 푸터 링크나 SNS 아이콘 등을 추가하세요 */}
               <a href="#" className="text-sm hover:text-white transition-colors">이용약관</a>
               <a href="#" className="text-sm hover:text-white transition-colors">개인정보처리방침</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

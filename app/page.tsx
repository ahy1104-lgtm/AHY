import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-3xl w-full text-center space-y-10 flex flex-col items-center">
        
        {/* 환영 문구 및 설명 영역 */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight pb-2">
            행복하세요
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            더 나은 미래를 위한 첫 걸음, 약산과 함께하세요.<br className="hidden sm:block" />
            당신의 가능성을 활짝 피울 수 있도록 저희가 돕겠습니다.
          </p>
        </div>

        {/* 시작하기 버튼 (방명록으로 이동) */}
        <div className="pt-4">
          <Link href="/guestbook" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            시작하기
            <svg 
              className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </div>

        {/* 추가적인 섹션이나 기능을 위한 안내 주석 */}
        {/* 
          // 여기에 새로운 컴포넌트를 추가하세요
          // 예: <FeatureList />, <TestimonialSection /> 등
        */}
      </div>
    </div>
  );
}

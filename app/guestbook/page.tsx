import { sql } from '@/lib/db';
import GuestbookForm from '@/components/GuestbookForm';

// Force dynamic rendering to ensure fresh data on every request
export const dynamic = 'force-dynamic';

export default async function GuestbookPage() {
  let entries: { id: number; name: string; message: string; created_at: Date }[] = [];
  let dbError = false;

  try {
    // 1. Ensure the table exists (runs on every page load to guarantee it exists)
    await sql`
      CREATE TABLE IF NOT EXISTS guestbook (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Fetch the latest entries
    entries = await sql`
      SELECT id, name, message, created_at 
      FROM guestbook 
      ORDER BY created_at DESC 
      LIMIT 50
    ` as any;
  } catch (error) {
    console.error('Failed to connect to the database or fetch entries:', error);
    dbError = true;
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center py-12 px-6 sm:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-3xl w-full flex flex-col items-center">
        
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            방명록
          </h1>
          <p className="text-lg text-slate-600">
            약산 에듀케이션에 방문해주셔서 감사합니다. 소중한 발자취를 남겨주세요.
          </p>
        </div>

        {dbError ? (
          <div className="w-full bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 text-center mb-8">
            <p className="font-medium">데이터베이스 연결에 문제가 발생했습니다.</p>
            <p className="text-sm mt-1">Vercel 환경 변수(DATABASE_URL) 설정을 확인해주세요.</p>
          </div>
        ) : (
          <GuestbookForm />
        )}

        <div className="w-full max-w-2xl space-y-4">
          <h3 className="text-xl font-bold text-slate-800 mb-6">최근 메시지</h3>
          
          {entries.length === 0 && !dbError ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-500">아직 작성된 메시지가 없습니다. 첫 번째 방명록을 남겨보세요!</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div 
                key={entry.id} 
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2 transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-800">{entry.name}</span>
                  <span className="text-xs text-slate-400">
                    {new Date(entry.created_at).toLocaleDateString('ko-KR', {
                      year: 'numeric', month: 'long', day: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed break-words">{entry.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

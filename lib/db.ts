import { neon } from '@neondatabase/serverless';

// Vercel 빌드 시 에러가 나지 않도록, 실제 런타임에만 변수를 확인합니다.
const getDb = () => {
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL environment variable is not set. Database will not work.');
    return neon('postgresql://dummy'); // Fallback for build time
  }
  return neon(process.env.DATABASE_URL);
};

export const sql = getDb();

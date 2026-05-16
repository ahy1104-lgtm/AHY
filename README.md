# 약산 에듀케이션 (Yaksan Education)

이 프로젝트는 Vercel 배포에 최적화된 Next.js + Tailwind CSS + Neon Postgres 보일러플레이트입니다.

## 🛠 기술 스택
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Neon Postgres (Serverless)
- **Deployment**: Vercel

## 💾 데이터베이스 사용 가이드 (For AI & Developers)

이 프로젝트는 Vercel 환경 변수에 설정된 `DATABASE_URL`을 통해 Neon 데이터베이스와 연결되어 있습니다.
앞으로 새로운 기능을 추가할 때 아래의 규칙을 따릅니다.

1. **DB 연결 모듈**: 데이터베이스 통신이 필요할 때는 항상 `lib/db.ts`에서 `sql` 모듈을 불러와서 사용합니다.
   ```typescript
   import { sql } from '@/lib/db';
   ```

2. **테이블 자동 생성 (마이그레이션)**:
   현재 로컬 개발 환경에 Node.js가 설치되어 있지 않아 CLI 마이그레이션(예: Prisma, Drizzle-kit)을 실행하기 어렵습니다. 
   따라서 새로운 기능을 만들 때는 **Server Component나 Server Action 내부에서 반드시 `CREATE TABLE IF NOT EXISTS` 구문을 먼저 실행**하여, 테이블이 없으면 자동으로 생성되도록 보장해야 합니다.

3. **데이터 처리 (Server Actions 권장)**:
   데이터를 삽입/수정/삭제할 때는 클라이언트 컴포넌트 내부에서 직접 호출하지 않고, `app/.../actions.ts`에 분리된 **Server Action**을 생성하여 처리합니다.

## 🚀 배포
GitHub의 `main` 브랜치에 코드가 푸시되면 Vercel이 자동으로 감지하여 빌드 및 배포를 진행합니다.

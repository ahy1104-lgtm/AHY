'use client';

import { useRef, useState } from 'react';
import { addGuestbookEntry } from '@/app/guestbook/actions';

export default function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    setMessage('');
    
    try {
      const result = await addGuestbookEntry(formData);
      if (result?.error) {
        setMessage(result.error);
      } else {
        formRef.current?.reset();
      }
    } catch (error) {
      setMessage('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form 
      ref={formRef} 
      action={handleSubmit} 
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 w-full max-w-2xl mb-8"
    >
      <h2 className="text-lg font-bold text-slate-800">방명록 남기기</h2>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="이름"
          required
          maxLength={50}
          className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors w-full sm:w-1/3"
        />
        <input
          type="text"
          name="message"
          placeholder="따뜻한 메시지를 남겨주세요"
          required
          maxLength={500}
          className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors flex-1"
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isPending ? '등록 중...' : '등록'}
        </button>
      </div>
      
      {message && (
        <p className="text-sm text-red-500 mt-1">{message}</p>
      )}
    </form>
  );
}

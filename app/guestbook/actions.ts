'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addGuestbookEntry(formData: FormData) {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!name || !message) {
    throw new Error('Name and message are required');
  }

  try {
    // Insert the new entry into the database
    await sql`
      INSERT INTO guestbook (name, message)
      VALUES (${name}, ${message})
    `;

    // Revalidate the guestbook page to show the new entry immediately
    revalidatePath('/guestbook');
    return { success: true };
  } catch (error) {
    console.error('Failed to add entry:', error);
    return { success: false, error: 'Failed to add entry to the database' };
  }
}

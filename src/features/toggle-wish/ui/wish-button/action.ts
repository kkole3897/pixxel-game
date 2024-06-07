'use server';
import { revalidatePath } from 'next/cache';

export async function revalidateWishlist() {
  revalidatePath('/wishlist');
}

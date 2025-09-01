'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { uploadImage } from '@/lib/cloudinary';

export async function createPost(prevState, formData: FormData) {
  const title: string = formData.get('title');
  const image:string = formData.get('image');
  const content:string = formData.get('content');

  const errors: string[] = [];

  if (!title || title.trim().length === 0) {
    errors.push('Title is required.');
  }

  if (!content || content.trim().length === 0) {
    errors.push('Content is required.');
  }

  if (!image || image.size === 0) {
    errors.push('Image is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      'Image upload failed, post was not created. Please try again later.'
    );
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath('/', 'layout');
  redirect('/feed');
}

export async function togglePostLikeStatus(postId: number) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath('/', 'layout');
}

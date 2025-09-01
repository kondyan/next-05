import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';
import {Post} from "@/Types/Types";

export default async function FeedPage() {
  const posts: Post[] = await getPosts(5);
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}

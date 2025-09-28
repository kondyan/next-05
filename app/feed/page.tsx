import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

interface Post {
  id: number;
  userFirstName?: string;
  userLastName?: string;
  email?: string;
  image: string;
  title: string;
  content: string;
  createdAt: string;
  userId: number;
  likes: number;
  isLiked: boolean;
}

export default async function FeedPage() {
  const posts: Post[] = await getPosts(5);
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}

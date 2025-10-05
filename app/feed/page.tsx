import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { Metadata } from "next";

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

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: `Browse all our ${numberOfPosts} posts.`,
  };
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

import { Suspense } from "react";

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

export const metadata: Metadata = {
  title: "Latest Posts",
  description: "Browse our latest Posts",
};

async function LatestPosts() {
  const latestPosts: Post[] = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&#39;s what you might&#39;ve missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}

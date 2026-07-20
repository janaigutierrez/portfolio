import { getAllPosts } from "@/lib/blog";
import BlogListContent from "@/components/blog/BlogListContent";

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogListContent posts={posts} />;
}

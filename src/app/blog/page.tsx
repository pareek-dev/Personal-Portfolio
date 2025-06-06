import BlogPostCard from '@/components/blog-post-card';
import { blogPosts } from '@/lib/blog-data';
import { Separator } from '@/components/ui/separator';
import { Rss } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center space-x-3">
        <Rss className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-headline font-bold text-primary">Blog</h1>
      </div>
      <Separator />
      <p className="text-lg text-muted-foreground">
        Thoughts, tutorials, and insights on MERN stack development and more.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

import { getBlogPostBySlug, blogPosts, type BlogPost } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, User, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | MERN Portfolio Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center">
            <User className="mr-1.5 h-4 w-4" />
            By {post.author}
          </div>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
             <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary">{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      {post.imageUrl && (
        <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint={post.imageAiHint || "article banner"}
          />
        </div>
      )}
      
      <Separator className="my-8" />

      <Card className="shadow-md">
        <CardContent className="pt-6">
            <div
            className="prose prose-lg max-w-none 
                       prose-headings:font-headline prose-headings:text-primary 
                       prose-p:text-foreground/90 prose-li:text-foreground/90
                       prose-strong:text-accent prose-a:text-accent prose-a:hover:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </CardContent>
      </Card>

    </article>
  );
}

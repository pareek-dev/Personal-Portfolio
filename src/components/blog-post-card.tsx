import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/blog-data';
import { ArrowRight, CalendarDays, User } from 'lucide-react';
import { Badge } from './ui/badge';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} passHref className="block">
          <div className="relative w-full h-48 md:h-56">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={post.imageAiHint || "article topic"}
            />
          </div>
        </Link>
      )}
      <CardHeader>
        <Link href={`/blog/${post.slug}`} passHref>
            <CardTitle className="font-headline text-xl md:text-2xl text-primary hover:text-accent transition-colors">
              {post.title}
            </CardTitle>
        </Link>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
            <div className="flex items-center">
                <CalendarDays className="mr-1 h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author}
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 line-clamp-3">{post.excerpt}</CardDescription>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {post.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-accent hover:text-primary p-0">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

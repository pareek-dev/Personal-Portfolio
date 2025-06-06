import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 rounded-lg shadow-sm animate-in fade-in duration-500">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
            <Image 
              src="https://placehold.co/150x150.png" 
              alt="Profile Picture" 
              width={150} 
              height={150} 
              className="rounded-full shadow-lg border-4 border-primary"
              data-ai-hint="profile person" 
            />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">
          MERN Stack Developer Intern
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-10">
          Passionate about building modern, responsive web applications with cutting-edge technologies. Currently honing my skills in the MERN stack and eager to contribute to innovative projects.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/projects">
              View My Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/resume.pdf" target="_blank" download>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CodeXml, Home, Briefcase, FileText, Rss, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/resume-optimizer', label: 'Resume AI', icon: FileText },
  { href: '/blog', label: 'Blog', icon: Rss },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, icon: Icon, exact = false }: { href: string; label: string; icon: React.ElementType; exact?: boolean }) => {
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    return (
      <Link href={href} passHref>
        <Button
          variant="ghost"
          className={cn(
            'justify-start text-foreground hover:bg-primary/10 hover:text-primary',
            isActive && 'bg-primary/10 text-primary font-semibold'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Icon className="mr-2 h-5 w-5" />
          {label}
        </Button>
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary">
          <CodeXml className="h-7 w-7" />
          <span>MERN Portfolio</span>
        </Link>

        <nav className="hidden items-center space-x-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} exact={item.href === '/'} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-lg font-headline font-bold text-primary">
                  <CodeXml className="h-6 w-6" />
                  <span>MERN Portfolio</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} exact={item.href === '/'} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

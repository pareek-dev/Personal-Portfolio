'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Send, Github, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';


const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form data:', data);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center space-x-3">
        <Mail className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-headline font-bold text-primary">Contact Me</h1>
      </div>
      <Separator />
      <p className="text-lg text-muted-foreground">
        Have a question, a project idea, or just want to connect? Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Send a Message</CardTitle>
            <CardDescription>I'll do my best to respond as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="mt-1" {...register('name')} />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1" {...register('email')} />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                <Textarea id="message" rows={5} placeholder="Your message here..." className="mt-1" {...register('message')} />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>
              <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
                 {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Other Ways to Connect</CardTitle>
            <CardDescription>Find me on these platforms or drop me an email.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <Link href="mailto:youremail@example.com" className="text-accent hover:underline">
                  youremail@example.com
                </Link>
              </div>
            </div>
             <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-foreground">Phone (Optional)</p>
                <Link href="tel:+1234567890" className="text-accent hover:underline">
                  +1 (234) 567-890
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors">
              <Linkedin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  linkedin.com/in/yourusername
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors">
              <Github className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  github.com/yourusername
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

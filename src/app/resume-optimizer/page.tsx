'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { optimizeResumeAction } from '@/app/actions/optimize-resume-action';
import type { OptimizeResumeOutput } from '@/ai/flows/optimize-resume';
import { Loader2, FileText, Sparkles, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const resumeOptimizerSchema = z.object({
  resumeFile: z
    .custom<FileList>()
    .refine((files) => files && files.length === 1, 'Resume file is required.')
    .refine((files) => files && files[0].size <= MAX_FILE_SIZE, `File size should be less than ${MAX_FILE_SIZE / (1024*1024)}MB.`)
    .refine((files) => files && ALLOWED_FILE_TYPES.includes(files[0].type), 'Invalid file type. Please upload a PDF or DOCX file.'),
  jobDescription: z.string().min(50, 'Job description must be at least 50 characters long.'),
});

type ResumeOptimizerFormValues = z.infer<typeof resumeOptimizerSchema>;

export default function ResumeOptimizerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<OptimizeResumeOutput | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResumeOptimizerFormValues>({
    resolver: zodResolver(resumeOptimizerSchema),
  });

  const onSubmit: SubmitHandler<ResumeOptimizerFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);

    const file = data.resumeFile[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      if (event.target?.result) {
        const resumeDataUri = event.target.result as string;
        try {
          const response = await optimizeResumeAction({
            resumeDataUri,
            jobDescription: data.jobDescription,
          });

          if ('error' in response) {
            toast({
              variant: 'destructive',
              title: 'Optimization Failed',
              description: response.error,
            });
          } else {
            setResult(response);
            toast({
              title: 'Resume Optimized!',
              description: 'Your resume suggestions are ready.',
            });
          }
        } catch (error) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'An unexpected error occurred.',
          });
        } finally {
          setIsLoading(false);
        }
      }
    };

    reader.onerror = () => {
      toast({
        variant: 'destructive',
        title: 'File Read Error',
        description: 'Could not read the resume file.',
      });
      setIsLoading(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center space-x-3">
        <FileText className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-headline font-bold text-primary">Resume Optimizer AI</h1>
      </div>
      <Separator />
      <p className="text-lg text-muted-foreground">
        Upload your resume and paste a job description to get AI-powered tips for optimizing your application.
      </p>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-accent">Optimize Your Resume</CardTitle>
          <CardDescription>Fill in the details below to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="resumeFile" className="text-foreground font-medium">Upload Resume (PDF or DOCX, max 5MB)</Label>
              <Input
                id="resumeFile"
                type="file"
                accept=".pdf,.docx"
                className="mt-1 file:text-primary file:font-semibold file:bg-primary/10 hover:file:bg-primary/20"
                {...register('resumeFile')}
              />
              {errors.resumeFile && (
                <p className="mt-1 text-sm text-destructive">{errors.resumeFile.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="jobDescription" className="text-foreground font-medium">Job Description</Label>
              <Textarea
                id="jobDescription"
                rows={8}
                placeholder="Paste the job description here..."
                className="mt-1"
                {...register('jobDescription')}
              />
              {errors.jobDescription && (
                <p className="mt-1 text-sm text-destructive">{errors.jobDescription.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" /> Optimize Resume
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card className="mt-8 shadow-lg animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent flex items-center">
                <Lightbulb className="mr-2 h-6 w-6" /> AI Generated Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Optimized Resume Points:</h3>
              <div className="prose prose-sm max-w-none p-4 border rounded-md bg-secondary/30 whitespace-pre-wrap">
                {result.optimizedResume}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Improvement Suggestions:</h3>
              <div className="prose prose-sm max-w-none p-4 border rounded-md bg-secondary/30 whitespace-pre-wrap">
                {result.suggestions}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

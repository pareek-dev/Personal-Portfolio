'use server';
import type { OptimizeResumeInput, OptimizeResumeOutput } from '@/ai/flows/optimize-resume';
import { optimizeResume as optimizeResumeFlow } from '@/ai/flows/optimize-resume';

export async function optimizeResumeAction(
  input: OptimizeResumeInput
): Promise<OptimizeResumeOutput | { error: string }> {
  try {
    // Basic validation for data URI format (more robust validation could be added)
    if (!input.resumeDataUri.startsWith('data:') || !input.resumeDataUri.includes(';base64,')) {
      return { error: "Invalid resume data URI format. Expected 'data:<mimetype>;base64,<encoded_data>'." };
    }
    const result = await optimizeResumeFlow(input);
    return result;
  } catch (e) {
    console.error("Error optimizing resume:", e);
    // Check if 'e' is an Error object and has a 'message' property
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during resume optimization.";
    return { error: errorMessage };
  }
}

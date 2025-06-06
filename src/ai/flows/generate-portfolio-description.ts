'use server';

/**
 * @fileOverview AI flow to generate project descriptions for a portfolio website.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A detailed description of the project.'),
  technologiesUsed: z.string().describe('A comma-separated list of technologies used in the project.'),
  liveDemoUrl: z.string().optional().describe('URL to the live demo of the project.'),
  githubRepoUrl: z.string().optional().describe('URL to the GitHub repository of the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  generatedDescription: z.string().describe('A concise and compelling description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a professional portfolio curator. Generate a compelling and concise description for the following project, highlighting its key features and technologies.  The description should be no more than 150 words.

Project Name: {{{projectName}}}
Project Description: {{{projectDescription}}}
Technologies Used: {{{technologiesUsed}}}

{{#if liveDemoUrl}}Live Demo: {{{liveDemoUrl}}}{{/if}}
{{#if githubRepoUrl}}GitHub Repository: {{{githubRepoUrl}}}{{/if}}
`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

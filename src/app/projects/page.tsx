import ProjectCard, { type Project } from '@/components/project-card';
import { Separator } from '@/components/ui/separator';
import { Briefcase } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with the MERN stack, including product listings, shopping cart, user authentication, and an admin panel for managing products and orders.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'online store',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT'],
    liveDemoUrl: '#',
    githubRepoUrl: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application allowing users to create projects, assign tasks, track progress, and communicate with team members. Features real-time updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'tasks checklist',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    liveDemoUrl: '#',
    githubRepoUrl: '#',
  },
  {
    id: '3',
    title: 'Blogging Platform',
    description: 'A dynamic blogging platform where users can create, edit, and publish articles. Includes features like commenting, categories, and a rich text editor.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'writing blog',
    technologies: ['Express.js', 'React', 'Node.js', 'MongoDB', 'Markdown'],
    githubRepoUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center space-x-3">
        <Briefcase className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-headline font-bold text-primary">My Projects</h1>
      </div>
      <Separator />
      <p className="text-lg text-muted-foreground">
        Here are some of the projects I've worked on, showcasing my skills in MERN stack development.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

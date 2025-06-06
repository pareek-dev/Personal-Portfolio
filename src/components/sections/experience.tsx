import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Tech Solutions Inc.',
    duration: 'June 2023 - Present',
    description: [
      'Developed and maintained web applications using MongoDB, Express.js, React, and Node.js.',
      'Collaborated with senior developers on various project features and bug fixes.',
      'Participated in agile development processes, including daily stand-ups and sprint planning.',
      'Gained hands-on experience in API development and integration.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'REST APIs']
  },
  // Add more experiences if any
   {
    role: 'MERN Stack Developer Intern',
    company: 'Tech Solutions Inc.',
    duration: 'June 2023 - Present',
    description: [
      'Developed and maintained web applications using MongoDB, Express.js, React, and Node.js.',
      'Collaborated with senior developers on various project features and bug fixes.',
      'Participated in agile development processes, including daily stand-ups and sprint planning.',
      'Gained hands-on experience in API development and integration.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'REST APIs']
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-16 animate-in fade-in duration-500" style={{animationDelay: '600ms'}}>
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-3xl text-primary">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-4 border rounded-md shadow-sm bg-background hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-accent">{exp.role}</h3>
                <p className="text-md font-medium text-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {exp.technologies && (
                   <div className="mt-3">
                     <span className="font-medium text-sm text-muted-foreground">Technologies: </span>
                     <span className="text-sm text-foreground">{exp.technologies.join(', ')}</span>
                   </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

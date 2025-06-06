import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Database, ServerCog, Atom, LayoutPanelLeft, Paintbrush, Braces, GitFork, TerminalSquare, Code } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Languages';
}

const skillsData: Skill[] = [
  { name: 'React', icon: Atom, category: 'Frontend' },
  { name: 'HTML5', icon: LayoutPanelLeft, category: 'Frontend' },
  { name: 'CSS3', icon: Paintbrush, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', icon: Braces, category: 'Languages' },
  { name: 'Node.js', icon: ServerCog, category: 'Backend' },
  { name: 'Express.js', icon: TerminalSquare, category: 'Backend' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'Git & GitHub', icon: GitFork, category: 'Tools' },
  { name: 'RESTful APIs', icon: Code, category: 'Backend'},
  { name: 'Tailwind CSS', icon: Paintbrush, category: 'Frontend'},
];

const skillCategories: Skill['category'][] = ['Languages', 'Frontend', 'Backend', 'Database', 'Tools'];


export default function SkillsSection() {
  return (
    <section className="py-16 bg-secondary/30 rounded-lg shadow-sm animate-in fade-in duration-500" style={{animationDelay: '400ms'}}>
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-2">
            <Lightbulb className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-3xl text-primary">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            {skillCategories.map(category => (
              <div key={category} className="mb-6">
                <h3 className="text-xl font-semibold text-accent mb-3">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData.filter(skill => skill.category === category).map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
                    >
                      <skill.icon className="mr-2 h-5 w-5" />
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

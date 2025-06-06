import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 animate-in fade-in duration-500" style={{animationDelay: '200ms'}}>
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-2">
            <UserCircle className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-3xl text-primary">About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground space-y-4">
            <p>
              Hello! I'm a highly motivated and enthusiastic MERN Stack Developer Intern with a strong foundation in JavaScript, React, Node.js, Express.js, and MongoDB. I am passionate about crafting elegant and efficient solutions to complex problems and continuously learning new technologies to enhance my skillset.
            </p>
            <p>
              My journey into web development started with a fascination for how websites are built and has grown into a deep appreciation for the power of code to create impactful user experiences. I thrive in collaborative environments and enjoy tackling challenges that push my abilities.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new tech blogs, contributing to open-source projects, and [mention a hobby or two, e.g., playing chess, hiking]. I'm excited about the opportunity to leverage my skills and passion to contribute to meaningful projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

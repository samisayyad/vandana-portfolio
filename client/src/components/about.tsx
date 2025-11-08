import { GraduationCap, Code, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Aspiring software developer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm Vandana, a passionate Computer Science and Engineering student at KSSEM, with a growing interest in 
              software development and emerging technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm currently focused on learning Core Java and building real-world project experience in Python through 
              my academic work. I enjoy solving problems, exploring programming concepts, and understanding how 
              technology can make a real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a self-driven learner, I'm always curious to explore new tools, frameworks, and best practices in 
              development. I'm also working on improving my understanding of object-oriented programming and data 
              structures to strengthen my technical foundation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond academics, I love reading books—especially those that help me grow technically and personally, 
              and I value learning from others through conversations and shared experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Maintaining high GPA while participating in tech competitions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Code className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Learning Core Java and Python with hands-on project experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-muted-foreground text-sm">
                  Tackling challenges through internships and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
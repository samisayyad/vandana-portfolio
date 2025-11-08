import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic journey and educational background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Secondary Education */}
          <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Secondary Education</h3>
                  <p className="text-primary font-semibold mb-2">Pre-University</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Gokak, Belagavi</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2020 - 2022</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Affiliated with Department of Pre-University Education, Karnataka
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bachelor's Degree */}
          <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering - Computer Science</h3>
                  <p className="text-primary font-semibold mb-2">Engineering</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>K.S. School of Engineering and Management, Bengaluru</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2022 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently pursuing final year with focus on software development and machine learning projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
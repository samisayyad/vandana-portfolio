import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Award, Trophy } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "Internship",
      title: "Java Development Intern",
      company: "Pinnacle Labs",
      duration: "Feb 17 - Mar 19, 2025",
      location: "Remote",
      icon: <Briefcase className="h-6 w-6" />,
      color: "text-blue-500",
      achievements: [
        "Contributed to multiple Java desktop applications including Currency Converter and Library Management System.",
        "Worked with Java Swing and integrated MySQL/SQLite for backend.",
        "Learned core Java development best practices in a structured internship."
      ],
      techStack: ["Java", "Swing", "MySQL", "SQLite", "JDBC"]
    },
    {
      type: "Hackathon",
      title: "Participant – Sentinel Hack 5.0",
      company: "KS Institute of Technology (State-level Hackathon)",
      duration: "April 28-29, 2025",
      location: "Bengaluru",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-purple-500",
      achievements: [
        "Participated in a 24-hour hackathon and developed an AI model for student career mapping using Python and ML libraries (scikit-learn, pandas).",
        "Worked in a team of 3 and presented a functional prototype."
      ],
      techStack: ["Python", "scikit-learn", "pandas", "Machine Learning"]
    },
    {
      type: "Academic",
      title: "Spotify App Project",
      company: "Academic Project",
      duration: "Oct – Dec 2024",
      location: "College",
      icon: <Award className="h-6 w-6" />,
      color: "text-green-500",
      achievements: [
        "Built a Spotify-like music player using Flask for backend.",
        "Deployed using Render and automated CI/CD with GitHub Actions."
      ],
      techStack: ["Python", "Flask", "Render", "GitHub Actions", "CI/CD"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            My hands-on experience through internships, hackathons, and academic projects that have shaped my technical skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline marker */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
                
                <div className="md:ml-20">
                  <Card className="bg-card border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-4 md:mb-0">
                          <div className={`${exp.color}`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        
                        <Badge className="bg-blue-600 text-white w-fit">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <span className="text-primary mt-1.5 text-xs">•</span>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {exp.techStack.map((tech, techIndex) => (
                          <div key={techIndex} className="relative">
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                              exp.color === 'text-blue-500' ? 'from-blue-500/20 to-blue-600/30' :
                              exp.color === 'text-purple-500' ? 'from-purple-500/20 to-purple-600/30' :
                              'from-green-500/20 to-green-600/30'
                            } blur-sm`}></div>
                            <Badge variant="outline" className="relative text-xs bg-card/80 backdrop-blur-sm border-2 hover:scale-110 transition-transform duration-200">
                              {tech}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
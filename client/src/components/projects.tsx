import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

export default function Projects() {
  const futureProjects = [
    {
      title: "AI-Powered Career Guidance System",
      description: "An AI-based platform to help students identify suitable career paths using resume parsing, skill mapping, and machine learning.",
      status: "In development",
      techStack: ["Python", "NLP", "BERT", "Streamlit", "SQLite"],
      features: ["Resume Analyzer", "Skill Gap Analysis", "Role Matcher", "Career Suggestions"]
    }
  ];

  const notableProjects = [
    {
      title: "Spotify App Clone",
      description: "A web-based Spotify clone with music streaming features, playlists, and search functionality.",
      year: "2024",
      techStack: ["Python", "Flask", "HTML", "CSS", "GitHub Actions", "Render"],
      bgImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
      icon: "🎵",
      githubLink: "https://github.com/VandanaBasavarajPatil/websitespotify"
    },
    {
      title: "Weather App",
      description: "Java-based desktop app that fetches real-time weather data and displays it in a user-friendly GUI.",
      year: "2024",
      techStack: ["Java", "Swing", "OpenWeather API"],
      bgImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      icon: "🌤️",
      githubLink: "https://github.com/VandanaBasavarajPatil/WeatherApp-Java"
    },
    {
      title: "Library Management System",
      description: "A complete student-library record management system using Java and a MySQL database.",
      year: "2024",
      techStack: ["Java", "JDBC", "SQLite"],
      bgImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
      icon: "📚",
      githubLink: "https://github.com/VandanaBasavarajPatil/LibraryManagementSystem-JAVA"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my technical projects, ranging from current developments to completed applications.
          </p>
        </div>

        {/* Future Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Future Projects</h3>
          {futureProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border mb-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <Badge className="bg-yellow-600 text-white">{project.status}</Badge>
                </div>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Tech Stack:</h5>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <div key={techIndex} className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/30 blur-sm"></div>
                        <Badge variant="outline" className="relative text-xs bg-card/80 backdrop-blur-sm border-2 hover:scale-110 transition-transform duration-200">
                          {tech}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Features Planned:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Flowchart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notable Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Notable Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notableProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group relative max-w-sm mx-auto">
                <div 
                  className="h-36 relative bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 group-hover:from-black/20 group-hover:to-black/40 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-90 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-blue-600/90 text-white backdrop-blur-sm group-hover:bg-blue-500 transition-colors duration-300 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <h4 className="text-lg font-bold text-white drop-shadow-lg">{project.title}</h4>
                  </div>
                </div>
                <CardContent className="p-4 group-hover:bg-gradient-to-br group-hover:from-card group-hover:to-primary/5 transition-all duration-300">
                  <p className="text-muted-foreground text-xs mb-3 group-hover:text-foreground/80 transition-colors duration-300 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <div key={techIndex} className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/30 blur-sm"></div>
                        <Badge variant="outline" className="relative text-xs bg-card/80 backdrop-blur-sm border-2 hover:scale-110 transition-transform duration-200 group-hover:bg-primary/10">
                          {tech}
                        </Badge>
                      </div>
                    ))}
                    {project.techStack.length > 3 && (
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-500/30 blur-sm"></div>
                        <Badge variant="outline" className="relative text-xs bg-card/80 backdrop-blur-sm border-2">
                          +{project.techStack.length - 3}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="w-full text-xs hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 group-hover:border-primary/50" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://github.com/VandanaBasavarajPatil" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
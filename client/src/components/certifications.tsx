
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "Microsoft Power Apps Certification",
      issuer: "Microsoft",
      id: "MSFT-PA-2024-001",
      year: "2024",
      description: "Certified in building custom business applications using Microsoft Power Platform",
      skills: ["Power Apps", "Power Automate", "Power BI"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "AWS Cloud Developing Certificate",
      issuer: "Amazon Web Services",
      id: "AWS-CD-2024-002",
      year: "2024",
      description: "Certified in developing and deploying applications on AWS cloud infrastructure",
      skills: ["AWS Lambda", "EC2", "S3", "DynamoDB"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Pinnacle Labs Internship Certificate",
      issuer: "Pinnacle Labs",
      id: "PL-INT-2024-003",
      year: "2024",
      description: "Successfully completed Java Development internship with hands-on project experience",
      skills: ["Java", "Spring Boot", "MySQL", "Git"],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Sentinel Hack 5.0 Participation Certificate",
      issuer: "KS Institute of Technology",
      id: "SH-PART-2024-004",
      year: "2024",
      description: "Participated in 24-hour state-level hackathon developing AI solutions for student career mapping",
      skills: ["Python", "Machine Learning", "Team Collaboration", "Problem Solving"],
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and credentials earned during my learning journey.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Certificate Card */}
          <div className="relative overflow-hidden rounded-lg">
            <Card className="bg-card border-border overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="md:flex h-full">
                {/* Certificate Image */}
                <div className="md:w-2/5 relative">
                  <img 
                    src={certifications[currentIndex].image} 
                    alt={certifications[currentIndex].title}
                    className="w-full h-64 md:h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{certifications[currentIndex].year}</Badge>
                  </div>
                </div>
                
                {/* Certificate Details */}
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">{certifications[currentIndex].title}</h3>
                  </div>
                  
                  <p className="text-primary font-semibold mb-2">Issued by: {certifications[currentIndex].issuer}</p>
                  <p className="text-muted-foreground text-sm mb-4">Certificate ID: {certifications[currentIndex].id}</p>
                  
                  <p className="text-muted-foreground mb-6">
                    {certifications[currentIndex].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {certifications[currentIndex].skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/30 blur-sm"></div>
                        <Badge variant="outline" className="relative text-xs bg-card/80 backdrop-blur-sm border-2 hover:scale-110 transition-transform duration-200">
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-fit hover:bg-primary hover:text-white transition-all duration-300">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-3">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Certificate Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary shadow-lg scale-105' 
                    : 'hover:shadow-md hover:scale-102'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white text-xs font-semibold truncate">{cert.title}</h4>
                    <p className="text-white/80 text-xs">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import profileImage from "@assets/vvv_1753965197998.jpg";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Web Developer", "AI/ML Enthusiast", "Tech Explorer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="relative flex justify-center lg:justify-center lg:pl-12">
            <div className="relative group">
              {/* Main profile circle with glow effect */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                {/* Glowing background circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#12bade]/20 to-[#00bcd4]/20 animate-pulse-glow"></div>

                {/* Main profile circle */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#1a2847] to-[#0f1b2e] border-4 border-[#12bade]/30 flex items-center justify-center shadow-2xl overflow-hidden">
                  {/* Profile Picture */}
                  <img 
                    src={profileImage} 
                    alt="Vandana Patil" 
                    className="w-full h-full object-cover rounded-full animate-fade-in animation-delay-400"
                  />
                </div>
              </div></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[#00bcd4] text-lg font-medium animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#00bcd4] animate-slide-up">
                Vandana Patil
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 animate-slide-up animation-delay-200">
                <span className="text-[#00bcd4] font-semibold">Aspiring Software Developer</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl animate-fade-in animation-delay-600">
              Final Year CSE Student and aspiring software developer, focused on hands-on 
              projects and continuous learning to build innovative solutions through code.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button variant="outline" size="icon" className="rounded-md border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors" asChild>
                <a href="https://www.linkedin.com/in/vandana-patil-78ba4032a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-md border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors" asChild>
                <a href="https://github.com/VandanaBasavarajPatil" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button className="bg-[#00bcd4] hover:bg-[#00acc1] text-white px-8 py-3 rounded-md font-medium">
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0f1b2e] px-8 py-3 rounded-md font-medium"
                onClick={scrollToNext}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="text-gray-400 hover:text-white"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/90 backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-6"
              size="sm"
              asChild
            >
              <a href="/VandanaResume.pdf" download="VandanaResume.pdf">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border mt-4 rounded-lg">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full"
                  size="sm"
                  asChild
                >
                  <a href="/VandanaResume.pdf" download="VandanaResume.pdf">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
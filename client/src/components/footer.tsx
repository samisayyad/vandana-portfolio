import { Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/vandana-patil-78ba4032a/", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/VandanaBasavarajPatil", label: "GitHub" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Vandana Patil</p>
          <p className="text-gray-400 mb-4">Engineering Student | Software Developer</p>
          <div className="flex justify-center gap-4 mb-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white transition-colors"
                asChild
              >
                <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Vandana Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

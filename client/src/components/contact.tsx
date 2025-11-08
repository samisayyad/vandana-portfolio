import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-muted-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border hover:border-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-muted-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border hover:border-primary transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-muted-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border hover:border-primary transition-colors duration-200"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me more about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background border-border resize-none hover:border-primary transition-colors duration-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-200"
                  disabled={contactMutation.isPending}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <Card className="bg-card border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium hover:text-primary transition-colors duration-200">vandanabasavaraja6@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors duration-200">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium hover:text-primary transition-colors duration-200">+91 8088492647</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium hover:text-primary transition-colors duration-200">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
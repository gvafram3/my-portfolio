import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-center" data-testid="text-contact-title">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg" data-testid="text-contact-subtitle">
          Let's collaborate on your next project
        </p>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" data-testid="label-name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" data-testid="label-email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" data-testid="label-message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4" data-testid="text-connect-title">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:visca.afram@example.com"
                  className="flex items-center gap-3 text-foreground hover-elevate p-3 rounded-lg transition-all"
                  data-testid="link-email"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>visca.afram@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/viscaafram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover-elevate p-3 rounded-lg transition-all"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="h-5 w-5 text-primary" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/viscaafram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover-elevate p-3 rounded-lg transition-all"
                  data-testid="link-github"
                >
                  <SiGithub className="h-5 w-5 text-primary" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-lg border">
              <h4 className="font-semibold mb-2" data-testid="text-response-time">
                Response Time
              </h4>
              <p className="text-muted-foreground" data-testid="text-response-info">
                I typically respond to all inquiries within 24-48 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

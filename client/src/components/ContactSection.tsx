import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";

export default function ContactSection() {
  const { toast } = useToast();
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div
        ref={ref}
        className={`w-full max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text" data-testid="text-contact-title">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg" data-testid="text-contact-subtitle">
          Let's collaborate on your next project
        </p>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <Card className="lg:col-span-3 border-2">
            <CardContent className="pt-6">
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
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-6" data-testid="text-connect-title">
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:visca.afram@example.com"
                  className="flex items-center gap-3 text-foreground hover-elevate p-4 rounded-lg transition-all group"
                  data-testid="link-email"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">visca.afram@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/viscaafram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover-elevate p-4 rounded-lg transition-all group"
                  data-testid="link-linkedin"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <SiLinkedin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/viscaafram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover-elevate p-4 rounded-lg transition-all group"
                  data-testid="link-github"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <SiGithub className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">GitHub Profile</span>
                </a>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2" data-testid="text-response-time">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for Work
                </h4>
                <p className="text-muted-foreground text-sm" data-testid="text-response-info">
                  I typically respond to all inquiries within 24-48 hours. Looking forward to hearing from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

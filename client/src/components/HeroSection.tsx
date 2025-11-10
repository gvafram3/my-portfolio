import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_229953d7.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-name">
              Visca Gyebi Afram
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium" data-testid="text-tagline">
              Flutter & Dart Developer | Web & Mobile Applications | UI/UX Enthusiast
            </p>
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-intro">
              I'm a passionate developer building responsive and efficient web and mobile apps. 
              I specialize in Flutter and Dart, integrating Firebase for backend services and 
              Riverpod for state management. I focus on creating applications that combine 
              performance, usability, and clean design.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Visca Gyebi Afram - Flutter Developer"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

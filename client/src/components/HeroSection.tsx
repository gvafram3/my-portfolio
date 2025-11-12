import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_229953d7.png";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

//   const handleDownloadResume = () => {
//     // Create a simple resume content
//     const resumeContent = `
// VISCA GYEBI AFRAM
// Flutter & Dart Developer | Web & Mobile Applications | UI/UX Enthusiast
// Email: visca.afram@example.com
// LinkedIn: linkedin.com/in/viscaafram
// GitHub: github.com/viscaafram

// ABOUT
// Passionate developer building responsive and efficient web and mobile apps. I specialize in Flutter and Dart, integrating Firebase for backend services and Riverpod for state management. I focus on creating applications that combine performance, usability, and clean design.

// SKILLS
// - Programming Languages: Dart (Expert), JavaScript (Advanced), HTML/CSS (Advanced)
// - Frameworks & Tools: Flutter (Expert), Firebase (Advanced), Riverpod (Expert), Git/GitHub (Advanced)
// - UI/UX Design: Responsive Design (Expert), FL Chart (Advanced), Material Design (Expert)
// - Other: Problem Solving (Expert), Project Planning (Advanced), Teamwork (Expert)

// PROJECTS
// 1. Admin Dashboard App - Lead Developer
//    Flutter app with Firebase backend featuring class-wise performance stats, top scorers, analytics charts (FL Chart), and user management.
//    Technologies: Flutter, Dart, Firebase, FL Chart, Riverpod

// 2. Leaderboard & Performance Tracker - Full Stack Developer
//    Cross-platform app with ranking system, filters, search, podium highlights, and dynamic UI using Riverpod state management.
//    Technologies: Flutter, Dart, Riverpod, Firebase Firestore

// 3. Progress & Analytics Screen - Frontend Developer
//    User-focused dashboard showing quiz history, scores over time, achievement badges, and interactive charts for performance tracking.
//    Technologies: Flutter, Dart, FL Chart, Firebase

// EXPERIENCE & ACHIEVEMENTS
// - Developed responsive admin dashboards with real-time data visualization using FL Chart
// - Designed modular, maintainable Flutter applications following clean architecture principles
// - Implemented dynamic chart and analytics systems for tracking user performance and progress
// - Integrated Firebase Authentication and Firestore for secure, scalable backend solutions
// - Built cross-platform applications serving users on both iOS and Android platforms
// - Utilized Riverpod for efficient state management across complex application workflows
// `;

//     const blob = new Blob([resumeContent], { type: 'text/plain' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'Visca_Gyebi_Afram_Resume.txt';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   };

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/viscaresume.pdf'; 
  link.download = 'Visca_Gyebi_Afram_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="w-full max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full" data-testid="badge-greeting">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text" data-testid="text-name">
              Visca Gyebi Afram
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium" data-testid="text-tagline">
              Flutter & Dart Developer | Web & Mobile Applications | UI/UX Enthusiast
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed" data-testid="text-intro">
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
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
                className="group"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleDownloadResume}
                data-testid="button-download-resume"
                className="group"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl transition-transform group-hover:scale-105">
                <img 
                  src="/attached_assets/visca.jpg" 
             
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

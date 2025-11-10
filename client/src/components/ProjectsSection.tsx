import ProjectCard from "./ProjectCard";
import adminDashboard from "@assets/generated_images/Admin_Dashboard_App_screenshot_9e30d3f0.png";
import leaderboard from "@assets/generated_images/Leaderboard_Performance_Tracker_interface_0066fe69.png";
import analytics from "@assets/generated_images/Progress_Analytics_Screen_interface_a7e458a5.png";
import { useInView } from "@/hooks/use-in-view";

export default function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      id: "admin-dashboard",
      title: "Admin Dashboard App",
      role: "Lead Developer",
      description: "Flutter app with Firebase backend. Features class-wise performance stats, top scorers, analytics charts (FL Chart), and user management.",
      technologies: ["Flutter", "Dart", "Firebase", "FL Chart", "Riverpod"],
      image: adminDashboard,
    },
    {
      id: "leaderboard-tracker",
      title: "Leaderboard & Performance Tracker",
      role: "Full Stack Developer",
      description: "Cross-platform app with ranking system, filters, search, podium highlights, and dynamic UI using Riverpod state management.",
      technologies: ["Flutter", "Dart", "Riverpod", "Firebase Firestore"],
      image: leaderboard,
    },
    {
      id: "analytics-dashboard",
      title: "Progress & Analytics Screen",
      role: "Frontend Developer",
      description: "User-focused dashboard showing quiz history, scores over time, achievement badges, and interactive charts for performance tracking.",
      technologies: ["Flutter", "Dart", "FL Chart", "Firebase"],
      image: analytics,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div
        ref={ref}
        className={`w-full max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg" data-testid="text-projects-subtitle">
          Here are some of my recent Flutter applications
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                role={project.role}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

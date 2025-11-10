import ProjectCard from "./ProjectCard";
import adminDashboard from "@assets/generated_images/Admin_Dashboard_App_screenshot_9e30d3f0.png";
import leaderboard from "@assets/generated_images/Leaderboard_Performance_Tracker_interface_0066fe69.png";
import analytics from "@assets/generated_images/Progress_Analytics_Screen_interface_a7e458a5.png";

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-center" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg" data-testid="text-projects-subtitle">
          Here are some of my recent Flutter applications
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              role={project.role}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

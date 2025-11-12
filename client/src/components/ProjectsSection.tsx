// import ProjectCard from "./ProjectCard";
// import adminDashboard from "@assets/generated_images/Admin_Dashboard_App_screenshot_9e30d3f0.png";
// import leaderboard from "@assets/generated_images/Leaderboard_Performance_Tracker_interface_0066fe69.png";
// import analytics from "@assets/generated_images/Progress_Analytics_Screen_interface_a7e458a5.png";
// // import quizHomePage from "../../../attached_assets/Quiz_HomePage.png";
// import { useInView } from "@/hooks/use-in-view";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// export default function ProjectsSection() {
//   const { ref, isInView } = useInView({ threshold: 0.1 });
//   const [activeFilter, setActiveFilter] = useState("All");

//   const projects = [
//     {
//       id: "admin-dashboard",
//       title: "Admin Dashboard App",
//       role: "Lead Developer",
//       description: "Flutter app with Firebase backend. Features class-wise performance stats, top scorers, analytics charts (FL Chart), and user management.",
//       technologies: ["Flutter", "Dart", "Firebase", "FL Chart", "Riverpod"],
//       image: adminDashboard,
//     },
//     // {
//     //   id: "csm-study-app",
//     //   title: "CSM Study App",
//     //   role: "Full Stack Developer",
//     //   description: "Flutter app for Introduction to Computers exam prep. Includes quizzes, analytics, progress tracking, and leaderboards with Firebase backend.",
//     //   technologies: ["Flutter", "Dart", "Firebase", "FL Chart", "Riverpod"],
//     //   image: quizHomePage,
//     // },
//     {
//       id: "leaderboard-tracker",
//       title: "Leaderboard & Performance Tracker",
//       role: "Full Stack Developer",
//       description: "Cross-platform app with ranking system, filters, search, podium highlights, and dynamic UI using Riverpod state management.",
//       technologies: ["Flutter", "Dart", "Riverpod", "Firebase Firestore"],
//       image: leaderboard,
//     },
//     {
//       id: "analytics-dashboard",
//       title: "Progress & Analytics Screen",
//       role: "Frontend Developer",
//       description: "User-focused dashboard showing quiz history, scores over time, achievement badges, and interactive charts for performance tracking.",
//       technologies: ["Flutter", "Dart", "FL Chart", "Firebase"],
//       image: analytics,
//     },
  
//   {
//     id: "admin-dashboard",
//     title: "Admin Dashboard App",
//     role: "Lead Developer",
//     description:
//       "Flutter app with Firebase backend. Features class-wise performance stats, top scorers, analytics charts (FL Chart), and user management.",
//     technologies: ["Flutter", "Dart", "Firebase", "FL Chart", "Riverpod"],
//     image: "/projects/admin_dashboard.png", // 👈 public folder path
//   },
//   {
//     id: "leaderboard-tracker",
//     title: "Leaderboard & Performance Tracker",
//     role: "Full Stack Developer",
//     description:
//       "Cross-platform app with ranking system, filters, search, podium highlights, and dynamic UI using Riverpod state management.",
//     technologies: ["Flutter", "Dart", "Riverpod", "Firebase Firestore"],
//     image: "/projects/leaderboard.png", // 👈 public folder path
//   },
//   {
//     id: "analytics-dashboard",
//     title: "Progress & Analytics Screen",
//     role: "Frontend Developer",
//     description:
//       "User-focused dashboard showing quiz history, scores over time, achievement badges, and interactive charts for performance tracking.",
//     technologies: ["Flutter", "Dart", "FL Chart", "Firebase"],
//     image: "/projects/analytics.png", // 👈 public folder path
//   },
//   // Optional one you commented out:
//   // {
//   //   id: "csm-study-app",
//   //   title: "CSM Study App",
//   //   role: "Full Stack Developer",
//   //   description: "Flutter app for Introduction to Computers exam prep. Includes quizzes, analytics, progress tracking, and leaderboards.",
//   //   technologies: ["Flutter", "Dart", "Firebase", "FL Chart", "Riverpod"],
//   //   image: "/projects/quiz_homepage.png",
//   // },
// ];



//   const allTechnologies = Array.from(
//     new Set(projects.flatMap(p => p.technologies))
//   ).sort();
  
//   const filters = ["All", ...allTechnologies];

//   const filteredProjects = activeFilter === "All" 
//     ? projects 
//     : projects.filter(p => p.technologies.includes(activeFilter));

//   return (
//     <section id="projects" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
//       <div
//         ref={ref}
//         className={`w-full max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
//           isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text" data-testid="text-projects-title">
//           Featured Projects
//         </h2>
//         <p className="text-center text-muted-foreground mb-8 text-lg" data-testid="text-projects-subtitle">
//           Here are some of my recent Flutter applications
//         </p>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {filters.map((filter) => (
//             <Button
//               key={filter}
//               variant={activeFilter === filter ? "default" : "outline"}
//               size="sm"
//               onClick={() => setActiveFilter(filter)}
//               data-testid={`button-filter-${filter.toLowerCase()}`}
//             >
//               {filter}
//             </Button>
//           ))}
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`transition-all duration-700 ${
//                 isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//               style={{ transitionDelay: `${index * 150}ms` }}
//             >
//               <ProjectCard
//                 id={project.id}
//                 title={project.title}
//                 role={project.role}
//                 description={project.description}
//                 technologies={project.technologies}
//                 image={project.image}
//               />
//             </div>
//           ))}
//         </div>

//         {filteredProjects.length === 0 && (
//           <p className="text-center text-muted-foreground mt-8" data-testid="text-no-projects">
//             No projects found for this technology.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

import ProjectCard from "./ProjectCard";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
  
    {
      id: "student-quiz-home-page",
      title: "Quiz App Home Page",
      role: "Full Stack Developer",
      description:
        "An interactive quiz app for students with real-time scoring, progress tracking, and leaderboard rankings, built using Flutter and Firebase.",
      technologies: ["Flutter", "Dart", "Riverpod"],
      image: "/attached_assets/Quiz_HomePage.png", 
      link: "https://csm-with-visca.vercel.app/"
    },
    {
      id: "analytics-screen",
      title: "Performance Tracker and Analytics",
      role: "Full Stack Developer",
      description:
        "An interactive quiz app for students with real-time scoring, progress tracking, and leaderboard rankings, built using Flutter and Firebase.",
       technologies: ["Flutter", "Dart", "Firebase", "FL Chart", "Riverpod", "Analytics"],
      image: "/attached_assets/Progress_Analytics.png", 
      link: "https://csm-with-visca.vercel.app/"
    },
    {
      id: "leaderboard",
      title: "Quiz App Leaderboard",
      role: "Full Stack Developer",
      description:
        "An interactive quiz app for students with real-time scoring, progress tracking, and leaderboard rankings, built using Flutter and Firebase.",
       technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
      image: "/attached_assets/Leaderboard.png",
      link: "https://csm-with-visca.vercel.app/"
    },
    {
      id: "question-page",
      title: "Quiz App Question Page",
      role: "Full Stack Developer",
      description:
        "An interactive quiz app for students with real-time scoring, progress tracking, and leaderboard rankings, built using Flutter and Firebase.",
       technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
      image: "/attached_assets/QuestionPage.png", 
      link: "https://csm-with-visca.vercel.app/"
    },
   
    {
      id: "admin-dashboard",
      title: "Admin Dashboard - SLAM",
      role: "Front End Developer",
      description:
       "A real-time student location tracking and alert system designed to enhance campus safety. Built with Flutter and Firebase, it enables admins to monitor student movements, manage alerts, and visualize location analytics through an interactive dashboard.",
       technologies: ["Flutter", "Dart", "Riverpod"],
      image: "/attached_assets/SOS-Alerts.png", 
    },
    {
      id: "student-location",
      title: "Student Homepage - SLAM",
      role: "Front End Developer",
      description:
       "A real-time student location tracking and alert system designed to enhance campus safety. Built with Flutter and Firebase, it enables admins to monitor student movements, manage alerts, and visualize location analytics through an interactive dashboard.",
       technologies: ["Flutter", "Dart", "Riverpod", "Google Maps API"],
      image: "/attached_assets/SLAM.png", 
    },
    {
      id: "kudi-access",
      title: "Budget Planner - KudiAccess",
      role: "Front End Developer",
      description:
       "A budget planning app specifically for autistic individuals, featuring intuitive interfaces for expense tracking, goal setting, and visual analytics to promote financial independence and literacy.",
       technologies: ["Flutter", "Dart", "Riverpod", "Firebase", "FL Chart"],
      image: "/attached_assets/Kudi.png", 
    },
  
    {
      id: "plagioscope",
      title: "Plagiarism Checker - PlagioScope",
      role: "Front End Developer",
      description:
        "A plagiarism detection tool that scans documents against a vast database of sources to identify potential content duplication, providing detailed reports and similarity scores to ensure originality and academic integrity.",
       technologies: ["Flutter", "Dart", "Riverpod"],
      image: "/attached_assets/First_Page.png", 
    },
  ];

  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  const filters = ["All", ...allTechnologies];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`w-full max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-lg">
          Here are some of my recent Flutter applications
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No projects found for this technology.
          </p>
        )}
      </div>
    </section>
  );
}


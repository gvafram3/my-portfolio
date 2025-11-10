import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export default function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const achievements = [
    "Developed responsive admin dashboards with real-time data visualization using FL Chart",
    "Designed modular, maintainable Flutter applications following clean architecture principles",
    "Implemented dynamic chart and analytics systems for tracking user performance and progress",
    "Integrated Firebase Authentication and Firestore for secure, scalable backend solutions",
    "Built cross-platform applications serving users on both iOS and Android platforms",
    "Utilized Riverpod for efficient state management across complex application workflows",
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div
        ref={ref}
        className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text" data-testid="text-experience-title">
          Experience & Achievements
        </h2>
        
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`flex gap-4 items-start p-4 rounded-lg hover-elevate transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`achievement-${index}`}
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg leading-relaxed text-foreground/90" data-testid={`text-achievement-${index}`}>
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

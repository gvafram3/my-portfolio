import { CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const achievements = [
    "Developed responsive admin dashboards with real-time data visualization using FL Chart",
    "Designed modular, maintainable Flutter applications following clean architecture principles",
    "Implemented dynamic chart and analytics systems for tracking user performance and progress",
    "Integrated Firebase Authentication and Firestore for secure, scalable backend solutions",
    "Built cross-platform applications serving users on both iOS and Android platforms",
    "Utilized Riverpod for efficient state management across complex application workflows",
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-center" data-testid="text-experience-title">
          Experience & Achievements
        </h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="flex gap-4 items-start"
              data-testid={`achievement-${index}`}
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg leading-relaxed" data-testid={`text-achievement-${index}`}>
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

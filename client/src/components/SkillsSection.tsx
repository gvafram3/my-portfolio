import SkillCard from "./SkillCard";
import { Code2, Wrench, Palette, Briefcase } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export default function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Dart", "JavaScript", "HTML/CSS"],
      icon: Code2,
    },
    {
      category: "Frameworks & Tools",
      skills: ["Flutter", "Firebase Auth", "Firestore", "Riverpod", "Git/GitHub"],
      icon: Wrench,
    },
    {
      category: "UI/UX Design",
      skills: ["Responsive Design", "FL Chart", "Google Fonts", "Material Design"],
      icon: Palette,
    },
    {
      category: "Other Skills",
      skills: ["Microsoft Office", "Project Planning", "Problem Solving", "Teamwork"],
      icon: Briefcase,
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div
        ref={ref}
        className={`w-full max-w-6xl mx-auto transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text" data-testid="text-skills-title">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((skillCategory, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SkillCard
                category={skillCategory.category}
                skills={skillCategory.skills}
                icon={skillCategory.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

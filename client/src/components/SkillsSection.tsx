import SkillCard from "./SkillCard";
import { Code2, Wrench, Palette, Briefcase } from "lucide-react";

export default function SkillsSection() {
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
    <section id="skills" className="py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-center" data-testid="text-skills-title">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((skillCategory, index) => (
            <SkillCard
              key={index}
              category={skillCategory.category}
              skills={skillCategory.skills}
              icon={skillCategory.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

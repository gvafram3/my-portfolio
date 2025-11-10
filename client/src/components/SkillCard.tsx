import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export default function SkillCard({ category, skills, icon: Icon }: SkillCardProps) {
  return (
    <div className="space-y-4" data-testid={`card-skill-${category.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold" data-testid={`text-skill-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="text-sm px-3 py-1"
            data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

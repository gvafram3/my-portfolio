import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
  icon: LucideIcon;
}

export default function SkillCard({ category, skills, icon: Icon }: SkillCardProps) {
  return (
    <Card className="group hover-elevate transition-all duration-300" data-testid={`card-skill-${category.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold" data-testid={`text-skill-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
            {category}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2" data-testid={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-muted-foreground">
                {skill.level >= 90 ? "Expert" : skill.level >= 70 ? "Advanced" : skill.level >= 50 ? "Intermediate" : "Beginner"}
              </span>
            </div>
            <Progress value={skill.level} className="h-2" data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

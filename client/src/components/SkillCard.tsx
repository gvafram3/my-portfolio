import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  category: string;
  skills: string[];
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
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

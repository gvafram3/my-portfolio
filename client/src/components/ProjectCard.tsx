import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  image: string;
  id: string;
}

export default function ProjectCard({ title, role, description, technologies, image, id }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group h-full flex flex-col" data-testid={`card-project-${id}`}>
      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid={`img-project-${id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl" data-testid={`text-project-title-${id}`}>
          {title}
        </CardTitle>
        <p className="text-sm text-primary font-medium" data-testid={`text-project-role-${id}`}>
          {role}
        </p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-foreground/80 mb-4 leading-relaxed" data-testid={`text-project-description-${id}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs" data-testid={`badge-tech-${id}-${index}`}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="group/btn" data-testid={`button-github-${id}`}>
          <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
}

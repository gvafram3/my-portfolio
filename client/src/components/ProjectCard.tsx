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
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${id}`}>
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          data-testid={`img-project-${id}`}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl" data-testid={`text-project-title-${id}`}>
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground" data-testid={`text-project-role-${id}`}>
          {role}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-foreground mb-4" data-testid={`text-project-description-${id}`}>
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
        <Button variant="ghost" size="sm" data-testid={`button-github-${id}`}>
          <ExternalLink className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
}

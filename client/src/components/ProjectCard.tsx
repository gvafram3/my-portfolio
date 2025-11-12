// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";

// interface ProjectCardProps {
//   title: string;
//   role: string;
//   description: string;
//   technologies: string[];
//   image: string;
//   id: string;
// }

// export default function ProjectCard({ title, role, description, technologies, image, id }: ProjectCardProps) {
//   return (
//     <Card className="overflow-hidden hover-elevate transition-all duration-300 group h-full flex flex-col" data-testid={`card-project-${id}`}>
//       <div className="aspect-[3/4] overflow-hidden bg-muted relative">
//         <img 
//           src={image} 
//           alt={title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           data-testid={`img-project-${id}`}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>
//       <CardHeader>
//         <CardTitle className="text-xl" data-testid={`text-project-title-${id}`}>
//           {title}
//         </CardTitle>
//         <p className="text-sm text-primary font-medium" data-testid={`text-project-role-${id}`}>
//           {role}
//         </p>
//       </CardHeader>
//       <CardContent className="flex-1">
//         <p className="text-foreground/80 mb-4 leading-relaxed" data-testid={`text-project-description-${id}`}>
//           {description}
//         </p>
//         <div className="flex flex-wrap gap-2">
//           {technologies.map((tech, index) => (
//             <Badge key={index} variant="outline" className="text-xs" data-testid={`badge-tech-${id}-${index}`}>
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button variant="ghost" size="sm" className="group/btn" data-testid={`button-visti-${id}`}>
//           <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
//           View on visti
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

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
  link?: string;
}

export default function ProjectCard({
  title,
  role,
  description,
  technologies,
  image,
  id,
  link,
}: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden rounded-2xl shadow-sm border border-border/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-500 bg-background/80 backdrop-blur-sm flex flex-col h-[480px]"
      data-testid={`card-project-${id}`}
    >
      {/* Image Section */}
     <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-white/10 backdrop-blur-md text-white border-white/20"
                data-testid={`badge-tech-${id}-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold tracking-tight text-foreground" data-testid={`text-project-title-${id}`}>
          {title}
        </CardTitle>
        <p className="text-sm text-primary font-medium" data-testid={`text-project-role-${id}`}>
          {role}
        </p>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground flex-1">
        <p className="leading-relaxed" data-testid={`text-project-description-${id}`}>
          {description}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
       {link ? (
         <a
           href={link}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center justify-center w-full px-3 py-2 border border-border/40 rounded-lg text-sm text-foreground hover:bg-background/10 transition-all duration-300"
           data-testid={`button-visit-${id}`}
         >
           <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
           Visit
         </a>
       ) : null}
      </CardFooter>


    </Card>
  );
}

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { LucideIcon } from "lucide-react";

// interface Skill {
//   name: string;
//   level: number; // 0-100
// }

// interface SkillCardProps {
//   category: string;
//   skills: Skill[];
//   icon: LucideIcon;
// }

// export default function SkillCard({ category, skills, icon: Icon }: SkillCardProps) {
//   return (
//     <Card className="group hover-elevate transition-all duration-300" data-testid={`card-skill-${category.toLowerCase().replace(/\s+/g, '-')}`}>
//       <CardHeader>
//         <div className="flex items-center gap-3">
//           <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
//             <Icon className="h-6 w-6 text-primary" />
//           </div>
//           <h3 className="text-xl font-semibold" data-testid={`text-skill-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
//             {category}
//           </h3>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         {skills.map((skill, index) => (
//           <div key={index} className="space-y-2" data-testid={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-medium">{skill.name}</span>
//               <span className="text-xs text-muted-foreground">
//                 {/* {skill.level >= 90 ? "Expert" : skill.level >= 70 ? "Advanced" : skill.level >= 50 ? "Intermediate" : "Beginner"} */}
//               </span>
//             </div>
//             {/* <Progress value={skill.level} className="h-2" data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`} /> */}
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// }
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
  icon: LucideIcon;
}

export default function SkillCard({ category, skills, icon: Icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <Card className="relative overflow-hidden border border-border/40 bg-gradient-to-br from-background/70 to-background/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
        {/* Gradient accent on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {category}
            </h3>
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="text-sm text-foreground/90 font-medium hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

import { useInView } from "@/hooks/use-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Briefcase, Layers, Trophy } from "lucide-react";

export default function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    {
      icon: Briefcase,
      value: "3+",
      label: "Years Experience",
      description: "Building Flutter apps",
    },
    {
      icon: Layers,
      value: "10+",
      label: "Projects Completed",
      description: "Across web & mobile",
    },
    {
      icon: Code2,
      value: "10+",
      label: "Technologies",
      description: "Mastered & deployed",
    },
    {
      icon: Trophy,
      value: "100%",
      label: "Client Satisfaction",
      description: "On delivered projects",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div
        ref={ref}
        className={`w-full max-w-6xl mx-auto transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center hover-elevate transition-all duration-700 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-stat-${index}`}
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-1" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground" data-testid={`text-stat-description-${index}`}>
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

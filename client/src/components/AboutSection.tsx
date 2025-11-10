import { useInView } from "@/hooks/use-in-view";

export default function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div
        ref={ref}
        className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text" data-testid="text-about-title">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground/90" data-testid="text-about-paragraph-1">
            I'm a <strong className="text-primary font-semibold">Ghanaian developer</strong> focused on building cross-platform applications 
            that deliver exceptional user experiences. With a strong foundation in Flutter and Dart, 
            I create solutions that work seamlessly across web and mobile platforms.
          </p>
          
          <p className="text-foreground/90" data-testid="text-about-paragraph-2">
            My expertise extends to integrating <strong className="text-primary font-semibold">Firebase</strong> for authentication and database 
            management, while leveraging <strong className="text-primary font-semibold">Riverpod</strong> for efficient state management. I've 
            worked on both user-facing features like dashboards, leaderboards, and analytics, as well as 
            backend logic to ensure robust application performance.
          </p>
          
          <p className="text-foreground/90" data-testid="text-about-paragraph-3">
            I take pride in writing <strong className="text-primary font-semibold">clean, maintainable code</strong> and designing intuitive 
            user interfaces that prioritize usability. My approach combines technical precision with 
            creative problem-solving, always keeping the end user in mind.
          </p>
          
          <p className="text-foreground/90" data-testid="text-about-paragraph-4">
            Continuously learning and exploring new tools and frameworks is part of my commitment to 
            staying at the forefront of modern development practices. I'm passionate about creating 
            applications that not only function flawlessly but also delight users with their design 
            and performance.
          </p>
        </div>
      </div>
    </section>
  );
}

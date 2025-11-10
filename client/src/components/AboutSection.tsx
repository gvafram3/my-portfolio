export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-8 text-center" data-testid="text-about-title">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p data-testid="text-about-paragraph-1">
            I'm a <strong>Ghanaian developer</strong> focused on building cross-platform applications 
            that deliver exceptional user experiences. With a strong foundation in Flutter and Dart, 
            I create solutions that work seamlessly across web and mobile platforms.
          </p>
          <p data-testid="text-about-paragraph-2">
            My expertise extends to integrating <strong>Firebase</strong> for authentication and database 
            management, while leveraging <strong>Riverpod</strong> for efficient state management. I've 
            worked on both user-facing features like dashboards, leaderboards, and analytics, as well as 
            backend logic to ensure robust application performance.
          </p>
          <p data-testid="text-about-paragraph-3">
            I take pride in writing <strong>clean, maintainable code</strong> and designing intuitive 
            user interfaces that prioritize usability. My approach combines technical precision with 
            creative problem-solving, always keeping the end user in mind.
          </p>
          <p data-testid="text-about-paragraph-4">
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

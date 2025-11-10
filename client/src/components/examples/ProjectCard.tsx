import ProjectCard from '../ProjectCard';
import projectImage from '@assets/generated_images/Admin_Dashboard_App_screenshot_9e30d3f0.png';

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard 
        id="admin-dashboard"
        title="Admin Dashboard App"
        role="Lead Developer"
        description="Flutter app with Firebase backend featuring class-wise performance stats and analytics."
        technologies={["Flutter", "Firebase", "FL Chart"]}
        image={projectImage}
      />
    </div>
  );
}

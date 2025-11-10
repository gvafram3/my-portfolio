import SkillCard from '../SkillCard';
import { Code2 } from 'lucide-react';

export default function SkillCardExample() {
  return (
    <div className="max-w-sm">
      <SkillCard 
        category="Programming Languages"
        skills={[
          { name: "Dart", level: 95 },
          { name: "JavaScript", level: 75 },
          { name: "HTML/CSS", level: 85 }
        ]}
        icon={Code2}
      />
    </div>
  );
}

import SkillCard from '../SkillCard';
import { Code2 } from 'lucide-react';

export default function SkillCardExample() {
  return (
    <div className="max-w-sm">
      <SkillCard 
        category="Programming Languages"
        skills={["Dart", "JavaScript", "HTML/CSS"]}
        icon={Code2}
      />
    </div>
  );
}

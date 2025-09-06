import { GraduationCap, Bot } from "lucide-react";

interface EducationCardProps {
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
}

function EducationCard({ title, institution, description, icon }: EducationCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-white text-lg">{icon}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-primary font-medium mb-2">{institution}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const education = [
    {
      title: "BS in Mathematics",
      institution: "University of Karachi",
      description: "Strong foundation in mathematical principles, statistics, and analytical thinking - essential skills for AI and machine learning applications.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Specialization in Agentic AI",
      institution: "Panaversity",
      description: "Specialized training in Agentic AI for Education & Automation, focusing on building intelligent systems that can reason, plan, and execute complex tasks autonomously.",
      icon: <Bot className="h-6 w-6" />
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Education</span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

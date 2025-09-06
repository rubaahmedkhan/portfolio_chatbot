interface SkillBarProps {
  skill: string;
  level: string;
  percentage: number;
}

function SkillBar({ skill, level, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground">{level}</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="skill-bar h-2 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const languageSkills = [
    { skill: "Python", level: "Advanced", percentage: 95 },
    { skill: "JavaScript/TypeScript", level: "Intermediate", percentage: 75 },
    { skill: "LangChain", level: "Advanced", percentage: 90 },
    { skill: "Streamlit", level: "Advanced", percentage: 90 },
    { skill: "FastAPI", level: "Intermediate", percentage: 70 },
    { skill: "OpenAI Agent SDK", level: "Advanced", percentage: 85 },
  ];

  const databaseSkills = [
    { skill: "FAISS", level: "Advanced", percentage: 90 },
    { skill: "ChromaDB", level: "Advanced", percentage: 85 },
    { skill: "Qdrant", level: "Intermediate", percentage: 70 },
  ];

  const toolSkills = [
    { skill: "Git", level: "Intermediate", percentage: 75 },
    { skill: "Docker", level: "Intermediate", percentage: 65 },
    { skill: "Linux", level: "Intermediate", percentage: 70 },
    { skill: "n8n", level: "Intermediate", percentage: 75 },
  ];

  const aiSkills = [
    { skill: "Gemini (Google AI)", level: "Advanced", percentage: 90 },
    { skill: "OpenAI (GPT Models)", level: "Advanced", percentage: 95 },
    { skill: "Hugging Face", level: "Intermediate", percentage: 75 },
    { skill: "Agent-based AI Systems", level: "Advanced", percentage: 95 },
    { skill: "MCP (Model Context Protocol)", level: "Intermediate", percentage: 70 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Languages & Frameworks */}
          <div className="gradient-border">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Languages & Frameworks</h3>
              <div className="space-y-4">
                {languageSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill.skill} 
                    level={skill.level} 
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Databases & Vector Stores + Tools */}
          <div className="gradient-border">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Databases & Vector Stores</h3>
              <div className="space-y-4">
                {databaseSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill.skill} 
                    level={skill.level} 
                    percentage={skill.percentage}
                  />
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 mt-8 gradient-text">Tools & Platforms</h3>
              <div className="space-y-4">
                {toolSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill.skill} 
                    level={skill.level} 
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* AI/ML */}
          <div className="gradient-border lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">AI / ML</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {aiSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar 
                      key={index} 
                      skill={skill.skill} 
                      level={skill.level} 
                      percentage={skill.percentage}
                    />
                  ))}
                </div>
                <div className="space-y-4">
                  {aiSkills.slice(3).map((skill, index) => (
                    <SkillBar 
                      key={index} 
                      skill={skill.skill} 
                      level={skill.level} 
                      percentage={skill.percentage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

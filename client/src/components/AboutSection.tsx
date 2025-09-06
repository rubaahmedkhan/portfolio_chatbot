export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img 
                src="https://raw.githubusercontent.com/rubaahmedkhan/educonnect_ai/bd2bd3558a1842e804df00ac873064279e849599/rubaphoto%20(2).jpeg" 
                alt="Ruba Ahmed Khan - AI Engineer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am an AI Engineer with a background in Mathematics and a strong focus on Agentic AI systems. My passion lies in designing AI agents that can reason, use tools, and provide intelligent support across real-world domains.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Over the past few years, I have worked extensively on projects in the education sector, where I leverage Agentic AI to build systems that guide students, generate personalized feedback, and connect learners with the right resources.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in combining LLMs, RAG pipelines, and automation workflows to create scalable AI products. My work ranges from intelligent resume screening systems to EduConnect AI, an ongoing project that redefines how students interact with knowledge using Agentic AI.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My long-term vision is to contribute as a specialist in Agentic AI, developing applications that make learning more accessible, personalized, and impactful.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text" data-testid="stat-experience">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text" data-testid="stat-projects">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text" data-testid="stat-clients">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

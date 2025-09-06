import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Users, Bot, GraduationCap } from "lucide-react";

interface ProjectCardProps {
  title: string;
  techStack: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  projectId: string;
  image: string;
}

function ProjectCard({ title, techStack, description, icon, status, projectId, image }: ProjectCardProps) {
  const openProjectPDF = () => {
    // Placeholder for PDF opening functionality
    alert(`Opening ${title} project details... (PDF link to be added)`);
  };

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
      <img 
        src={image}
        alt={`${title} Interface`}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-primary">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          {status && (
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
              {status}
            </span>
          )}
        </div>
        
        <p className="text-sm text-primary mb-3 font-medium">{techStack}</p>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <Button
          onClick={openProjectPDF}
          className="w-full bg-gradient-to-r from-purple-500 to-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-orange-600 transition-all duration-300"
          data-testid={`button-project-${projectId}`}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Read More
        </Button>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Resume Screening System",
      techStack: "LangChain | Streamlit | SMTP | AI Agents",
      description: "Upload resume → System calculates % match with job description. Provides recommendations on missing skills + learning resources. Sends automated emails to candidates & HR. Includes resume preview.",
      icon: <Brain className="h-5 w-5" />,
      projectId: "resume-screening",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Attendance Management System",
      techStack: "n8n | Lovable AI | Email Integration",
      description: "Teacher Dashboard for managing classes. Student Records reuse. Attendance marking. Automated email alerts for parents of absent students. Full data management (add/edit/delete).",
      icon: <Users className="h-5 w-5" />,
      projectId: "attendance-system",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Agentic RAG System",
      techStack: "Python | OpenAI Agent SDK | FAISS | ChromaDB | Web Scraping",
      description: "Scrapes data from websites and videos. Stores embeddings in FAISS & ChromaDB. Provides context-aware answers with RAG pipeline. Built with Agentic design – system decides best source for query.",
      icon: <Bot className="h-5 w-5" />,
      projectId: "agentic-rag",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "EduConnect AI",
      techStack: "Agentic AI | LangChain | RAG | Streamlit | SMTP",
      description: "Upload Excel with student marks & emails. System generates personalized feedback + class recommendations. Emails each student directly with their feedback.",
      icon: <GraduationCap className="h-5 w-5" />,
      status: "In Progress",
      projectId: "educonnect-ai",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

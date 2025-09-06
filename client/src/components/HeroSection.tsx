import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openResume = () => {
    // Placeholder for resume PDF link
    window.open('#', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Professional profile image placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
            <img 
              src="https://github.com/rubaahmedkhan/educonnect_ai/blob/bd2bd3558a1842e804df00ac873064279e849599/rubaphoto%20(2).jpeg?raw=true" 
              alt="Ruba Ahmed Khan - Agentic AI Engineer" 
              className="w-full h-full object-cover scale-[3] translate-y-[-20px] translate-x-[-10px]"
              style={{objectPosition: '50% 30%'}}
            />
          </div>
          
          <h1 className="hero-text font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Ruba Ahmed Khan</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 gradient-text font-semibold">
            🚀 Agentic AI Engineer | AI Product Developer | RAG & LLM Applications
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Solving real-world problems with AI-powered applications, specializing in Agentic AI Systems, RAG Pipelines, and AI-driven Automation. I build products that combine intelligence, automation, and scalability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              data-testid="button-connect"
            >
              Connect with Me
            </Button>
            <Button
              onClick={openResume}
              variant="outline"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="button-resume"
            >
              My Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rubaukhan/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/rubaahmedkhan",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub"
    },
    {
      href: "mailto:rubaahmedkhan786@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email"
    }
  ];

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 <span className="gradient-text font-semibold">Ruba Ahmed Khan</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target={link.href.startsWith('http') ? '_blank' : undefined}
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label={link.label}
                data-testid={`footer-${link.label.toLowerCase()}`}
              >
                <div className="text-primary">{link.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ExternalLink, Eye, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Web Application",
      description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      image: "🛍️",
      tags: ["UI Design", "Data Viz", "Admin Panel"],
      links: {
        case: "#",
        prototype: "#",
        live: "#"
      }
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "An intuitive fitness app that helps users track workouts, nutrition, and progress with gamification elements.",
      image: "💪",
      tags: ["Mobile UI", "Health Tech", "UX Research"],
      links: {
        case: "#",
        prototype: "#"
      }
    },
    {
      title: "Banking Platform Redesign",
      category: "Web & Mobile",
      description: "Complete redesign of a banking platform focusing on accessibility, security, and seamless user experience.",
      image: "🏦",
      tags: ["Fintech", "Accessibility", "Multi-platform"],
      links: {
        case: "#",
        prototype: "#",
        live: "#"
      }
    },
    {
      title: "Creative Portfolio Template",
      category: "Landing Page",
      description: "A stunning portfolio template for creatives with smooth animations and modern aesthetics.",
      image: "🎨",
      tags: ["Landing Page", "Animation", "Branding"],
      links: {
        case: "#",
        prototype: "#",
        live: "#"
      }
    },
    {
      title: "Task Management Tool",
      category: "Web Application",
      description: "Collaborative task management platform with kanban boards, team chat, and productivity analytics.",
      image: "✅",
      tags: ["Productivity", "Collaboration", "SaaS"],
      links: {
        case: "#",
        prototype: "#"
      }
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      description: "Streamlined food ordering experience with real-time tracking, personalized recommendations, and loyalty rewards.",
      image: "🍔",
      tags: ["Mobile UI", "E-commerce", "User Flow"],
      links: {
        case: "#",
        prototype: "#",
        live: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best work in UI/UX design and digital experiences
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center text-6xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <span className="group-hover:scale-125 transition-transform duration-500">{project.image}</span>
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-border">
                    {project.links.case && (
                      <Button size="sm" variant="ghost" className="flex-1 group/btn">
                        <FileText size={16} className="mr-1" />
                        Case Study
                      </Button>
                    )}
                    {project.links.prototype && (
                      <Button size="sm" variant="ghost" className="flex-1 group/btn">
                        <Eye size={16} className="mr-1" />
                        Prototype
                      </Button>
                    )}
                    {project.links.live && (
                      <Button size="sm" variant="ghost" className="group/btn">
                        <ExternalLink size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

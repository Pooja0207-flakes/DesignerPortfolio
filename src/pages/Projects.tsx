import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ecommerceDashboard from "@/assets/ecommerce-dashboard.jpg";
import touristWebsite from "@/assets/tourist-website.jpg";
import eventManagement from "@/assets/event-management.jpg";
import hospitalBooking from "@/assets/hospital-booking.jpg";
import portfolioTemplate from "@/assets/portfolio-template.jpg";
import todoList from "@/assets/todo-list.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Web Application",
      description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      image: ecommerceDashboard,
      github: "https://github.com/Pooja0207-flakes/ecommerce-dashboard"
    },
    {
      title: "Tourist Spot Website",
      category: "Web Application",
      description: "Discover and explore beautiful tourist destinations with an interactive booking system and detailed travel guides.",
      image: touristWebsite,
      github: "https://github.com/Pooja0207-flakes/tourist-spot-website"
    },
    {
      title: "Event Management System",
      category: "Web Application",
      description: "Complete event planning platform with ticket booking, attendee management, and real-time event tracking.",
      image: eventManagement,
      github: "https://github.com/Pooja0207-flakes/event-management-system"
    },
    {
      title: "Hospital Appointment Booking",
      category: "Web Application",
      description: "Streamlined healthcare platform for booking appointments, managing patient records, and doctor consultations.",
      image: hospitalBooking,
      github: "https://github.com/Pooja0207-flakes/hospital-appointment-booking"
    },
    {
      title: "Creative Portfolio Template",
      category: "Web Application",
      description: "A stunning portfolio template for creatives with smooth animations, modern aesthetics, and responsive design.",
      image: portfolioTemplate,
      github: "https://github.com/Pooja0207-flakes/creative-portfolio-template"
    },
    {
      title: "Todo List",
      category: "Web Application",
      description: "Simple yet powerful task management application with priority levels, categories, and progress tracking.",
      image: todoList,
      github: "https://github.com/Pooja0207-flakes/todo-list"
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
                <div className="relative aspect-video bg-secondary/50 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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

                  <div className="pt-4 border-t border-border">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                        <Github size={16} className="mr-2" />
                        View on GitHub
                      </Button>
                    </a>
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

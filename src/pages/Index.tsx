
import { useState } from "react";
import { PaintBucket, Hammer, ImageIcon, Mail } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "Peinture intérieure",
      icon: <PaintBucket className="w-8 h-8 text-primary" />,
      description: "Rénovation et peinture de vos espaces intérieurs",
    },
    {
      title: "Rénovation",
      icon: <Hammer className="w-8 h-8 text-primary" />,
      description: "Travaux de rénovation complets pour votre habitat",
    },
  ];

  const projects = [
    {
      title: "Rénovation Appartement",
      image: "/placeholder.svg",
      description: "Rénovation complète d'un appartement de 75m²",
    },
    {
      title: "Peinture Maison",
      image: "/placeholder.svg",
      description: "Peinture intérieure d'une maison de 120m²",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark to-secondary z-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              Artisan Peintre & Rénovation
            </span>
            <h1 className="hero-title mb-6">
              Donnez vie à vos projets <br />
              <span className="text-primary">de rénovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Expertise professionnelle en peinture et rénovation pour transformer votre espace
            </p>
            <button className="btn-primary">
              Contactez-moi
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4" id="services">
        <div className="container mx-auto">
          <h2 className="section-title text-center">
            Mes <span className="text-primary">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-secondary-dark" id="projects">
        <div className="container mx-auto">
          <h2 className="section-title text-center">
            Projets <span className="text-primary">Réalisés</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="card group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="section-title">
            Parlons de votre <span className="text-primary">Projet</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vous avez un projet de rénovation ? Contactez-moi pour en discuter.
          </p>
          <a href="mailto:contact@example.com" className="btn-primary inline-flex items-center">
            <Mail className="mr-2 h-5 w-5" />
            Contactez-moi
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;

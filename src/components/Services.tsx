import { Code, Smartphone, Palette, Database, ShoppingCart, Zap, CloudCog, GitBranch, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern web applications using React, Angular, Vue.js, Node.js, Django, and Laravel.",
    techs: ["React", "Node.js", "Django", "Laravel"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps with React Native, Flutter, Swift, and Kotlin.",
    techs: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs crafted in Figma, Adobe XD, Sketch, and InVision.",
    techs: ["Figma", "Adobe XD", "Sketch"]
  },
  {
    icon: CloudCog,
    title: "Custom Software",
    description: "Tailored software solutions using Python, Java, C#, .NET, Ruby, and Go.",
    techs: ["Python", "Java", ".NET", "Go"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with Shopify, WooCommerce, Magento, and PrestaShop.",
    techs: ["Shopify", "WooCommerce", "Magento"]
  },
  {
    icon: Zap,
    title: "Progressive Web Apps",
    description: "Fast, reliable PWAs with offline mode, push notifications, and service workers.",
    techs: ["PWA", "Service Workers", "Offline Mode"]
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Robust database solutions with MySQL, PostgreSQL, MongoDB, Firebase, and Redis.",
    techs: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    icon: GitBranch,
    title: "API Development",
    description: "Scalable APIs with REST, GraphQL, microservices architecture, and OAuth integration.",
    techs: ["REST", "GraphQL", "Microservices"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing including SEO, SEM, content marketing, and analytics.",
    techs: ["SEO", "SEM", "Analytics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-background"
              >
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

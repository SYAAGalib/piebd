import { CheckCircle2 } from "lucide-react";

const processSteps = [
  { number: 1, title: "Project Type", description: "Define project scope and objectives" },
  { number: 2, title: "Mandatory Features", description: "Identify core requirements" },
  { number: 3, title: "Extra Features", description: "Plan enhancements and additions" },
  { number: 4, title: "UI Design", description: "Create beautiful interfaces" },
  { number: 5, title: "UX", description: "Optimize user experience" },
  { number: 6, title: "Frontend", description: "Build responsive interfaces" },
  { number: 7, title: "Backend", description: "Develop robust server logic" },
  { number: 8, title: "Integration", description: "Connect all components" },
  { number: 9, title: "Testing", description: "Ensure quality and reliability" },
  { number: 10, title: "Security", description: "Implement protection measures" },
  { number: 11, title: "Delivery", description: "Deploy to production" },
  { number: 12, title: "Support", description: "Provide ongoing maintenance" }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our 12-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="group relative p-6 rounded-xl border border-border bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              <CheckCircle2 className="absolute top-6 right-6 h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

import { Card, CardContent } from "@/components/ui/card";

const FoundersSection = () => {
  const founders = [
    {
      image: "/lovable-uploads/b2517c99-3c0a-4f1a-996d-1cde5bb3fd71.png",
      name: "Freeman Yeung",
      title: "Founder",
      description: "Visionary leader with extensive experience in executive education and international business development. Distinguished by his gray blazer and strategic vision for transforming executive learning across Asia-Pacific."
    },
    {
      image: "/lovable-uploads/21b5c148-10d6-4908-a113-5a4d1a351d9e.png",
      name: "Dr. Malathi Alagu",
      title: "Co-Founder",
      description: "Distinguished academic and industry expert specializing in strategic leadership and organizational transformation, bringing deep expertise in cultivating next-generation leaders."
    },
    {
      image: "/lovable-uploads/b27e646e-ced2-49a1-9721-7c905fc4ee6f.png",
      name: "George Wong",
      title: "Co-Founder",
      role: "Transnational Education and Partnerships", 
      description: "Expert in global education partnerships and cross-border academic collaborations, recognized for his strategic insights and distinctive approach to international education development."
    }
  ];

  return (
    <section id="founders" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            From the Desk of the Founders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders behind Global Executive Education who are committed 
            to transforming the landscape of executive learning across Asia-Pacific.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-gradient-subtle">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {founder.title}
                  </p>
                  {founder.role && (
                    <p className="text-accent font-medium text-sm mb-2">
                      {founder.role}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
import { Card, CardContent } from "@/components/ui/card";

const PartnershipsSection = () => {
  const partnerships = [
    {
      image: "/lovable-uploads/52471ec7-b60d-42be-8c01-24ee2c2856cd.png",
      title: "University of Cyberjaya Partnership",
      description: "Strategic collaboration with leading cybersecurity education institution"
    },
    {
      image: "/lovable-uploads/a177ac1f-54c8-4a9c-9996-ad2cda736301.png",
      title: "Global Executive Education",
      description: "Asia's Premier Executive Education programs with international recognition"
    },
    {
      image: "/lovable-uploads/6f493d0e-218e-4867-b674-0dda817c6046.png",
      title: "Global Executive Education Leadership",
      description: "Leading executive education initiatives across Asia-Pacific region"
    },
    {
      image: "/lovable-uploads/d2f06ee4-ff43-4e15-b34a-0adc66d787bc.png",
      title: "University of Cyberjaya Collaboration",
      description: "Comprehensive partnership in academic excellence and innovation"
    },
    {
      image: "/lovable-uploads/3f574a1f-37e8-4aaf-80b0-47ae46576fa5.png",
      title: "UniEnrol Partnership",
      description: "Strategic enrollment and education technology collaboration"
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Global Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building bridges across continents through strategic partnerships with 
            leading educational institutions and organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={partnership.image} 
                    alt={partnership.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {partnership.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {partnership.description}
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

export default PartnershipsSection;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Globe, Award, BookOpen, Lightbulb } from "lucide-react";

const OurPillars = () => {
  const pillars = [
    {
      icon: <Award className="h-12 w-12" />,
      title: "Excellence in Education",
      description: "Delivering world-class executive education programs that meet international standards and drive transformational learning outcomes.",
      details: [
        "Partnership with prestigious institutions like INSEAD",
        "Industry-leading curriculum design",
        "Expert faculty and practitioners",
        "Continuous improvement and innovation"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Leadership Development",
      description: "Cultivating visionary leaders who can navigate complex business environments and drive sustainable organizational growth.",
      details: [
        "Executive coaching and mentoring",
        "Leadership assessment and development",
        "Succession planning support",
        "360-degree feedback programs"
      ]
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Perspective",
      description: "Fostering international mindset and cross-cultural competencies essential for success in today's interconnected world.",
      details: [
        "International study modules",
        "Global case studies and simulations",
        "Cross-cultural leadership training",
        "International networking opportunities"
      ]
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Innovation & Transformation",
      description: "Empowering leaders to drive digital transformation and innovation within their organizations and industries.",
      details: [
        "Digital leadership frameworks",
        "Innovation management methodologies",
        "Change management strategies",
        "Technology adoption best practices"
      ]
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Strategic Impact",
      description: "Enabling leaders to create measurable impact and sustainable value for their organizations and stakeholders.",
      details: [
        "Strategic planning and execution",
        "Performance measurement systems",
        "Stakeholder engagement strategies",
        "Corporate governance excellence"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Continuous Learning",
      description: "Promoting lifelong learning culture and providing ongoing support for professional development and growth.",
      details: [
        "Alumni network and community",
        "Ongoing learning resources",
        "Professional development support",
        "Knowledge sharing platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Pillars</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              The fundamental principles that guide our mission to transform professionals 
              into exceptional leaders and drive organizational excellence across Asia-Pacific.
            </p>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-company-blue mb-4">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-company-gold mb-3">Key Components:</h4>
                      <ul className="space-y-2">
                        {pillar.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-company-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-company-blue mb-4">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our executive education programs and experience how our pillars 
              translate into transformational learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/programmes" className="bg-company-gold hover:bg-company-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Programmes
              </a>
              <a href="/contact" className="border border-company-blue text-company-blue hover:bg-company-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurPillars;
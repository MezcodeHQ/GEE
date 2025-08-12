import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Users, Award, BookOpen, GraduationCap, Globe } from "lucide-react";

const Programmes = () => {
  const programmes = [
    {
      id: "insead-lead",
      title: "INSEAD LEAD Programme",
      subtitle: "Leadership Excellence Accelerator Development Programme",
      image: "/programme-images/insead-lead.jpg",
      duration: "5 days",
      format: "Hybrid",
      location: "Malaysia & INSEAD Singapore",
      description: "A premium, co-branded program with INSEAD, designed for high-performing C-Suite executives and change leaders.",
      icon: <Award className="h-8 w-8" />,
      highlights: [
        "Executive simulations & boardroom scenarios",
        "Fireside chats with global industry leaders",
        "Certification by INSEAD & GEE",
        "Free 1-year Boardflix subscription"
      ]
    },
    {
      id: "board-directors",
      title: "International Board of Directors Development Programme", 
      subtitle: "Empowering Governance. Elevating Boardroom Leadership.",
      image: "/programme-images/board-directors.jpg",
      duration: "12 weeks",
      format: "Blended",
      location: "Malaysia",
      description: "Designed for current and aspiring board members seeking to enhance their governance acumen and ethical leadership.",
      icon: <Users className="h-8 w-8" />,
      highlights: [
        "VR Boardroom Simulations",
        "Governance Labs & Compliance",
        "Ethical Dilemma Workshops", 
        "Executive Dialogue Sessions"
      ]
    },
    {
      id: "human-capital",
      title: "Human Capital Development Programme",
      subtitle: "Building Tomorrow's Leaders Today",
      image: "/programme-images/human-capital.jpg",
      duration: "6 months",
      format: "Modular",
      location: "Malaysia",
      description: "Identifying and developing internal employees with the potential to assume critical positions and key business leadership roles.",
      icon: <GraduationCap className="h-8 w-8" />,
      highlights: [
        "Talent Development & Assessment",
        "Strategic Analysis & Business Planning",
        "Leadership & Management Skills",
        "Career Advancement Pathway"
      ]
    },
    {
      id: "upward-mobility",
      title: "Upward Mobility Programme for Non-Executives",
      subtitle: "Best Prepare High-Potential Non-Executives for the jump to the Executive level",
      image: "/programme-images/upward-mobility.jpg",
      duration: "5-9 months",
      format: "Flexible",
      location: "Malaysia",
      description: "Designed for Non-Executive staff lacking educational credentials who show high potential for executive roles.",
      icon: <BookOpen className="h-8 w-8" />,
      highlights: [
        "Executive Readiness Assessment",
        "Leadership Fundamentals",
        "Business Communication Skills",
        "Strategic Thinking Development"
      ]
    },
    {
      id: "boardflix",
      title: "GEE Boardflix",
      subtitle: "Our on-demand learning library for directors and C-suite leaders",
      image: "/programme-images/boardflix.jpg",
      duration: "On-demand",
      format: "Digital",
      location: "Global Access",
      description: "An on-demand learning library accessible anywhere, anytime with expert-curated content developed in partnership with ISCA.",
      icon: <Globe className="h-8 w-8" />,
      highlights: [
        "24/7 Access to Premium Content",
        "CPD-Aligned Learning Modules",
        "Expert-Curated Resources",
        "Global Accessibility"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-company-blue via-company-blue/90 to-company-gold text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programmes</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Transform your leadership journey with our world-class executive education programmes
            </p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              From C-Suite leadership to boardroom governance, our comprehensive programmes are designed to elevate your career and drive organizational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {programmes.map((programme, index) => (
              <Card key={programme.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={programme.image} 
                      alt={programme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden"></div>
                    <div className="absolute top-4 left-4 lg:hidden">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        {programme.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="hidden lg:block bg-gradient-primary rounded-full p-3 text-white">
                          {programme.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold text-foreground mb-2">
                            {programme.title}
                          </CardTitle>
                          <p className="text-lg font-semibold text-primary">
                            {programme.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {programme.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {programme.location}
                        </div>
                        <div className="bg-accent/20 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-accent-foreground">
                            {programme.format}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {programme.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Programme Highlights:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {programme.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-company-gold hover:bg-company-gold/90 text-white flex-1">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="border-company-blue text-company-blue hover:bg-company-blue hover:text-white flex-1">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programmes;
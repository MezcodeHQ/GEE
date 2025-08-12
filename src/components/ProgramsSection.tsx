import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Globe, BookOpen, Star, Award } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      image: "/programme-images/insead-lead.jpg",
      title: "INSEAD LEAD Programme",
      subtitle: "Leadership Excellence Accelerator Development Programme",
      description: "A premium, co-branded program with INSEAD, designed for high-performing C-Suite executives and change leaders.",
      features: [
        "5-day immersive programme (3 days in Malaysia, 2 days at INSEAD Singapore)",
        "Executive simulations & boardroom scenarios", 
        "Fireside chats with global industry leaders",
        "Certification by INSEAD & GEE",
        "Free 1-year Boardflix subscription"
      ],
      topics: [
        "Strategic Agility & Business Foresight",
        "Digital Innovation & Transformation", 
        "Culture Architecture & Change Intelligence",
        "Stakeholder Navigation & Executive Influence",
        "Communication Mastery & Presence"
      ],
      duration: "5 days",
      format: "Hybrid",
      link: "/programmes/insead-lead"
    },
    {
      image: "/programme-images/board-directors.jpg",
      title: "International Board of Directors Development Programme",
      subtitle: "Empowering Governance. Elevating Boardroom Leadership.",
      description: "Designed for current and aspiring board members seeking to enhance their governance acumen, strategic oversight, and ethical leadership in complex environments.",
      features: [
        "VR Boardroom Simulations: Engage in real-time decision-making scenarios",
        "Governance Labs: Decode regulatory, ESG, and compliance matters",
        "Ethical Dilemma Workshops: Handle real case studies involving integrity and reputation risk",
        "Financial Oversight Clinics: Simplify board-level financial scrutiny",
        "Executive Dialogue: Intimate discussions with experienced directors and regulators",
        "Boardflix Integration: Access exclusive on-demand director training videos"
      ],
      duration: "12 weeks",
      format: "Blended",
      link: "/programmes/board-directors"
    },
    {
      image: "/programme-images/human-capital.jpg",
      title: "Human Capital Development Programme",
      subtitle: "Building Tomorrow's Leaders Today",
      description: "Identifying and developing internal employees with the potential to assume critical positions and key business leadership roles.",
      benefits: [
        "Increases the availability of experienced and capable employees",
        "A pool of leaders who can take larger responsibilities",
        "Opportunity for career advancement, more empowerment and higher job satisfaction among employees",
        "Talent Development, Strategic Analysis and Business Planning, Leadership & Planning"
      ],
      duration: "6 months",
      format: "Modular",
      link: "/programmes/human-capital"
    },
    {
      image: "/programme-images/upward-mobility.jpg",
      title: "Upward Mobility Programme for Non-Executives",
      subtitle: "Best Prepare High-Potential Non-Executives for the jump to the Executive level",
      description: "Designed for Non-Executive staff lacking educational credentials who show high potential for executive roles.",
      options: [
        "Option 1: 9 Months Programme (4 sessions per month)",
        "Option 2: 5 Months Programme (8 sessions per month)"
      ],
      benefits: [
        "The programme will result in a vast increase in the number of skilled employees in the executive office",
        "Allowing the organisation to continuously develop their human capital and increase operational efficiency"
      ],
      duration: "5-9 months",
      format: "Flexible",
      link: "/programmes/upward-mobility"
    }
  ];

  return (
    <section id="programmes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Programmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive executive education programs designed to transform leaders 
            and drive organizational excellence across industries.
          </p>
        </div>

        <div className="grid gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="lg:w-2/3">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-foreground mb-2">
                          {program.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-company-gold mb-4">
                          {program.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-gray-100 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-gray-700">
                            {program.duration}
                          </span>
                        </div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-gray-700">
                            {program.format}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                {program.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Programme Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {program.topics && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {program.benefits && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Benefits for Organisation:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="h-4 w-4 text-primary-glow mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {program.options && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Programme Options:</h4>
                    <ul className="space-y-2">
                      {program.options.map((option, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                    <Button 
                      variant="outline" 
                      className="group-hover:bg-company-blue group-hover:text-white transition-colors border-company-blue text-company-blue"
                      onClick={() => window.location.href = program.link}
                    >
                      Learn More & Apply
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GEE Boardflix Section */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-white border-0">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Globe className="h-12 w-12" />
                <div>
                  <CardTitle className="text-3xl font-bold">GEE Boardflix</CardTitle>
                  <p className="text-xl text-white/90">On-Demand Learning Library</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                An on-demand learning library for directors and C-suite leaders. Accessible anywhere, 
                anytime with expert-curated content. Developed in partnership with ISCA and aligned with CPD standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Explore Boardflix
                </Button>
                <Button variant="hero" className="border-white text-white hover:bg-white/10">
                  Start Free Trial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
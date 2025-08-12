import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Globe } from "lucide-react";

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. Sarah Chen",
      title: "Dean of Executive Education",
      image: "/lovable-uploads/d443c7d1-5291-4c80-bfcb-31327d2b1359.png",
      specializations: ["Strategic Leadership", "Digital Transformation", "Innovation Management"],
      bio: "Dr. Chen brings over 20 years of experience in executive education and strategic consulting. She holds a PhD in Management from Harvard Business School and has worked with Fortune 500 companies across Asia-Pacific.",
      achievements: [
        "Former McKinsey & Company Principal",
        "Author of 3 bestselling business books",
        "Keynote speaker at 50+ international conferences"
      ],
      education: ["PhD Management, Harvard Business School", "MBA, INSEAD", "BSc Economics, London School of Economics"]
    },
    {
      name: "Prof. Michael Rodriguez",
      title: "Director of Leadership Development",
      image: "/lovable-uploads/4ff76c9f-f89d-4729-9a72-7c5afaa95de7.png",
      specializations: ["Executive Coaching", "Organizational Psychology", "Team Dynamics"],
      bio: "Professor Rodriguez is a renowned expert in leadership psychology with extensive experience in executive coaching and organizational development across multinational corporations.",
      achievements: [
        "Certified Executive Coach (ICF)",
        "Former VP of Talent Development at Google",
        "Published researcher in leadership effectiveness"
      ],
      education: ["PhD Organizational Psychology, Stanford", "MA Psychology, Cambridge", "BA Psychology, Oxford"]
    },
    {
      name: "Dr. Priya Sharma",
      title: "Professor of Strategic Management",
      image: "/lovable-uploads/d0b662f9-b5ea-4775-af3b-c18647975e47.png",
      specializations: ["Corporate Strategy", "Mergers & Acquisitions", "Board Governance"],
      bio: "Dr. Sharma specializes in corporate strategy and governance, with particular expertise in emerging markets and cross-border transactions. She serves on multiple corporate boards.",
      achievements: [
        "Independent Director on 5 public company boards",
        "Former Partner at BCG",
        "Expert witness in corporate governance cases"
      ],
      education: ["PhD Strategic Management, Wharton", "MBA, INSEAD", "CA, Institute of Chartered Accountants"]
    },
    {
      name: "James Thompson",
      title: "Senior Faculty - Digital Innovation",
      image: "/lovable-uploads/d2f06ee4-ff43-4e15-b34a-0adc66d787bc.png",
      specializations: ["Digital Strategy", "AI & Machine Learning", "Technology Leadership"],
      bio: "James brings deep technology and innovation expertise from his tenure as CTO at leading tech companies. He specializes in helping traditional businesses navigate digital transformation.",
      achievements: [
        "Former CTO at Microsoft Asia",
        "Founded 2 successful tech startups",
        "Holds 15 technology patents"
      ],
      education: ["MS Computer Science, MIT", "BS Engineering, Stanford", "Executive Education, Harvard"]
    },
    {
      name: "Dr. Elena Vasquez",
      title: "Professor of International Business",
      image: "/lovable-uploads/b2517c99-3c0a-4f1a-996d-1cde5bb3fd71.png",
      specializations: ["Global Markets", "Cross-Cultural Management", "International Trade"],
      bio: "Dr. Vasquez is an expert in international business with extensive experience in emerging markets. She has advised governments and multinational corporations on market entry strategies.",
      achievements: [
        "Advisor to World Economic Forum",
        "Former World Bank consultant",
        "Fluent in 6 languages"
      ],
      education: ["PhD International Business, Cambridge", "MA Economics, LSE", "BA International Relations, Georgetown"]
    },
    {
      name: "Robert Kim",
      title: "Director of Financial Strategy",
      image: "/lovable-uploads/b27e646e-ced2-49a1-9721-7c905fc4ee6f.png",
      specializations: ["Corporate Finance", "Risk Management", "Investment Strategy"],
      bio: "Robert is a seasoned finance executive with over 25 years of experience in investment banking and corporate finance. He specializes in complex financial transactions and risk management.",
      achievements: [
        "Former Managing Director at Goldman Sachs",
        "Led $50B+ in M&A transactions",
        "CFA Charterholder"
      ],
      education: ["MBA Finance, Wharton", "MS Mathematics, CalTech", "BS Finance, Seoul National University"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Distinguished Faculty</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Learn from world-renowned experts, industry leaders, and academic luminaries 
              who bring decades of experience and cutting-edge insights to your learning journey.
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {faculty.map((member, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-company-blue">
                          {member.name}
                        </CardTitle>
                        <p className="text-lg font-semibold text-company-gold">
                          {member.title}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {member.specializations.map((spec, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-company-blue/10 text-company-blue">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                          {member.bio}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-company-blue mb-2 text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {member.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-company-gold rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-company-blue mb-2 text-sm">Education:</h4>
                          <ul className="space-y-1">
                            {member.education.map((edu, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-company-gold rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{edu}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex space-x-3">
                          <a href="#" className="p-2 bg-company-blue/10 rounded-full hover:bg-company-blue hover:text-white transition-colors">
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a href="#" className="p-2 bg-company-blue/10 rounded-full hover:bg-company-blue hover:text-white transition-colors">
                            <Mail className="h-4 w-4" />
                          </a>
                          <a href="#" className="p-2 bg-company-blue/10 rounded-full hover:bg-company-blue hover:text-white transition-colors">
                            <Globe className="h-4 w-4" />
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Stats */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-company-blue mb-2">50+</h3>
                <p className="text-muted-foreground">Expert Faculty Members</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-company-blue mb-2">200+</h3>
                <p className="text-muted-foreground">Years Combined Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-company-blue mb-2">30+</h3>
                <p className="text-muted-foreground">Countries Represented</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-company-blue mb-2">100+</h3>
                <p className="text-muted-foreground">Published Research Papers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-company-blue mb-4">
              Learn from the Best
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our programmes and gain access to world-class faculty who will guide 
              your transformation into an exceptional leader.
            </p>
            <a href="/programmes" className="bg-company-gold hover:bg-company-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Our Programmes
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
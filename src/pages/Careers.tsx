import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Programme Director",
      department: "Academic Operations",
      location: "Kuala Lumpur, Malaysia",
      type: "Full-time",
      salary: "RM 120,000 - 180,000",
      posted: "2 days ago",
      description: "Lead the development and delivery of executive education programmes, working closely with faculty and corporate partners.",
      requirements: [
        "Master's degree in Business Administration or related field",
        "10+ years experience in executive education or corporate training",
        "Strong project management and leadership skills",
        "Experience with international partnerships"
      ],
      benefits: ["Health Insurance", "Professional Development", "Flexible Hours", "International Travel"]
    },
    {
      title: "Faculty Relations Manager",
      department: "Academic Affairs",
      location: "Singapore",
      type: "Full-time",
      salary: "SGD 80,000 - 120,000",
      posted: "1 week ago",
      description: "Manage relationships with faculty members, coordinate teaching schedules, and ensure academic excellence across all programmes.",
      requirements: [
        "Bachelor's degree in Education, HR, or related field",
        "5+ years experience in academic administration",
        "Excellent communication and interpersonal skills",
        "Experience working with international faculty"
      ],
      benefits: ["Medical Coverage", "Annual Bonus", "Learning Budget", "Remote Work Options"]
    },
    {
      title: "Digital Learning Specialist",
      department: "Technology & Innovation",
      location: "Remote",
      type: "Full-time",
      salary: "USD 60,000 - 90,000",
      posted: "3 days ago",
      description: "Design and implement digital learning solutions, manage our Boardflix platform, and enhance online learning experiences.",
      requirements: [
        "Bachelor's degree in Educational Technology or related field",
        "3+ years experience in e-learning platform management",
        "Proficiency in LMS administration and content creation tools",
        "Knowledge of adult learning principles"
      ],
      benefits: ["Stock Options", "Tech Allowance", "Continued Education", "Global Team Events"]
    },
    {
      title: "Partnership Development Executive",
      department: "Business Development",
      location: "Hong Kong",
      type: "Full-time",
      salary: "HKD 600,000 - 900,000",
      posted: "5 days ago",
      description: "Develop strategic partnerships with corporations, government agencies, and educational institutions across Asia-Pacific.",
      requirements: [
        "MBA or equivalent business qualification",
        "7+ years experience in business development or partnership management",
        "Strong network in corporate training or education sector",
        "Fluency in English and Mandarin"
      ],
      benefits: ["Performance Bonus", "Car Allowance", "International Assignment", "Executive Health Plan"]
    },
    {
      title: "Research & Content Developer",
      department: "Academic Research",
      location: "Kuala Lumpur, Malaysia",
      type: "Full-time",
      salary: "RM 70,000 - 100,000",
      posted: "1 week ago",
      description: "Conduct research on leadership trends, develop case studies, and create content for our executive education programmes.",
      requirements: [
        "PhD in Business, Management, or related field",
        "Research experience in leadership or organizational behavior",
        "Strong writing and analytical skills",
        "Experience in academic publishing"
      ],
      benefits: ["Research Budget", "Conference Attendance", "Publication Support", "Sabbatical Options"]
    },
    {
      title: "Marketing Communications Manager",
      department: "Marketing",
      location: "Singapore",
      type: "Full-time",
      salary: "SGD 70,000 - 100,000",
      posted: "4 days ago",
      description: "Lead marketing communications strategy, manage digital campaigns, and build brand awareness across target markets.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "5+ years experience in B2B marketing, preferably in education or professional services",
        "Strong digital marketing skills including SEO, SEM, and social media",
        "Experience with marketing automation platforms"
      ],
      benefits: ["Marketing Budget", "Creative Freedom", "Team Building Events", "Professional Certifications"]
    }
  ];

  const benefits = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Continuous Learning",
      description: "Access to all our programmes, conferences, and professional development opportunities"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Global Network",
      description: "Work with faculty and professionals from leading institutions worldwide"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Career Growth",
      description: "Clear advancement paths and mentorship from industry leaders"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Package",
      description: "Attractive salary, bonuses, and comprehensive benefits package"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Be part of Asia's premier executive education institution and help shape 
              the next generation of business leaders across the region.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-company-blue mb-4">
                Why Choose GEE?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a dynamic team that's transforming executive education and 
                making a real impact on leaders across Asia-Pacific.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-company-blue">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-company-blue mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore exciting opportunities to advance your career with us.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-company-blue mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {position.salary}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Badge variant="secondary" className="bg-company-gold/10 text-company-gold mb-2">
                          Posted {position.posted}
                        </Badge>
                        <Button className="bg-company-blue hover:bg-company-blue/90 text-white w-full lg:w-auto">
                          Apply Now
                        </Button>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-company-blue mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-company-gold rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-company-blue mb-3">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="outline" className="border-company-blue/20 text-company-blue">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-company-blue mb-6">
                  Our Culture & Values
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We foster an environment of excellence, innovation, and collaboration 
                  where every team member can thrive and make a meaningful impact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-company-gold rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Excellence in everything we do</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-company-gold rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Innovation and continuous improvement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-company-gold rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Collaborative and inclusive environment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-company-gold rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Work-life balance and well-being</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/4ff76c9f-f89d-4729-9a72-7c5afaa95de7.png" 
                  alt="Our team"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-company-blue mb-8">
              Application Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-company-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-company-blue mb-2">Apply Online</h3>
                <p className="text-sm text-muted-foreground">Submit your application and resume</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-company-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-company-blue mb-2">Initial Review</h3>
                <p className="text-sm text-muted-foreground">Our team reviews your qualifications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-company-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-company-blue mb-2">Interview</h3>
                <p className="text-sm text-muted-foreground">Virtual or in-person interview</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-company-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold text-company-blue mb-2">Welcome Aboard</h3>
                <p className="text-sm text-muted-foreground">Join our team and start your journey</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-company-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals 
              to join our mission of transforming executive education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-company-gold hover:bg-company-gold/90 text-white px-8 py-3">
                Send Us Your Resume
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-company-blue px-8 py-3">
                Contact HR
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
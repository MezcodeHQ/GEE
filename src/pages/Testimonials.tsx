import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Lim",
      title: "CEO",
      company: "TechCorp Malaysia",
      programme: "INSEAD LEAD Programme",
      image: "/lovable-uploads/4ff76c9f-f89d-4729-9a72-7c5afaa95de7.png",
      rating: 5,
      testimonial: "The INSEAD LEAD Programme transformed my leadership approach completely. The blend of theoretical frameworks and practical simulations prepared me for real-world challenges I face daily as a CEO. The faculty's expertise and the peer network I built are invaluable.",
      outcome: "Increased company revenue by 150% within 18 months",
      year: "2024"
    },
    {
      name: "Dr. Susan Wong",
      title: "Managing Director",
      company: "Wong & Associates",
      programme: "Board of Directors Programme",
      image: "/lovable-uploads/d0b662f9-b5ea-4775-af3b-c18647975e47.png",
      rating: 5,
      testimonial: "The Board of Directors Programme gave me the confidence and knowledge to serve on multiple boards effectively. The VR simulations were particularly enlightening - they prepared me for situations I later encountered in real boardrooms.",
      outcome: "Appointed to 3 additional board positions",
      year: "2023"
    },
    {
      name: "Ahmad Rahman",
      title: "Vice President",
      company: "Global Banking Solutions",
      programme: "Human Capital Development",
      image: "/lovable-uploads/d443c7d1-5291-4c80-bfcb-31327d2b1359.png",
      rating: 5,
      testimonial: "This programme didn't just develop my leadership skills; it transformed how I think about talent development in my organization. The frameworks I learned are now core to our HR strategy and succession planning.",
      outcome: "Promoted to Senior VP within 12 months",
      year: "2024"
    },
    {
      name: "Maria Santos",
      title: "Operations Director",
      company: "Manufacturing Excellence Pte Ltd",
      programme: "Upward Mobility Programme",
      image: "/lovable-uploads/d2f06ee4-ff43-4e15-b34a-0adc66d787bc.png",
      rating: 5,
      testimonial: "Coming from a non-executive background, I was initially nervous about transitioning to leadership. This programme gave me the tools, confidence, and strategic thinking skills needed to excel in my new role.",
      outcome: "Successfully transitioned to C-Suite role",
      year: "2023"
    },
    {
      name: "Robert Chen",
      title: "Chairman",
      company: "Chen Holdings Group",
      programme: "GEE Boardflix",
      image: "/lovable-uploads/b2517c99-3c0a-4f1a-996d-1cde5bb3fd71.png",
      rating: 5,
      testimonial: "Boardflix has become my go-to resource for staying updated on governance best practices. The on-demand format fits perfectly with my busy schedule, and the content quality is exceptional.",
      outcome: "Enhanced governance practices across 5 companies",
      year: "2024"
    },
    {
      name: "Jennifer Liu",
      title: "Chief Technology Officer",
      company: "Innovation Hub Singapore",
      programme: "INSEAD LEAD Programme",
      image: "/lovable-uploads/b27e646e-ced2-49a1-9721-7c905fc4ee6f.png",
      rating: 5,
      testimonial: "The global perspective and cross-cultural insights I gained were invaluable for leading diverse teams. The programme's focus on digital transformation aligned perfectly with my role in driving innovation.",
      outcome: "Led successful digital transformation saving $2M annually",
      year: "2024"
    }
  ];

  const stats = [
    { number: "95%", label: "Graduate Satisfaction Rate" },
    { number: "89%", label: "Career Advancement Within 2 Years" },
    { number: "2000+", label: "Alumni Network" },
    { number: "4.9/5", label: "Average Programme Rating" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how our programmes have transformed careers and organizations 
              across Asia-Pacific, creating lasting impact and driving exceptional results.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <h3 className="text-4xl font-bold text-company-blue mb-2 group-hover:text-company-gold transition-colors">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-company-blue mb-4">
                What Our Alumni Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real stories from real leaders who have experienced transformation 
                through our executive education programmes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-company-blue">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        <p className="text-sm text-company-gold font-medium">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="flex space-x-1 mr-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-company-gold text-company-gold" />
                        ))}
                      </div>
                      <Badge variant="secondary" className="bg-company-blue/10 text-company-blue text-xs">
                        {testimonial.programme}
                      </Badge>
                    </div>

                    <div className="relative mb-4">
                      <Quote className="h-6 w-6 text-company-gold/30 absolute -top-2 -left-1" />
                      <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                        {testimonial.testimonial}
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-company-blue font-semibold mb-1">Key Outcome:</p>
                          <p className="text-xs text-muted-foreground">{testimonial.outcome}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Class of</p>
                          <p className="text-sm font-bold text-company-gold">{testimonial.year}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-company-blue mb-4">
                Video Testimonials
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear directly from our alumni about their transformational experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/4ff76c9f-f89d-4729-9a72-7c5afaa95de7.png" 
                      alt="Video testimonial"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-company-gold rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-company-blue mb-2">CEO Transformation Story</h3>
                    <p className="text-sm text-muted-foreground">How the INSEAD LEAD Programme transformed leadership approach</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/d0b662f9-b5ea-4775-af3b-c18647975e47.png" 
                      alt="Video testimonial"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-company-gold rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-company-blue mb-2">Board Excellence Journey</h3>
                    <p className="text-sm text-muted-foreground">From participant to board chair - a transformation story</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-company-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of leaders who have transformed their careers and organizations 
              through our world-class executive education programmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/programmes" className="bg-company-gold hover:bg-company-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Programmes
              </a>
              <a href="/contact" className="border border-white text-white hover:bg-white hover:text-company-blue px-8 py-3 rounded-lg font-semibold transition-colors">
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
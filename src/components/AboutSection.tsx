import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Global Executive Education
          </h2>
          <p className="text-2xl font-semibold text-primary mb-6">
            Empowering Global Leaders, Transforming Futures and Bridging Borders through Lifelong Learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Global Executive Education (GEE) is a premier institution dedicated to cultivating visionary leaders capable of driving transformation across sectors. We deliver tailored programs that emphasize strategic foresight, innovation, and real-world leadership development through immersive, experiential learning.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To become Asia's most respected executive education provider, bridging global programmes with regional relevance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="text-accent text-lg">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower individuals and organizations through actionable human capital development, strategic insight, and transformational leadership.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-glow">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Pillars</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Leadership Excellence</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">Innovation & Impact</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary-glow rounded-full"></div>
                  <span className="text-foreground font-medium">Global Partnerships</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Experiential Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    satisfaction: 0,
    programmes: 0,
    roi: 0,
    experience: 0
  });

  const finalStats = {
    projects: 100,
    satisfaction: 98,
    programmes: 80,
    roi: 150,
    experience: 5
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          projects: Math.floor(finalStats.projects * progress),
          satisfaction: Math.floor(finalStats.satisfaction * progress),
          programmes: Math.floor(finalStats.programmes * progress),
          roi: Math.floor(finalStats.roi * progress),
          experience: Math.floor(finalStats.experience * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      number: `${animatedStats.projects}+`,
      label: "Successful Projects",
      color: "text-primary"
    },
    {
      number: `${animatedStats.satisfaction}%`,
      label: "Customer Satisfaction",
      color: "text-accent"
    },
    {
      number: `${animatedStats.programmes}+`,
      label: "Programmes",
      color: "text-primary-glow"
    },
    {
      number: `${animatedStats.roi}%`,
      label: "Average ROI",
      color: "text-primary"
    },
    {
      number: `${animatedStats.experience}yrs+`,
      label: "Industry Experience",
      color: "text-accent"
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Delivering measurable impact through world-class executive education and strategic leadership development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className={`text-5xl font-bold mb-4 ${stat.color}`}>
                  {stat.number}
                </div>
                <p className="text-white/90 font-medium text-lg">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 inline-block">
            <CardContent className="p-6">
              <p className="text-white/90 text-lg font-medium">
                Trusted by leading organisations across Asia for transformational leadership development
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
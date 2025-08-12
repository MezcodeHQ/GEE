import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroContent = [
    {
      type: "video",
      title: "Welcome to GEE",
      description: "Asia's Premier Executive Education Classroom",
      videoUrl: "https://videos.pexels.com/video-files/6205509/6205509-uhd_2560_1440_25fps.mp4",
      actions: [
        { label: "Explore Our Story", link: "/about" },
        { label: "Learn More", link: "/programmes" }
      ]
    },
    {
      type: "image",
      src: "/lovable-uploads/4ff76c9f-f89d-4729-9a72-7c5afaa95de7.png",
      alt: "Leadership Excellence",
      title: "Transform Your Leadership",
      description: "Unlock your potential with world-class executive education",
      actions: [
        { label: "Learn More", link: "/programmes" },
        { label: "Apply Now", link: "/contact" }
      ]
    },
    {
      type: "image",
      src: "/lovable-uploads/21b5c148-10d6-4908-a113-5a4d1a351d9e.png", 
      alt: "Business Excellence",
      title: "Executive Development",
      description: "Building the leaders of tomorrow through innovative business solutions",
      actions: [
        { label: "Discover Programmes", link: "/programmes" },
        { label: "Meet Our Faculty", link: "/faculty" }
      ]
    },
    {
      type: "image",
      src: "/lovable-uploads/52471ec7-b60d-42be-8c01-24ee2c2856cd.png",
      alt: "Global Network",
      title: "Global Excellence",
      description: "Connect with leaders worldwide through our international network",
      actions: [
        { label: "View Partners", link: "/partners" },
        { label: "Read Testimonials", link: "/testimonials" }
      ]
    }
  ];

  const heroImages = heroContent.filter(item => item.type === "image");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroContent.length) % heroContent.length);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-white overflow-hidden">
      {/* Full screen background with carousel */}
      <div className="absolute inset-0">
        {heroContent.map((content, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            {content.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                poster="/lovable-uploads/4ff76c9f-f89d-4729-9a72-7c5afaa95de7.png"
              >
                <source src={content.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={content.src} 
                alt={content.alt}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>
      
      <div className="w-full px-4 relative z-10">
        <div className="container mx-auto text-center text-white">
          <div className="animate-fade-in max-w-4xl mx-auto">
            {currentSlide === 0 ? (
              <>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Welcome to
                  <span className="block text-company-gold">Global Executive Education</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                  Asia's Premier Executive Education Classroom
                </h2>
                <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                  Transform today's professionals into tomorrow's titans through leadership, innovation, and impact.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-company-gold">{heroContent[currentSlide].title}</span>
                </h1>
                <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                  {heroContent[currentSlide].description}
                </p>
              </>
            )}
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {heroContent[currentSlide].actions?.map((action, index) => (
                <Button 
                  key={index}
                  size="lg" 
                  className={`${index === 0 ? 'bg-company-gold hover:bg-company-gold/90' : 'border-white text-white hover:bg-white hover:text-company-blue'} ${index === 0 ? 'text-white' : ''} hover-scale px-8 py-4 text-lg`}
                  variant={index === 0 ? "default" : "outline"}
                  onClick={() => window.location.href = action.link}
                >
                  {action.label}
                  {index === 0 && <ArrowRight className="ml-2 h-6 w-6" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover-scale z-20"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover-scale z-20"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-company-gold scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-company-blue mb-8">About Global Executive Education</h1>
            
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 mb-12">              
              <h2 className="text-2xl font-bold text-company-gold mb-4">About Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                Global Executive Education (GEE) is a premier institution dedicated to cultivating visionary leaders capable of driving transformation across sectors. We deliver tailored programs that emphasize strategic foresight, innovation, and real-world leadership development through immersive, experiential learning.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-company-blue/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-company-blue mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To become Asia's most respected executive education provider, bridging global programmes with regional relevance.
                  </p>
                </div>
                
                <div className="bg-company-gold/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-company-gold mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower individuals and organizations through actionable human capital development, strategic insight, and transformational leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
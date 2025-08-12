import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HumanCapital = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="/programme-images/human-capital.jpg" 
                alt="Human Capital Development Programme"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant mb-8"
              />
              <h1 className="text-4xl font-bold text-company-blue mb-4">
                Human Capital Development Programme
              </h1>
              <p className="text-xl text-company-gold font-semibold mb-4">
                Developing Tomorrow's Leaders Today
              </p>
              <p className="text-lg text-gray-700">
                Comprehensive development programme focused on building essential leadership capabilities and human capital excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 mb-8">
              <h2 className="text-2xl font-bold text-company-blue mb-6">Programme Overview</h2>
              <p className="text-gray-700 mb-6">
                Our Human Capital Development Programme is designed to equip professionals with the skills, knowledge, and mindset needed to excel in today's dynamic business environment. Through a combination of theoretical learning and practical application, participants will develop comprehensive leadership capabilities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-company-gold mb-4">Key Focus Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Leadership Development</li>
                    <li>• Strategic Thinking</li>
                    <li>• Team Management</li>
                    <li>• Communication Excellence</li>
                    <li>• Change Management</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-company-gold mb-4">Programme Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enhanced Leadership Skills</li>
                    <li>• Career Advancement</li>
                    <li>• Networking Opportunities</li>
                    <li>• Practical Tools & Frameworks</li>
                    <li>• Certification of Completion</li>
                    <li>• Ongoing Support & Resources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-company-gold hover:bg-company-gold/90 text-white">
                Apply for Human Capital Programme
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HumanCapital;
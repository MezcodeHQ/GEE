import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Brain } from "lucide-react";

const BoardDirectors = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="/programme-images/board-directors.jpg" 
                alt="Board of Directors Programme"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant mb-8"
              />
              <h1 className="text-4xl font-bold text-company-blue mb-4">
                International Board of Directors Development Programme
              </h1>
              <p className="text-xl text-company-gold font-semibold mb-4">
                Empowering Governance. Elevating Boardroom Leadership.
              </p>
              <p className="text-lg text-gray-700">
                Designed for current and aspiring board members seeking to enhance their governance acumen, strategic oversight, and ethical leadership in complex environments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-elegant border border-company-blue/10 text-center">
                <div className="bg-company-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-company-blue" />
                </div>
                <h3 className="text-lg font-bold text-company-blue mb-2">VR Boardroom Simulations</h3>
                <p className="text-gray-700 text-sm">Engage in real-time decision-making scenarios</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-elegant border border-company-blue/10 text-center">
                <div className="bg-company-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-company-gold" />
                </div>
                <h3 className="text-lg font-bold text-company-blue mb-2">Governance Labs</h3>
                <p className="text-gray-700 text-sm">Decode regulatory, ESG, and compliance matters</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-elegant border border-company-blue/10 text-center">
                <div className="bg-company-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-company-blue" />
                </div>
                <h3 className="text-lg font-bold text-company-blue mb-2">Ethical Dilemma Workshops</h3>
                <p className="text-gray-700 text-sm">Handle real case studies involving integrity and reputation risk</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-company-blue to-company-gold rounded-2xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-6">Programme Features</h2>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Financial Oversight Clinics</h3>
                  <p className="text-white/90">Simplify board-level financial scrutiny</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Executive Dialogue</h3>
                  <p className="text-white/90">Intimate discussions with experienced directors and regulators</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Boardflix Integration</h3>
                  <p className="text-white/90">Access exclusive on-demand director training videos</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-company-gold hover:bg-company-gold/90 text-white">
                Apply for Board Programme
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

export default BoardDirectors;
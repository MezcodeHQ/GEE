import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Star } from "lucide-react";

const Boardflix = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-company-blue mb-4">
                GEE Boardflix
              </h1>
              <p className="text-xl text-company-gold font-semibold mb-4">
                On-Demand Learning Library for Directors & C-Suite Leaders
              </p>
              <p className="text-lg text-gray-700">
                Accessible anywhere, anytime with expert-curated content. Developed in partnership with ISCA and aligned with CPD standards.
              </p>
            </div>

            <div className="bg-gradient-to-r from-company-blue to-company-gold rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Play className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Netflix for Directors</h2>
                  <p className="text-white/90">Stream knowledge, anytime, anywhere</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <Star className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Expert Content</h3>
                  <p className="text-white/90 text-sm">Curated by industry leaders</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">CPD Aligned</h3>
                  <p className="text-white/90 text-sm">Meets professional standards</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <Play className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">On-Demand</h3>
                  <p className="text-white/90 text-sm">Learn at your own pace</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 mb-8">
              <h2 className="text-2xl font-bold text-company-blue mb-6">Content Library</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-company-gold mb-4">Governance Topics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Board Effectiveness</li>
                    <li>• Risk Management</li>
                    <li>• ESG & Sustainability</li>
                    <li>• Regulatory Compliance</li>
                    <li>• Digital Transformation</li>
                    <li>• Crisis Management</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-company-gold mb-4">Leadership Modules</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Strategic Leadership</li>
                    <li>• Executive Presence</li>
                    <li>• Stakeholder Management</li>
                    <li>• Decision Making</li>
                    <li>• Change Leadership</li>
                    <li>• Communication Excellence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-company-blue/5 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-company-blue mb-4">Partnership with ISCA</h2>
              <p className="text-gray-700 mb-6">
                Developed in collaboration with the Institute of Singapore Chartered Accountants (ISCA), 
                ensuring all content meets the highest professional standards and CPD requirements.
              </p>
              <Button size="lg" className="bg-company-gold hover:bg-company-gold/90 text-white">
                Access Boardflix Library
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

export default Boardflix;
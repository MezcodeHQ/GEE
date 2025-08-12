import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const InsreadLead = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="/programme-images/insead-lead.jpg" 
                alt="INSEAD LEAD Programme"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant mb-8"
              />
              <h1 className="text-4xl font-bold text-company-blue mb-4">
                INSEAD LEAD Programme
              </h1>
              <p className="text-xl text-company-gold font-semibold mb-4">
                Leadership Excellence Accelerator Development Programme
              </p>
              <p className="text-lg text-gray-700">
                A premium, co-branded program with INSEAD, designed for high-performing C-Suite executives and change leaders.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 mb-8">
              <h2 className="text-2xl font-bold text-company-blue mb-6">Programme Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-company-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-700">5-day immersive programme (3 days in Malaysia, 2 days at INSEAD Singapore)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-company-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Executive simulations & boardroom scenarios</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-company-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Fireside chats with global industry leaders</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-company-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Certification by INSEAD & GEE</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-company-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Free 1-year Boardflix subscription</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-company-blue to-company-gold rounded-2xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-6">Topics Covered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Strategic Agility & Business Foresight</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Digital Innovation & Transformation</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Culture Architecture & Change Intelligence</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Stakeholder Navigation & Executive Influence</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg md:col-span-2">
                  <h3 className="font-semibold mb-2">Communication Mastery & Presence</h3>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-company-gold hover:bg-company-gold/90 text-white">
                Apply for INSEAD LEAD Programme
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

export default InsreadLead;
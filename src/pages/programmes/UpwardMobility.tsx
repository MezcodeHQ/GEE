import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const UpwardMobility = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="/programme-images/upward-mobility.jpg" 
                alt="Upward Mobility Programme"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant mb-8"
              />
              <h1 className="text-4xl font-bold text-company-blue mb-4">
                Upward Mobility Programme for Non-Executives
              </h1>
              <p className="text-xl text-company-gold font-semibold mb-4">
                Accelerating Career Growth for Emerging Leaders
              </p>
              <p className="text-lg text-gray-700">
                Specially designed for non-executive professionals seeking to advance their careers and develop leadership capabilities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 mb-8">
              <h2 className="text-2xl font-bold text-company-blue mb-6">Who Should Attend</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-company-blue/5 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-company-blue mb-4">Target Participants</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mid-level managers</li>
                    <li>• Team leaders</li>
                    <li>• High-potential employees</li>
                    <li>• Department supervisors</li>
                    <li>• Project managers</li>
                  </ul>
                </div>
                
                <div className="bg-company-gold/5 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-company-gold mb-4">Career Outcomes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Senior management roles</li>
                    <li>• Executive positions</li>
                    <li>• Leadership responsibilities</li>
                    <li>• Strategic decision-making roles</li>
                    <li>• Cross-functional leadership</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-company-blue to-company-gold rounded-2xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-6">Programme Curriculum</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Module 1: Leadership Foundations</h3>
                  <p className="text-white/90 text-sm">Building core leadership competencies</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Module 2: Strategic Thinking</h3>
                  <p className="text-white/90 text-sm">Developing strategic mindset and planning skills</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Module 3: Team Leadership</h3>
                  <p className="text-white/90 text-sm">Managing and motivating teams effectively</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Module 4: Executive Presence</h3>
                  <p className="text-white/90 text-sm">Building confidence and executive presence</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-company-gold hover:bg-company-gold/90 text-white">
                Join Upward Mobility Programme
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

export default UpwardMobility;
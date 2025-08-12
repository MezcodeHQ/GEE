import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Founders = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-company-blue mb-4 text-center">From the Desk of the Founders</h1>
            <p className="text-xl text-gray-700 text-center mb-12">Meet the visionary leaders behind Global Executive Education</p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-company-blue/10 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/b2517c99-3c0a-4f1a-996d-1cde5bb3fd71.png" 
                    alt="Freeman Yeung"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-company-blue mb-2">Freeman Yeung</h3>
                <p className="text-company-gold font-semibold mb-4">Founder</p>
                <p className="text-gray-700">
                  Visionary leader with extensive experience in executive education and strategic leadership development.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-company-blue/10 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/21b5c148-10d6-4908-a113-5a4d1a351d9e.png" 
                    alt="Dr. Malathi Alagu"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-company-blue mb-2">Dr. Malathi Alagu</h3>
                <p className="text-company-gold font-semibold mb-4">Co-Founder</p>
                <p className="text-gray-700">
                  Distinguished academic and practitioner specializing in organizational transformation and leadership excellence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-company-blue/10 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/b27e646e-ced2-49a1-9721-7c905fc4ee6f.png" 
                    alt="George Wong"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-company-blue mb-2">George Wong</h3>
                <p className="text-company-gold font-semibold mb-4">Co-Founder</p>
                <p className="text-gray-700 mb-2">Director, Transnational Education and Partnerships</p>
                <p className="text-gray-700">
                  Expert in global education partnerships and international program development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Founders;
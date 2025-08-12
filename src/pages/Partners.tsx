import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-company-blue mb-8 text-center">Our Partners</h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Collaborating with world-renowned institutions to deliver excellence
          </p>
        </div>
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
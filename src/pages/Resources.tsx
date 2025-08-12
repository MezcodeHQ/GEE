import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-company-blue mb-8 text-center">Resources & Insights</h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Access our comprehensive library of leadership resources and insights
          </p>
        </div>
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
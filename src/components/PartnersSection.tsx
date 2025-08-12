import { Card } from "@/components/ui/card";

const PartnersSection = () => {
  const certificationPartners = [
    { name: "INSEAD", logo: "/partner-logos/insead-new-logo.png" },
    { name: "ISCA", logo: "/partner-logos/isca-new-logo.png" },
    { name: "Microsoft", logo: "/partner-logos/microsoft-new-logo.png" },
    { name: "CCSD", logo: "/partner-logos/ccsd-updated-logo.png" },
    { name: "Blockchain Council", logo: "/partner-logos/blockchain-council-updated.png" },
    { name: "Alibaba Cloud", logo: "/partner-logos/alibaba-cloud-new.png" },
  ];

  const organizationPartners = [
    { name: "Majlis Agama Islam Wilayah Persekutuan", logo: "/partner-logos/maiwp-logo.jpg" },
    { name: "Maybank", logo: "/partner-logos/maybank-updated-logo.png" },
    { name: "Bank Rakyat", logo: "/partner-logos/bank-rakyat-updated.png" },
    { name: "Bank Islam Malaysia Berhad", logo: "/partner-logos/bank-islam-updated.png" },
    { name: "Bank Pembangunan Malaysia Berhad", logo: "/partner-logos/bank-pembangunan.jpg" },
    { name: "Lembaga Tabung Haji", logo: "/partner-logos/tabung-haji-updated.png" },
    { name: "MIMOS", logo: "/partner-logos/mimos-updated.jpg" },
    { name: "Lazada", logo: "/partner-logos/lazada-updated.png" },
    { name: "Uniqlo", logo: "/partner-logos/uniqlo-updated.webp" },
    { name: "Yayasan Peneraju", logo: "/partner-logos/yayasan-peneraju.jpg" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-company-blue">
            Certification / Technology Partners
          </h3>
          <div className="overflow-hidden">
            <div className="flex space-x-12 animate-scroll-infinite">
              {[...certificationPartners, ...certificationPartners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105 min-w-[200px]">
                  <img src={partner.logo} alt={partner.name} className="h-20 w-auto object-contain mx-auto filter hover:brightness-110 transition-all duration-300" />
                  <p className="text-center text-sm font-medium text-company-blue mt-4">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-company-blue">
            Trusted Organization Partners
          </h3>
          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-scroll-infinite">
              {[...organizationPartners, ...organizationPartners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105 min-w-[180px]">
                  <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain mx-auto filter hover:brightness-110 transition-all duration-300" />
                  <p className="text-center text-xs font-medium text-company-blue mt-3 leading-tight">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
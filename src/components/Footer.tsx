import { Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-company-blue via-company-blue/95 to-company-blue text-white relative overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 bg-gradient-to-r from-company-gold/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-company-gold/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl transform -translate-x-36 translate-y-36"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 md:col-span-3">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/9147245b-9ffb-4fff-8d34-f0e345cfb807.png" 
                alt="Global Executive Education"
                className="h-24 w-auto mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Global Executive Education</h3>
                <p className="text-company-gold font-medium">Asia's Premier Executive Education Classroom</p>
              </div>
            </div>
            <p className="text-white/90 mb-8 leading-relaxed text-lg">
              Transforming professionals into tomorrow's titans through world-class leadership development, 
              innovation, and strategic partnerships across Asia-Pacific.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-company-gold hover:text-white transition-all duration-300 hover-scale border border-white/20">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-company-gold hover:text-white transition-all duration-300 hover-scale border border-white/20">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-company-gold hover:text-white transition-all duration-300 hover-scale border border-white/20">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-company-gold">Quick Navigation</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block">Home</a></li>
              <li><a href="/about" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block">About Us</a></li>
              <li><a href="/programmes" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block">Our Programmes</a></li>
              <li><a href="/faculty" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block">Faculty</a></li>
              <li><a href="/partners" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block">Partners</a></li>
              <li><a href="/careers" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block">Careers</a></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-company-gold">Executive Programmes</h4>
            <ul className="space-y-3">
              <li><a href="/programmes/insead-lead" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block text-sm">INSEAD LEAD Programme</a></li>
              <li><a href="/programmes/board-directors" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block text-sm">Board of Directors Programme</a></li>
              <li><a href="/programmes/human-capital" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block text-sm">Human Capital Development</a></li>
              <li><a href="/programmes/upward-mobility" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block text-sm">Upward Mobility Programme</a></li>
              <li><a href="/programmes/boardflix" className="text-white/80 hover:text-company-gold transition-colors hover:translate-x-1 transform duration-200 block text-sm">GEE Boardflix</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-company-gold">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-company-gold/20 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-company-gold" />
                </div>
                <div>
                  <p className="text-white/90 text-sm leading-relaxed">W.P, 33-6 Binjai, 8, Lrg Binjai,<br />Kuala Lumpur, 50450<br />Kuala Lumpur, Malaysia</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-company-gold/20 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-company-gold" />
                </div>
                <a href="tel:+601112371096" className="text-white/90 hover:text-company-gold transition-colors">+6011-1237 1096</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-company-gold/20 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-company-gold" />
                </div>
                <a href="mailto:info@globalexedu.org" className="text-white/90 hover:text-company-gold transition-colors">info@globalexedu.org</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/80 text-sm">
                © 2025 Global Executive Education. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Empowering Leaders. Transforming Futures. Building Excellence.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-white/80 hover:text-company-gold transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/80 hover:text-company-gold transition-colors">Terms of Service</a>
              <a href="/accessibility" className="text-white/80 hover:text-company-gold transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
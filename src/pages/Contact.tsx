import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-company-blue mb-8 text-center">Contact Us</h1>
            <p className="text-xl text-gray-700 text-center mb-12">
              Get in touch with our team to start your transformation journey
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-elegant border border-company-blue/10">
                <h2 className="text-2xl font-bold text-company-blue mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-company-blue/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-company-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-company-blue mb-1">Address</h3>
                      <p className="text-gray-700">
                        W.P, 33-6 Binjai, 8, Lrg Binjai<br />
                        Kuala Lumpur, 50450 Kuala Lumpur
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-company-blue/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-company-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-company-blue mb-1">Phone</h3>
                      <p className="text-gray-700">+6011-1237 1096</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-company-blue/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-company-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-company-blue mb-1">Email</h3>
                      <p className="text-gray-700">info@globalexedu.org</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-company-blue mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="border-company-blue text-company-blue hover:bg-company-blue hover:text-white">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-company-blue text-company-blue hover:bg-company-blue hover:text-white">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-company-blue text-company-blue hover:bg-company-blue hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-company-blue text-company-blue hover:bg-company-blue hover:text-white">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-company-blue text-company-blue hover:bg-company-blue hover:text-white">
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-company-blue to-company-gold rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                      placeholder="Tell us about your executive education needs..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-white text-company-blue hover:bg-white/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
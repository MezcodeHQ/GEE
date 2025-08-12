import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-company-blue/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9147245b-9ffb-4fff-8d34-f0e345cfb807.png" 
                alt="Global Executive Education"
                className="h-20 w-auto hover-scale"
              />
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-company-blue hover:text-company-gold transition-colors font-medium">Home</a>
              
              <div className="relative group">
                <button className="text-company-blue hover:text-company-gold transition-colors font-medium flex items-center gap-1">
                  About Us <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-elegant rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-50 border border-border">
                  <div className="space-y-2">
                    <a href="/about" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Mission & Vision</a>
                    <a href="/founders" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Founders & Leadership</a>
                    <a href="/our-pillars" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Our Pillars</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-company-blue hover:text-company-gold transition-colors font-medium flex items-center gap-1">
                  Our Programmes <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-elegant rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[28rem] z-50 border border-border">
                  <div className="grid gap-3">
                    <div className="border-b border-border pb-2 mb-2">
                      <h3 className="font-semibold text-company-blue text-sm uppercase tracking-wide">Executive Development Programmes</h3>
                    </div>
                    <a href="/programmes/human-capital" className="flex items-center gap-3 text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">
                      <img src="/programme-images/human-capital.jpg" alt="Human Capital" className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm" />
                      <div className="flex-1">
                        <div className="font-medium">Human Capital Development Programme</div>
                        <div className="text-xs text-muted-foreground">Building Tomorrow's Leaders</div>
                      </div>
                    </a>
                    <a href="/programmes/upward-mobility" className="flex items-center gap-3 text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">
                      <img src="/programme-images/upward-mobility.jpg" alt="Upward Mobility" className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm" />
                      <div className="flex-1">
                        <div className="font-medium">Upward Mobility Programme for Non-Executives</div>
                        <div className="text-xs text-muted-foreground">Career Advancement Programme</div>
                      </div>
                    </a>
                    <a href="/programmes/insead-lead" className="flex items-center gap-3 text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">
                      <img src="/programme-images/insead-lead.jpg" alt="INSEAD LEAD" className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm" />
                      <div className="flex-1">
                        <div className="font-medium">INSEAD LEAD Programme</div>
                        <div className="text-xs text-muted-foreground">Leadership Excellence Accelerator Development</div>
                      </div>
                    </a>
                    <a href="/programmes/board-directors" className="flex items-center gap-3 text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">
                      <img src="/programme-images/board-directors.jpg" alt="Board Directors" className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm" />
                      <div className="flex-1">
                        <div className="font-medium">International Board of Directors Development Programme</div>
                        <div className="text-xs text-muted-foreground">Governance & Leadership Excellence</div>
                      </div>
                    </a>
                    <a href="/programmes/boardflix" className="flex items-center gap-3 text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">
                      <img src="/programme-images/boardflix.jpg" alt="Boardflix" className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm" />
                      <div className="flex-1">
                        <div className="font-medium">GEE Boardflix</div>
                        <div className="text-xs text-muted-foreground">On-demand learning library</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-company-blue hover:text-company-gold transition-colors font-medium flex items-center gap-1">
                  More <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-elegant rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-50 border border-border">
                  <div className="space-y-2">
                    <a href="/faculty" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Faculty</a>
                    <a href="/testimonials" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Testimonials</a>
                    <a href="/partners" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Partners</a>
                    <a href="/resources" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Resources</a>
                    <a href="/careers" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Careers</a>
                    <a href="/contact" className="block text-sm text-foreground hover:text-company-gold py-2 px-3 rounded hover:bg-muted transition-colors">Contact</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-company-gold hover:bg-company-gold/90 text-white font-semibold px-6 hover-scale">
              Apply / Enrol
            </Button>
          </div>

          <button
            className="lg:hidden text-company-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-company-blue hover:text-company-gold transition-colors">Home</a>
              <a href="/about" className="text-company-blue hover:text-company-gold transition-colors">About</a>
              <a href="/programmes" className="text-company-blue hover:text-company-gold transition-colors">Programmes</a>
              <a href="/partners" className="text-company-blue hover:text-company-gold transition-colors">Partners</a>
              <a href="/resources" className="text-company-blue hover:text-company-gold transition-colors">Resources</a>
              <a href="/contact" className="text-company-blue hover:text-company-gold transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-company-blue text-company-blue">Apply</Button>
                <Button className="bg-company-gold text-white">Join LEAD Programme</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
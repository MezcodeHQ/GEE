import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Founders from "./pages/Founders";
import Programmes from "./pages/Programmes";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import OurPillars from "./pages/OurPillars";
import Faculty from "./pages/Faculty";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import InsreadLead from "./pages/programmes/InsreadLead";
import BoardDirectors from "./pages/programmes/BoardDirectors";
import HumanCapital from "./pages/programmes/HumanCapital";
import UpwardMobility from "./pages/programmes/UpwardMobility";
import Boardflix from "./pages/programmes/Boardflix";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/our-pillars" element={<OurPillars />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/programmes/insead-lead" element={<InsreadLead />} />
          <Route path="/programmes/board-directors" element={<BoardDirectors />} />
          <Route path="/programmes/human-capital" element={<HumanCapital />} />
          <Route path="/programmes/upward-mobility" element={<UpwardMobility />} />
          <Route path="/programmes/boardflix" element={<Boardflix />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

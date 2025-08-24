import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ScrollManager from '@/components/ScrollManager';
import { Navbar } from './components/Navbar';
import { useSEO } from './lib/seo';
import Home from './pages/Home';

// System Pages
import AILeadGeneration from './pages/system/AILeadGeneration';
import LeadGenerationSystem from '@/pages/system/LeadGenerationSystem';
import Conversion from './pages/system/Conversion';
import ConversionSystem from '@/pages/system/ConversionSystem';
import CallAutomationSystem from "@/pages/system/CallAutomationSystem";
import SupportSystem from "@/pages/system/SupportSystem";
import RecruitmentSystem from "@/pages/system/RecruitmentSystem";
import AISalesSystem from "@/pages/system/AISalesSystem";
import ProjectManagementSystem from "@/pages/system/ProjectManagementSystem";
import SocialMediaSystem from "@/pages/system/SocialMediaSystem";
import LeadCaptureSystem from "@/pages/system/LeadCaptureSystem";

// Other Pages
import CaseStudies from './pages/CaseStudies';
import BookCall from './pages/BookCall';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


// Footer Component
function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">BuildMediaStrategies</h3>
            <p className="text-background/70 mb-4">
              AI Systems for Small & Medium Enterprises
            </p>
            <div className="space-y-2 text-sm text-background/60">
              <p>buildmediastrategies@outlook.com</p>
              <p>07915 738448</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/systems/ai-lead-generation" className="block text-background/60 hover:text-background transition-colors">
                Systems
              </Link>
              <Link to="/case-studies" className="block text-background/60 hover:text-background transition-colors">
                Case Studies
              </Link>
              <Link to="/book" className="block text-background/60 hover:text-background transition-colors">
                Book a Call
              </Link>
              <Link to="/about" className="block text-background/60 hover:text-background transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-background/60 hover:text-background transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </motion.div>
        
        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/50">
            © 2025 BuildMediaStrategies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useSEO();

  // Scroll progress bar
  useEffect(() => {
    const el = document.getElementById("scrollbar");
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      el.style.width = `${Math.max(0, Math.min(1, p)) * 100}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div id="scrollbar" />
      <ScrollManager />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* System Pages */}
          <Route path="/systems/ai-lead-generation" element={<LeadGenerationSystem />} />
          <Route path="/systems/conversion" element={<ConversionSystem />} />
          <Route path="/systems/call-automation" element={<CallAutomationSystem />} />
          <Route path="/systems/support" element={<SupportSystem />} />
          <Route path="/systems/recruitment" element={<RecruitmentSystem />} />
          <Route path="/systems/ai-sales" element={<AISalesSystem />} />
          <Route path="/systems/project-management" element={<ProjectManagementSystem />} />
          <Route path="/systems/social-media-automation" element={<SocialMediaSystem />} />
          <Route path="/systems/lead-capture" element={<LeadCaptureSystem />} />
          
          {/* Other Pages */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/book" element={<BookCall />} />
          <Route path="/pricing" element={<BookCall />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
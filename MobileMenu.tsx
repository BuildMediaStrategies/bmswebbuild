import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import * as Accordion from '@radix-ui/react-accordion';

const systemsItems = [
  { name: 'AI Lead Generation System', path: '/systems/ai-lead-generation' },
  { name: 'Conversion System', path: '/systems/conversion' },
  { name: 'Call Automation System', path: '/systems/call-automation' },
  { name: 'Support System', path: '/systems/support' },
  { name: 'Recruitment System', path: '/systems/recruitment' },
  { name: 'AI Sales System', path: '/systems/ai-sales' },
  { name: 'Project Management System', path: '/systems/project-management' },
  { name: 'Social Media Automation System', path: '/systems/social-media-automation' },
  { name: 'Lead Capture System', path: '/systems/lead-capture' },
];

const mainNavItems = [
  { name: 'Home', path: '/' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if current path is active
  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden p-2 hover:bg-black/5 rounded-md transition-colors focus:outline-none focus:outline-1 focus:outline-black focus:outline-offset-2"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="w-full sm:w-80 bg-background border-l border-line p-0 overflow-y-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        id="mobile-menu"
      >
        <motion.div
          className="flex flex-col h-full pt-16 pb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <nav className="flex-1 px-6">
            <div className="space-y-1">
              {mainNavItems.map((item, index) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    to={item.path}
                   className={`block py-3 text-lg font-medium text-foreground hover:text-foreground/70 transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2 ${
                     isActiveLink(item.path) ? 'text-foreground font-semibold' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants}>
                <Accordion.Root type="single" collapsible className="w-full">
                  <Accordion.Item value="systems" className="border-none">
                    <Accordion.Trigger className="flex items-center justify-between w-full py-3 text-lg font-medium text-foreground hover:text-foreground/70 transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2 [&[data-state=open]>svg]:rotate-180">
                      <span className={isActiveLink('/systems') ? 'font-semibold' : ''}>
                        Systems
                      </span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pl-4 pb-2">
                        {systemsItems.map((system, systemIndex) => (
                          <motion.div
                            key={system.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: systemIndex * 0.05 }}
                          >
                            <Link
                              to={system.path}
                             className={`block py-2 text-base text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2 ${
                               isActiveLink(system.path) ? 'text-foreground font-medium' : ''
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {system.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </motion.div>
            </div>
          </nav>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
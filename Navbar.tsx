import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

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
  { name: 'Book a Call', path: '/book' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();

  // Check if current path is active
  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isDropdownOpen) return;

    switch (event.key) {
      case 'Escape':
        setIsDropdownOpen(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = focusedIndex < systemsItems.length - 1 ? focusedIndex + 1 : 0;
        setFocusedIndex(nextIndex);
        itemRefs.current[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : systemsItems.length - 1;
        setFocusedIndex(prevIndex);
        itemRefs.current[prevIndex]?.focus();
        break;
      case 'Tab':
        if (event.shiftKey && focusedIndex === 0) {
          setIsDropdownOpen(false);
          setFocusedIndex(-1);
        } else if (!event.shiftKey && focusedIndex === systemsItems.length - 1) {
          setIsDropdownOpen(false);
          setFocusedIndex(-1);
        }
        break;
    }
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
    setFocusedIndex(-1);
  };

  const handleBlur = (event: React.FocusEvent) => {
    // Check if the new focus target is within the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget as Node)) {
      setIsDropdownOpen(false);
      setFocusedIndex(-1);
    }
  };

  const handleItemClick = () => {
    setIsDropdownOpen(false);
    setFocusedIndex(-1);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setFocusedIndex(-1);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-line">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link text-foreground hover:text-foreground/70 font-medium transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2 relative ${
                isActiveLink('/') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground' : ''
              }`}
            >
              Home
            </Link>

            {/* Systems Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onKeyDown={handleKeyDown}
            >
              <button
                ref={triggerRef}
                className={`nav-link flex items-center space-x-1 text-foreground hover:text-foreground/70 font-medium transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2 relative ${
                  isActiveLink('/systems') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground' : ''
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-controls="systems-dropdown"
              >
                <span>Systems</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-80 bg-background border border-line shadow-lg"
                    style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
                    id="systems-dropdown"
                    role="menu"
                  >
                    <div className="py-2">
                      {systemsItems.map((system, index) => (
                        <motion.div
                          key={system.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.2 }}
                        >
                          <Link
                            ref={(el) => (itemRefs.current[index] = el)}
                            to={system.path}
                            className={`block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-foreground transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2 focus:bg-muted ${
                              isActiveLink(system.path) ? 'bg-muted font-medium' : ''
                            }`}
                            onBlur={handleBlur}
                            onClick={handleItemClick}
                            onFocus={() => setFocusedIndex(index)}
                            role="menuitem"
                          >
                            {system.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainNavItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link text-foreground hover:text-foreground/70 font-medium transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2 relative ${
                  isActiveLink(item.path) ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
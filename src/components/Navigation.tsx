import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#hero' },
  { name: 'Skills', icon: Code, href: '#skills' },
  { name: 'Projects', icon: Briefcase, href: '#projects' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`p-3 rounded-full transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-primary text-background'
                    : 'hover:bg-primary/10 text-muted-foreground hover:text-primary'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
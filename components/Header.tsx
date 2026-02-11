
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 md:px-12 lg:px-20 ${
        isScrolled ? 'py-4 backdrop-blur-xl bg-[#F6F7EB]/90 border-b border-[#393E41]/10' : 'py-6 md:py-10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo System Lockup */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-4">
          <a href="#home" className="text-lg md:text-xl font-serif italic tracking-tighter text-[#393E41] hover:text-[#E94F37] transition-colors">
            Wajid M.
          </a>
          <span className="h-4 w-[1px] bg-[#393E41]/20 hidden sm:block" />
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#393E41]/50 font-black hidden sm:block">Archive v.26</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, ease: "circOut" }}
              className="text-[10px] uppercase tracking-[0.4em] font-black text-[#393E41]/70 hover:text-[#E94F37] transition-all relative group"
            >
              <span>{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E94F37] transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02 }}
            className="hidden sm:flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-black bg-[#393E41] text-[#F6F7EB] px-5 py-2.5 rounded-sm hover:bg-[#E94F37] transition-colors"
          >
            <span>Start project</span>
            <ArrowUpRight className="w-3 h-3" />
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#393E41] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#F6F7EB] border-b border-[#393E41]/10 md:hidden flex flex-col p-6 space-y-6"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[12px] uppercase tracking-[0.4em] font-black text-[#393E41]/80 hover:text-[#E94F37]"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-black bg-[#393E41] text-[#F6F7EB] px-5 py-4 rounded-sm"
            >
              <span>Start project</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

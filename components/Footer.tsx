
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/brandverse.design?igsh=ZXdta2t0dXp1aXhs', icon: <Instagram className="w-4 h-4" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wajid-mehmood-5507202b2/', icon: <Linkedin className="w-4 h-4" /> },
    { name: 'GitHub', href: 'https://github.com/WajidMehmood-Portfolio', icon: <Github className="w-4 h-4" /> },
  ];

  return (
    <footer className="relative pt-24 md:pt-32 pb-12 px-6 md:px-12 border-t border-[#393E41]/10 bg-[#F6F7EB] overflow-hidden">
      
      {/* Cinematic Background Typography */}
      <div className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.03] md:opacity-[0.05]">
        <h2 className="text-[29vw] font-serif font-bold tracking-tighter leading-none whitespace-nowrap text-[#393E41]" style={{ WebkitTextStroke: '1px #393E41' }}>
          WAJID
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-12 mb-16 md:mb-24">
          
          <div className="md:col-span-1 space-y-6">
            <a href="#home" className="text-2xl md:text-3xl font-serif italic text-[#393E41] hover:text-[#E94F37] transition-colors">
              Wajid M.
            </a>
            <p className="text-sm text-[#393E41]/70 font-light leading-relaxed max-w-[240px]">
              Full-Stack Developer & Branding Designer specializing in modular systems and cinematic digital experiences.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[#393E41]/40">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-[#393E41] hover:text-[#E94F37] transition-colors duration-300 font-medium tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[#393E41]/40">Connect</h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm text-[#393E41] hover:text-[#E94F37] transition-colors duration-300 font-medium group"
                  >
                    <span className="opacity-40 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end text-left md:text-right">
            <div className="space-y-8">
              <h4 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[#393E41]/40">Availability</h4>
              <p className="text-sm font-medium text-[#393E41]">
                Currently open for worldwide <br /> creative collaborations and <br /> modular development in 2026.
              </p>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, backgroundColor: '#393E41', color: '#F6F7EB' }}
              whileTap={{ scale: 0.9 }}
              className="mt-8 md:mt-0 p-5 rounded-full border border-[#393E41]/10 bg-transparent transition-all duration-500 group"
            >
              <ArrowUp className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1 text-[#E94F37]" />
            </motion.button>
          </div>
        </div>

        <div className="pt-8 md:pt-10 border-t border-[#393E41]/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#393E41]/40">
            &copy; {currentYear} &bull; Wajid Mehmood &bull; Brandverse.design
          </div>
          <div className="flex items-center space-x-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#E94F37]">
            <span className="hover:text-[#393E41] cursor-pointer transition-colors">Privacy</span>
            <span className="w-1 h-1 bg-[#393E41]/10 rounded-full"></span>
            <span className="hover:text-[#393E41] cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

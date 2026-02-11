
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-40 border-t border-[#393E41]/10">
      <div className="max-w-4xl">
        <h2 className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold text-[#E94F37] mb-12 md:mb-16">Collaborate</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a 
            href="mailto:wajidmehmood074@gmail.com" 
            className="text-3xl md:text-7xl lg:text-8xl font-serif leading-[1] tracking-tighter hover:italic text-[#393E41] hover:text-[#E94F37] transition-all inline-block mb-16 md:mb-20 break-all"
          >
            wajidmehmood074@gmail.com
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-8 md:mt-12">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#393E41]/40 font-black">Online Spaces</h4>
            <div className="flex flex-col space-y-4 text-xl md:text-2xl font-serif italic text-[#393E41]">
              <a href="https://www.linkedin.com/in/wajid-mehmood-5507202b2/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94F37] transition-colors w-fit">LinkedIn</a>
              <a href="https://instagram.com/brandverse.design" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94F37] transition-colors w-fit">Instagram</a>
              <a href="#" className="hover:text-[#E94F37] transition-colors w-fit">GitHub</a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#393E41]/40 font-black">Inquiries</h4>
            <p className="text-lg md:text-xl text-[#393E41]/70 font-light leading-relaxed">
              Currently accepting selected projects for 2026. Whether you're building a cross-platform system or a new identity, let's architect something modular and timeless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

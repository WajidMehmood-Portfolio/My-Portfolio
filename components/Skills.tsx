
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#393E41]/10">
      <div className="max-w-4xl mb-16 md:mb-24">
        <h2 className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold text-[#E94F37] mb-6 md:mb-8">Technical Proficiency</h2>
        <h3 className="text-4xl md:text-6xl font-serif italic text-[#393E41] leading-tight">
          Tools that bridge logic <br /> and aesthetics.
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-[12px] uppercase tracking-[0.4em] font-black mb-8 md:mb-10 text-[#393E41]/50 border-b border-[#393E41]/10 pb-4">
              {cat}
            </h3>
            <div className="space-y-8 md:space-y-10">
              {SKILLS.filter(s => s.category === cat).map(skill => (
                <div key={skill.name} className="flex flex-col group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs tracking-[0.2em] font-bold uppercase text-[#393E41]">{skill.name}</span>
                    <span className="text-[10px] text-[#E94F37] font-black">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-[#393E41]/10 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="h-full bg-[#E94F37] group-hover:bg-[#393E41] transition-colors shadow-[0_0_10px_rgba(233,79,55,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

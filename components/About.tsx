
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Decorative Heading */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-40"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#E94F37] mb-6 block">Philosophy — 01</span>
            <h2 className="text-5xl md:text-6xl font-serif italic leading-none tracking-tighter text-[#393E41]">
              The <span className="not-italic">Modern</span> <br /> Architecture.
            </h2>
            <div className="mt-8 md:mt-12 h-px w-20 bg-[#E94F37]" />
          </motion.div>
        </div>

        {/* Right: Rich Narrative */}
        <div className="lg:col-span-8 space-y-8 md:space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-light leading-snug text-[#393E41]"
          >
            I am Wajid Mehmood — a Full-stack Engineer and Creative Strategist based at the intersection of <span className="text-[#E94F37] italic font-serif">design intuition</span> and <span className="text-[#E94F37] italic font-serif">technical rigor.</span>
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-base md:text-lg text-[#393E41]/70 font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              With specialized expertise in Flutter, Python, and modular Branding, I build digital ecosystems that don't just function—they resonate. My approach treats every line of code as a structural element in a larger cinematic experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Currently leading design workflows at Brandverse, I focus on creating high-conversion identity systems for global clients, ensuring that performance and aesthetics are never mutually exclusive.
            </motion.p>
          </div>

          {/* Metric Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 md:pt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Systems Built", val: "40+" },
              { label: "Design Systems", val: "12" },
              { label: "Code Accuracy", val: "99%" },
              { label: "Satisfaction", val: "10/10" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2 group">
                 <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#393E41]/50 group-hover:text-[#E94F37] transition-colors">{stat.label}</p>
                 <p className="text-2xl md:text-3xl font-serif text-[#393E41]">{stat.val}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

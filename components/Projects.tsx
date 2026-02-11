
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1500 }}
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32 md:mb-48 lg:mb-64 last:mb-0 ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={`absolute -top-10 md:-top-20 lg:-top-32 ${
        index % 2 === 0 ? 'right-0 lg:-right-10' : 'left-0 lg:-left-10'
      } text-[40vw] md:text-[30vw] lg:text-[25vw] font-serif font-black text-[#393E41]/[0.05] select-none pointer-events-none z-0 leading-none h-fit flex items-start justify-center overflow-hidden`}>
        0{index + 1}
      </div>

      <motion.div 
        style={{ rotateX, rotateY }}
        className={`lg:col-span-7 group relative z-10 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-[#393E41]/10 border border-[#393E41]/5 shadow-xl">
          <motion.div 
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#393E41] origin-left z-20"
          />
          <motion.div 
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#E94F37] origin-left z-10"
          />

          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#393E41]/90 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
             <p className="text-[#F6F7EB] text-[10px] uppercase tracking-[0.5em] font-black">Ref. Archive 0{index + 1}</p>
          </div>
        </div>
      </motion.div>

      <div className={`lg:col-span-5 flex flex-col justify-center text-left relative z-20 mt-4 lg:mt-0 ${index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[#E94F37] mb-4 md:mb-6 block">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-8 leading-tight tracking-tight text-[#393E41] group-hover:italic transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-[#393E41]/70 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-full lg:max-w-sm">
            {project.description}
          </p>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center space-x-4 md:space-x-6 text-[10px] uppercase tracking-[0.5em] font-black text-[#393E41] group w-fit"
          >
            <span className="group-hover:text-[#E94F37] transition-colors">Launch Project</span>
            <div className="flex items-center">
              <div className="w-8 md:w-12 h-[1px] bg-[#393E41]/20 group-hover:bg-[#E94F37] group-hover:w-20 transition-all duration-500" />
              <div className="w-8 h-8 md:w-10 md:h-10 border border-[#393E41]/20 rounded-full flex items-center justify-center group-hover:bg-[#E94F37] group-hover:border-[#E94F37] transition-all duration-500 -ml-2">
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#F6F7EB] transition-colors" />
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-40 relative">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 md:mb-48 border-b border-[#393E41]/10 pb-12 md:pb-16">
        <div className="max-w-xl">
           <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black text-[#E94F37] mb-4 md:mb-6 block"
           >
             Curated Selection
           </motion.span>
           <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-none tracking-tighter italic text-[#393E41]">
             Selected <br /> <span className="not-italic">Masterworks</span>
           </h2>
        </div>
        <div className="hidden md:flex flex-col items-end text-[#393E41]/40">
           <span className="text-[10px] uppercase tracking-widest font-black mb-2 italic text-right">Volume — I</span>
           <span className="text-[12px] font-mono tracking-tighter">01 &bull; 04</span>
        </div>
      </div>

      <div className="relative">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      <div className="mt-24 md:mt-40 flex flex-col items-center">
         <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#393E41]/40 mb-8 md:mb-10">End of Volume I</p>
         <motion.button
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.98 }}
           className="w-full md:w-auto px-12 md:px-16 py-5 md:py-6 border border-[#393E41]/10 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black text-[#393E41] hover:bg-[#E94F37] hover:border-[#E94F37] hover:text-[#F6F7EB] transition-all duration-700 shadow-sm"
         >
           Access Full Directory (10 Projects)
         </motion.button>
      </div>
    </section>
  );
};

export default Projects;

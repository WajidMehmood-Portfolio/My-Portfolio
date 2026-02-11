
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yParallax = useTransform(scrollY, [0, 800], [0, 150]);
  const scaleImage = useTransform(scrollY, [0, 800], [1.1, 1]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  // Magnetic Button Logic
  const magBtnRef = useRef<HTMLAnchorElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const springX = useSpring(mX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magBtnRef.current || window.innerWidth < 1024) return;
    const { left, top, width, height } = magBtnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mX.set((e.clientX - centerX) * 0.4);
    mY.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    mX.set(0);
    mY.set(0);
  };

  const textVariants = {
    hidden: { y: "110%", rotate: 5 },
    visible: (i: number) => ({
      y: 0,
      rotate: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }
    })
  };

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
        
        <div className="lg:col-span-9 z-20">
          <motion.div style={{ opacity: opacityText }} className="flex items-center space-x-4 mb-6 md:mb-10">
             <div className="h-2 w-2 bg-[#E94F37] rounded-full animate-pulse shadow-[0_0_10px_#E94F37]" />
             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-black text-[#E94F37]">
               Available for 2026 Collaboration
             </span>
          </motion.div>

          <h1 className="text-[10vw] lg:text-[8rem] font-serif leading-[0.8] lg:leading-[0.75] tracking-tighter mb-8 md:mb-16 select-none">
            <div className="overflow-hidden h-fit">
              <motion.span custom={1} variants={textVariants} initial="hidden" animate="visible" className="block text-[#393E41]">WAJID</motion.span>
            </div>
            <div className="overflow-hidden h-fit flex items-baseline">
              <motion.span custom={2} variants={textVariants} initial="hidden" animate="visible" className="block italic text-[#393E41] pr-4 lg:pr-8">MEHMOOD</motion.span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "12vw" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] bg-[#E94F37]/30 hidden lg:block"
              />
            </div>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-base md:text-xl text-[#393E41]/70 font-light leading-relaxed max-w-sm"
            >
              Architecting modular systems where <span className="text-[#393E41] italic font-medium">logical complexity</span> meets <span className="text-[#393E41] italic font-medium">cinematic simplicity.</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex justify-start md:justify-end"
            >
              <motion.a 
                ref={magBtnRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-8 md:px-12 md:py-12 rounded-full border border-[#393E41]/20 hover:border-[#E94F37] transition-colors duration-500"
              >
                 <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black z-10 text-[#393E41] group-hover:text-[#E94F37] transition-colors">Enter Portfolio</span>
                 <div className="absolute inset-2 border border-dashed border-[#393E41]/10 rounded-full animate-[spin_15s_linear_infinite]" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="lg:col-span-3 relative h-full flex flex-col justify-end mt-12 lg:mt-0"
          style={{ y: yParallax }}
        >
          <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-none mx-auto lg:mx-0 overflow-hidden rounded-sm group border border-[#393E41]/10 shadow-sm">
             <motion.div 
               initial={{ y: 0 }}
               animate={{ y: "-100%" }}
               transition={{ duration: 1.5, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
               className="absolute inset-0 bg-[#E94F37] z-10"
             />
             
             <motion.img 
               style={{ scale: scaleImage }}
               src="/My new pic.jpeg" 
               className="w-full h-full object-cover grayscale transition-all duration-1000 lg:group-hover:grayscale-0 lg:group-hover:scale-105"
               alt="Portfolio Profile"
             />
             
             <div className="absolute inset-0 bg-gradient-to-t from-[#393E41]/80 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute bottom-6 left-6 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-black text-[#E94F37] mb-1">Lead Creative</p>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#F6F7EB]">Wajid M. Identity</p>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E94F37]/30 to-transparent" />
    </section>
  );
};

export default Hero;

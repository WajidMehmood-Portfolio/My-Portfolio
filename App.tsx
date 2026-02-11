
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-[#E94F37] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: '-50%',
        y: '-50%',
      }}
    />
  );
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#E94F37]/30 bg-[#F6F7EB] text-[#393E41]">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#393E41]"
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overflow-hidden"
            >
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-2xl md:text-4xl font-serif italic text-[#F6F7EB] tracking-widest"
              >
                WAJID MEHMOOD
              </motion.h1>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-[1px] bg-[#E94F37] mt-4"
            />
            <span className="mt-4 text-[10px] tracking-[0.4em] text-[#F6F7EB]/60 uppercase font-black">Archive v.26</span>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <Header />
            <div className="max-w-[1440px] mx-auto px-6 md:px-20">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </div>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

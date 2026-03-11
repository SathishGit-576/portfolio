import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';

const Hero = ({ personalInfo }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = personalInfo.role;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  // Magnetic Button Logic for the main CTA
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Scale down the movement
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse shadow-[0_0_15px_var(--accent)]" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent-secondary rounded-full animate-pulse shadow-[0_0_15px_var(--accent-secondary)]" style={{ animationDelay: '1s' }} />
      </div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-semibold mb-6 tracking-[0.3em] uppercase text-sm"
          >
            Sathish - Digital Experience Designer
          </motion.h2>

          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Hi, I'm <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                {personalInfo.name}
              </span>
            </span>
          </h1>

          <div className="h-10 md:h-12 mb-10 overflow-hidden">
            <p className="text-xl md:text-3xl font-medium text-text-secondary">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-6 md:h-8 bg-accent ml-1 align-middle"
              />
            </p>
          </div>

          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            Specializing in building <span className="text-text-primary border-b border-accent/30 font-semibold">robust backend architectures</span> and <span className="text-text-primary border-b border-accent-secondary/30 font-semibold">stunning frontend interfaces</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {/* Magnetic CTA Button */}
          <motion.a
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            href="#projects"
            className="group relative px-10 py-5 bg-accent text-white rounded-2xl font-bold transition-all flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">Explore Projects</span>
            <Send size={20} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute -inset-1 bg-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity z-0" />
          </motion.a>

          <a
            href="#contact"
            className="px-10 py-5 border border-border-primary hover:border-accent text-text-secondary hover:text-text-primary rounded-2xl font-bold transition-all hover:bg-white/5 backdrop-blur-sm"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;

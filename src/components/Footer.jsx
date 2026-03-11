import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="flex flex-col items-center">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent mb-8 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-accent/10"
          >
            <ChevronUp size={24} />
          </motion.a>

          <div className="flex justify-center space-x-4 mb-10">
            {[
              { icon: <Github size={22} />, link: "https://github.com/SathishGit-576" },
              { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/sathish576/" },
              { icon: <Mail size={22} />, link: "mailto:mrsathish576@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-text-primary font-black text-2xl tracking-tighter mb-4">
            Sathish<span className="text-accent">.</span>
          </p>

          <p className="text-text-secondary text-sm font-medium mb-2 opacity-60">
            © {new Date().getFullYear()} SATHISH S. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-text-secondary font-bold opacity-40">
            <span>Built with passion</span>
            <div className="w-1 h-1 rounded-full bg-accent" />
            <span>React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

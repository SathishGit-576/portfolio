import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon, Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const themes = [
    { id: 'dark', name: 'Dark', icon: <Moon size={16} />, color: '#030712' },
    { id: 'light', name: 'Light', icon: <Sun size={16} />, color: '#f8fafc' },
    { id: 'purple-neon', name: 'Neon', icon: <Palette size={16} />, color: '#d946ef' },
    { id: 'blue-cyber', name: 'Cyber', icon: <Palette size={16} />, color: '#0ea5e9' },
    { id: 'green-matrix', name: 'Matrix', icon: <Palette size={16} />, color: '#16a34a' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 transition-all duration-500 ${scrolled ? 'glass rounded-3xl py-3 shadow-2xl border-white/5 mx-4 md:mx-auto' : ''}`}>
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-3xl font-black bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent tracking-tighter">
              Sathish.
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group px-4 py-2 text-sm font-bold text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-3 bg-white/5 hover:bg-accent/10 rounded-2xl text-accent border border-transparent hover:border-accent/20 transition-all"
              >
                <Palette size={20} />
              </button>

              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-4 w-48 glass rounded-2xl p-2 shadow-2xl border-white/5 overflow-hidden"
                  >
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          toggleTheme(t.id);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${theme === t.id ? 'bg-accent text-white' : 'hover:bg-white/5 text-text-secondary'}`}
                      >
                        <div className="flex items-center gap-3">
                          {t.icon}
                          {t.name}
                        </div>
                        {theme === t.id && <Check size={14} />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-6 w-[1px] bg-border-primary" />

            <div className="flex items-center space-x-4">
              <a href="https://github.com/SathishGit-576" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-accent transition-colors"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/sathish576/" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-accent transition-colors"><Linkedin size={22} /></a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 bg-white/5 rounded-xl text-accent"
            >
              <Palette size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-secondary hover:text-text-primary"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mx-4 mt-2 rounded-3xl overflow-hidden shadow-2xl border-white/5"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-2xl font-black text-text-secondary hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-6 border-t border-border-primary grid grid-cols-2 gap-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      toggleTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${theme === t.id ? 'bg-accent text-white' : 'bg-white/5 text-text-secondary'}`}
                  >
                    {t.icon}
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

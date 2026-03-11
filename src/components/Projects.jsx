import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, idx }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[450px] w-full glass rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:border-accent/40"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([mx, my]) => `radial-gradient(600px circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, var(--accent-secondary), transparent 40%)`
          ),
          filter: 'blur(60px)',
          opacity: 0.15
        }}
      />

      {/* Project Image Container */}
      <div
        className="relative h-56 m-4 overflow-hidden rounded-[2rem]"
        style={{ transform: "translateZ(50px)" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent"></div>

        <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-accent hover:text-white transition-all">
            <Github size={20} />
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-accent hover:text-white transition-all">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="px-8 pb-8 pt-2" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-black mb-3 text-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-6 leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1.5 glass rounded-full text-accent-secondary font-bold border-transparent group-hover:border-accent-secondary/20 border transition-all">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-accent-secondary text-sm font-bold tracking-[0.3em] uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-primary mb-6">Featured Projects</h3>
          <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

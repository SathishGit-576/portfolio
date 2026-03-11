import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Cloud, Terminal, Cpu, Code } from 'lucide-react';

const Skills = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getIcon = (category) => {
    switch (category) {
      case 'Frontend': return <Layout className="text-accent" />;
      case 'Backend': return <Database className="text-accent-secondary" />;
      case 'DataBase': return <Cpu className="text-accent" />;
      case 'Tools': return <Terminal className="text-accent-secondary" />;
      default: return <Code className="text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-primary mb-6">Technical Skills</h3>
          <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-8 rounded-[2rem] hover:border-accent/40 transition-all group relative overflow-hidden glow-card"
            >
              <div className="mb-6 p-4 bg-accent/5 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                {getIcon(skillGroup.category)}
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary group-hover:text-text-primary transition-colors">{skill}</span>
                      <span className="text-accent font-mono">90%</span>
                    </div>
                    <div className="h-1 w-full bg-border-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-accent to-accent-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

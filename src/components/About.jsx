import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Target, Award } from 'lucide-react';

const About = ({ about }) => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-primary mb-6">About Me</h3>
          <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-accent-secondary rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative glass rounded-[3rem] p-10 md:p-14 overflow-hidden glow-card">
              <div className="absolute top-0 right-0 p-8 text-accent/10">
                <User size={120} />
              </div>
              <p className="text-text-secondary leading-relaxed text-xl relative z-10 italic">
                "{about}"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: <Rocket className="text-accent" />, title: "Visionary", desc: "Building scalable web futures" },
              { icon: <Target className="text-accent-secondary" />, title: "Precision", desc: "Clean, performant architecture" },
              { icon: <Award className="text-accent" />, title: "Honors", desc: "BCA Graduate with Distinction" },
              { icon: <User className="text-accent-secondary" />, title: "Developer", desc: "Junior Full Stack Expert" },
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group border-transparent hover:border-accent/20">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-text-primary mb-2">{item.title}</h4>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}

            <div className="sm:col-span-2 glass p-8 rounded-3xl mt-2 bg-accent/5 border-accent/20">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent font-black text-2xl">
                  01
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary">Year of Intensive Training</h4>
                  <p className="text-text-secondary text-sm">Java Full Stack Specialization at Greens Tech</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

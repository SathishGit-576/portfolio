import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 border-l-2 border-slate-800"
            >
              <div className="absolute -left-3 top-0 bg-blue-600 p-1.5 rounded-full text-white">
                <GraduationCap size={16} />
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <span className="text-blue-400 text-sm font-semibold">{edu.period}</span>
                <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
                <p className="text-slate-300 mt-1">{edu.institution}</p>
                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

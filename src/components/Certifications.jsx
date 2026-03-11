import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex items-start gap-4 hover:bg-slate-900 transition-colors"
            >
              <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-100">{cert.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                <p className="text-slate-500 text-xs mt-2 uppercase tracking-wider">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = ({ experience }) => {
    if (!experience) return null;

    return (
        <section id="experience" className="py-32 relative">
            <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Journey</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-text-primary mb-6">Experience</h3>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-primary before:to-transparent">
                    {experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-primary bg-bg-primary text-accent absolute left-0 md:left-1/2 md:-ml-5 shadow-[0_0_15px_var(--glow)] z-10 group-hover:scale-125 transition-transform duration-300">
                                <Briefcase size={16} />
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-8 rounded-[2.5rem] hover:border-accent/30 transition-all duration-300 glow-card">
                                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                    <div className="flex items-center gap-2 text-accent-secondary text-xs font-bold uppercase tracking-widest bg-accent-secondary/5 px-3 py-1 rounded-full">
                                        <Calendar size={12} />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-1 text-text-secondary text-xs">
                                        <MapPin size={12} />
                                        Remote / Hybrid
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-text-primary mb-2 group-hover:text-accent transition-colors">{exp.role}</h3>
                                <p className="text-accent font-bold mb-4">{exp.company}</p>

                                <p className="text-text-secondary text-sm leading-relaxed opacity-80">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

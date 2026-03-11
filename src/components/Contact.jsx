import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Connect</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-primary mb-6">Get In Touch</h3>
          <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-black text-text-primary mb-6">Let's build something <span className="text-accent">extraordinary</span>.</h3>
              <p className="text-text-secondary text-lg leading-relaxed opacity-80">
                Currently seeking new opportunities and collaborations. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={24} />, label: "Email", value: personalInfo.email, link: `mailto:${personalInfo.email}` },
                { icon: <MapPin size={24} />, label: "Location", value: "Chennai, India / Remote", link: "#" },
                { icon: <MessageSquare size={24} />, label: "Status", value: "Available for Hire", link: "#" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-6 glass p-6 rounded-3xl hover:bg-accent/5 hover:border-accent/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-text-primary font-bold">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 md:p-12 rounded-[3.5rem] relative glow-card"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-white/5 border border-white/5 rounded-3xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              <button className="group w-full relative h-[68px] bg-accent text-white font-black rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                  Send Message <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

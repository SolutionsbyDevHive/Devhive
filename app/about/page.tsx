"use client";

import { motion } from "framer-motion";
import { Users, Zap, Shield, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    { title: "Collaboration", description: "We believe in the power of the 'Hive' - working seamlessly together to build complex and scalable systems.", icon: <Users className="text-[#D19C5B]" size={24} /> },
    { title: "Efficiency", description: "Writing clean, optimized, and robust code. We cut the bloat to deliver pure performance.", icon: <Zap className="text-[#D19C5B]" size={24} /> },
    { title: "Reliability", description: "Engineering solutions that are secure, stable, and built to withstand the test of time.", icon: <Shield className="text-[#D19C5B]" size={24} /> },
    { title: "Passion", description: "We are deeply passionate about pushing boundaries and solving complex problems with modern tech.", icon: <Target className="text-[#D19C5B]" size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden relative">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-[#131821]/50 border border-white/5 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
            <span className="text-sm font-medium text-[#D19C5B] uppercase tracking-widest">Who We Are</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter text-white leading-[1.1]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D19C5B] to-[#E6ECF5]">Hive</span> Philosophy.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#E6ECF5]/70 leading-relaxed font-light">
            We are more than just a software development company. We are a collective of passionate engineers, designers, and innovators dedicated to crafting digital excellence.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative z-10">
        <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">Our Mission</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#D19C5B] to-transparent mb-8 rounded-full"></div>

              <div className="space-y-6 text-[#E6ECF5]/70 text-lg leading-relaxed">
                <p>
                  To empower forward-thinking brands by building robust, high-performance web applications, mobile apps, and custom software using the latest stack.
                </p>
                <p>
                  We bridge the gap between complex technical problems and elegant, scalable solutions. Our approach ensures that every project we deliver is not only visually stunning but structurally sound from the ground up, capable of handling enterprise-level traffic securely.
                </p>
              </div>

              <Link href="/portfolio" className="inline-flex items-center mt-10 text-[#D19C5B] font-bold hover:text-white transition-colors group">
                Explore our past work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="bg-[#0C0F14]/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-[#D19C5B]/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D19C5B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="p-6 bg-[#131821]/50 rounded-2xl border border-white/5 backdrop-blur-md text-center group-hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">15<span className="text-[#D19C5B]">+</span></h3>
                    <p className="text-sm uppercase tracking-wider text-[#E6ECF5]/60 font-semibold">Projects</p>
                  </div>
                  <div className="p-6 bg-[#131821]/50 rounded-2xl border border-white/5 backdrop-blur-md text-center group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">10<span className="text-[#D19C5B]">+</span></h3>
                    <p className="text-sm uppercase tracking-wider text-[#E6ECF5]/60 font-semibold">Engineers</p>
                  </div>
                  <div className="p-6 bg-[#131821]/50 rounded-2xl border border-white/5 backdrop-blur-md text-center group-hover:-translate-y-1 transition-transform duration-300 delay-100">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">99<span className="text-[#D19C5B]">%</span></h3>
                    <p className="text-sm uppercase tracking-wider text-[#E6ECF5]/60 font-semibold">Satisfaction</p>
                  </div>
                  <div className="p-6 bg-[#131821]/50 rounded-2xl border border-white/5 backdrop-blur-md text-center group-hover:-translate-y-1 transition-transform duration-300 delay-[800ms]">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">Auto<span className="text-[#D19C5B]">∞</span></h3>
                    <p className="text-sm uppercase tracking-wider text-[#E6ECF5]/60 font-semibold">Scaling Infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[#D19C5B] uppercase tracking-widest font-semibold text-sm mb-3">What Drives Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#0C0F14]/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-[#D19C5B]/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(209,156,91,0.1)]"
              >
                <div className="w-14 h-14 bg-[#131821] rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#D19C5B]/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D19C5B] transition-colors">{value.title}</h3>
                <p className="text-[#E6ECF5]/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

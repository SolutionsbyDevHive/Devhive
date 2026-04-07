"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp, Target, Zap, Layers, Users, Globe, ChevronLeft, ChevronRight, X } from "lucide-react";

const CarouselImage = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div 
      className="w-[280px] h-[180px] md:w-[450px] md:h-[300px] rounded-2xl overflow-hidden border border-white/10 shrink-0 group/img relative shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
      onClick={onClick}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-[#131821] animate-pulse rounded-2xl"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover group-hover/img:scale-105 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default function Portfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentSet, setCurrentSet] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images: string[], idx: number) => {
    setCurrentSet(images);
    setCurrentIndex(idx);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % currentSet.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + currentSet.length) % currentSet.length);
  };

  const projects = [
    {
  "title": "HomeSol Group",
  "link": "https://www.homesolindia.com",
  "category": "Proptech Platform",
  "goal": "Establish a digital presence as a trusted real estate tech partner, empowering transparent and informed property decisions.",
  "execution": [
  "Structured navigation for key divisions like Inframart, Tech, and Finance.",
  "Showcased authorized steel and cement dealerships to establish trust.",
  "Integrated services for digital marketing, CRM, and developer apps.",
  "Created clear pathways for loans, financing, and property transactions."
],
"results": [
  "Positioned the brand as a pioneering proptech leader.",
  "Streamlined communication for transparent and seamless property transactions.",
  "Delivered a platform ensuring clarity and efficiency in real estate."
],
  "images": [
    "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2FHS1.webp?alt=media&token=7c5bb5a3-1e9c-49a4-bd2c-989203449e11",
    "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2FHS2.webp?alt=media&token=4b5e1792-fda9-480d-a8f3-c8b9608a5583",
    "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2FHS3.webp?alt=media&token=124c6e22-9515-4a90-82c1-a28fba9c8ffe",
    "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2FHS4.webp?alt=media&token=cd6d7bb4-7e20-4824-8c09-9b0fb62d441e",
    "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2FHS5.webp?alt=media&token=8d3e7845-2984-4658-90db-912fa0d7ac51",
    "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2FHS6.webp?alt=media&token=fc3c2902-007e-421d-93ea-b30115dc7bda"
  ]
},
    {
      title: "PGC Chennai",
      link: "https://www.pgcchennai.com/",
      category: "Corporate Platform",
      goal: "Establish a credible digital presence and improve client acquisition through a professional online platform.",
      execution: [
        "Built a clean, authority-driven design to establish trust instantly",
        "Structured content to guide users toward key services",
        "Optimized for mobile responsiveness and fast load times",
        "Implemented SEO-ready architecture for discoverability"
      ],
      results: [
        "Increased user engagement through improved navigation flow",
        "Higher inquiry potential via clear service presentation",
        "Stronger brand perception among new visitors"
      ],
      images: [
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpgc1.webp?alt=media&token=67826136-b708-436d-8de9-090243758635",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpgc2.webp?alt=media&token=f658eda6-04ba-4610-b10e-0a1a11929c37",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpgc3.webp?alt=media&token=85235a46-84e5-4bed-82cf-91a469320354",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpgc4.webp?alt=media&token=9a015098-4808-45ae-83e4-ffc0a607371e"
      ]
    },
    {
      title: "Mactic Tools",
      link: "https://mactictools.com",
      category: "Product Showcase",
      goal: "Create a scalable product showcase platform to support sales and customer exploration.",
      execution: [
        "Developed a structured product catalog system",
        "Simplified product discovery with intuitive categorization",
        "Optimized performance for handling multiple product pages",
        "Built with scalability to support inventory growth"
      ],
      results: [
        "Faster product discovery leading to improved user retention",
        "Reduced friction in customer decision-making",
        "Platform ready to support increased product volume and traffic"
      ],
      images: [
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fmactic1.webp?alt=media&token=03d1175a-7071-48cb-ba67-123fd4ce361b",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fmactic2.webp?alt=media&token=43f94c67-29f0-486a-b351-5ae614376daf",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fmactic3.webp?alt=media&token=b6d1c75d-c2a3-4479-b2ef-c7549a95efe0",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fmactic4.webp?alt=media&token=13a1bcac-20ab-4929-b0f6-b9051328743f"
      ]
    },
    {
      title: "Dodia Brothers Metal",
      link: "https://dodiabrothersmetal.com",
      category: "B2B Platform",
      goal: "Modernize brand presence and expand market reach beyond traditional channels.",
      execution: [
        "Designed a strong, industrial-focused visual identity",
        "Highlighted capabilities and expertise through structured content",
        "Built a responsive, SEO-friendly platform",
        "Reinforced trust through clear messaging and layout"
      ],
      results: [
        "Enhanced digital credibility for B2B interactions",
        "Improved visibility in online searches",
        "Increased potential for inbound business inquiries"
      ],
      images: [
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fdb1.webp?alt=media&token=02398b3b-01e5-4006-9913-6433e3b6a106",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fdb2.webp?alt=media&token=9926ef94-1369-45ed-bee9-dc4ed3044359",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fdb3.webp?alt=media&token=c8b023b4-b36a-419f-8079-7c0d3f861d36",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fdb4.webp?alt=media&token=e5ed31db-64c2-4409-a0fd-6c90debd5912"
      ]
    },
    {
      title: "PI Beyond",
      link: "https://www.pibeyond.com/",
      category: "Brand Innovation",
      goal: "Position the brand as modern, innovative, and future-focused.",
      execution: [
        "Delivered a sleek, contemporary UI aligned with innovation",
        "Built a narrative-driven structure to communicate value",
        "Integrated interactive elements to increase engagement",
        "Optimized for performance and scalability"
      ],
      results: [
        "Stronger brand positioning in competitive markets",
        "Increased engagement through improved user experience",
        "Better alignment between brand identity and digital presence"
      ],
      images: [
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpnb1.webp?alt=media&token=5b7bec31-b3f0-41a5-9b63-a57b70d44e77",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpnb2.webp?alt=media&token=26bdbff1-fc4f-4cc7-843c-2571d412fa25",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpnb3.webp?alt=media&token=5f30de34-8600-4fcd-82f8-c6af2b01e04f",
        "https://firebasestorage.googleapis.com/v0/b/devhive-499e2.firebasestorage.app/o/assets%2Fimages%2Fpnb4.webp?alt=media&token=102be356-fedb-4a6f-9a9e-88ad3f2eb75d"
      ]
    }
  ];

  const frameworks = [
    {
      title: "Conversion Rate Optimization",
      desc: "Clear CTAs and structured layouts designed to increase inquiries and leads.",
      icon: <Target className="w-5 h-5 text-white" />
    },
    {
      title: "User Engagement",
      desc: "Improved session duration and reduced bounce rates through better UX.",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      title: "Lead Generation",
      desc: "Websites structured to convert visitors into qualified business inquiries.",
      icon: <TrendingUp className="w-5 h-5 text-white" />
    },
    {
      title: "Performance Metrics",
      desc: "Fast-loading, mobile-optimized platforms to maximize retention.",
      icon: <Zap className="w-5 h-5 text-white" />
    },
    {
      title: "Scalability",
      desc: "Infrastructure designed to support traffic growth and business expansion.",
      icon: <Layers className="w-5 h-5 text-white" />
    }
  ];

  const reasons = [
    "We focus on business outcomes, not just design",
    "We build conversion-oriented, not template-based websites",
    "We understand how users behave — and design accordingly",
    "We deliver platforms that are ready to scale from day one"
  ];

  return (
    <div className="flex-1 py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
      
      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0F14]/90 backdrop-blur-xl"
            onClick={closeGallery}
          >
            <button onClick={closeGallery} className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-[110]">
              <X size={24} />
            </button>

            <button onClick={prevImage} className="absolute left-4 md:left-12 text-white/70 hover:text-white p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors backdrop-blur-md z-[110]">
              <ChevronLeft size={32} />
            </button>

            <button onClick={nextImage} className="absolute right-4 md:right-12 text-white/70 hover:text-white p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors backdrop-blur-md z-[110]">
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[90vw] h-[85vh] max-w-6xl flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentSet[currentIndex]} 
                alt="Gallery Preview"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 select-none"
              />
            </motion.div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-[110]">
              {currentSet.map((_, i) => (
                <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#D19C5B]' : 'w-2 bg-white/30'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#131821]/50 border border-white/5 rounded-full px-5 py-2 mb-6 backdrop-blur-md">
            <span className="text-sm font-medium text-[#D19C5B] uppercase tracking-widest">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white leading-tight">
            High-Impact Web Development That <span className="text-[#D19C5B]">Drives Business Results</span>
          </h1>
          <p className="text-xl text-[#E6ECF5]/80 font-light leading-relaxed mb-6 block">
            We don’t just build websites — we build digital assets that directly contribute to business growth.
          </p>
          <p className="text-lg text-[#E6ECF5]/60 font-light leading-relaxed max-w-3xl mx-auto">
            Our focus is clear: convert ideas into structured, high-performing platforms that generate leads, improve credibility, and support revenue. Every project we deliver is aligned with measurable business outcomes.
          </p>
        </motion.div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
          <Globe className="mr-3 text-[#D19C5B]" /> Selected Case Studies
        </h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative rounded-[2.5rem] overflow-hidden bg-[#0A0D14] border border-white/10 group hover:border-white/20 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* Top Section: The Carousel Hero */}
              <div className="h-64 sm:h-80 md:h-[400px] relative w-full overflow-hidden border-b border-white/5 bg-[#080B0E]">
                {/* Edge Fades for the carousel */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0A0D14] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0A0D14] to-transparent z-20 pointer-events-none" />

                <div className="absolute top-1/2 -translate-y-1/2 w-full">
                  <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                    className="flex w-max gap-6 px-6"
                  >
                    {[...project.images, ...project.images, ...project.images, ...project.images].map((img, i) => (
                      <CarouselImage 
                        key={i} 
                        src={img} 
                        alt={`Showcase ${i}`} 
                        onClick={() => openGallery(project.images, i % project.images.length)}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Bottom Section: Content Area */}
              <div className="p-8 md:p-12 lg:p-16 relative z-10 w-full bg-gradient-to-br from-[#0C1018] to-[#0A0D14]">
                <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#D19C5B]/5 blur-[120px] pointer-events-none rounded-full" />

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                  {/* Left Column: Title & Goal */}
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-4 py-1.5 bg-[#D19C5B]/10 border border-[#D19C5B]/30 rounded-full text-[#D19C5B] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(209,156,91,0.1)]">
                        {project.category}
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">{project.title}</h3>
                      <p className="text-[#E6ECF5]/60 text-lg leading-relaxed font-light mb-10">
                        {project.goal}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-[#D19C5B] font-medium transition-colors group/link w-max text-lg"
                    >
                      View Live Project
                      <span className="ml-4 p-3 rounded-full bg-white/5 border border-white/10 group-hover/link:bg-[#D19C5B]/10 group-hover/link:border-[#D19C5B]/30 transition-all shadow-lg">
                        <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>

                  {/* Right Column: Execution & Results */}
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    <div>
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8 flex items-center">
                        <span className="w-8 h-px bg-white/20 mr-4" /> Execution
                      </h4>
                      <ul className="space-y-6">
                        {project.execution.map((ex, i) => (
                          <li key={i} className="flex items-start">
                            <div className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#D19C5B] shadow-[0_0_8px_rgba(209,156,91,0.8)]" />
                            <span className="ml-4 text-[#E6ECF5]/70 font-light leading-relaxed">{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8 flex items-center">
                        <span className="w-8 h-px bg-white/20 mr-4" /> Results
                      </h4>
                      <ul className="space-y-6">
                        {project.results.map((rs, i) => (
                          <li key={i} className="flex items-start bg-white/[0.02] p-4 rounded-xl border border-white/5 shadow-sm hover:bg-white/[0.04] transition-colors">
                            <TrendingUp className="shrink-0 mt-0.5 w-5 h-5 text-emerald-400" />
                            <span className="ml-4 text-white font-medium leading-relaxed">{rs}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              {/* Decorative Architectural Dot Grid */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '32px 32px' }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Measurable Impact Framework */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-24 py-20 px-8 md:px-12 rounded-[2.5rem] bg-[#E6ECF5] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* White Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #0C0F14 1px, transparent 1px), linear-gradient(to bottom, #0C0F14 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6ECF5]/80 via-transparent to-[#E6ECF5] pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#0C0F14]/5 border border-[#0C0F14]/10 rounded-full px-5 py-2 mb-6 backdrop-blur-md">
            <span className="text-sm font-bold text-[#D19C5B] uppercase tracking-widest">Impact</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0C0F14] mb-6 tracking-tight">Measurable Impact Framework</h2>
          <p className="text-lg text-[#0C0F14]/70 max-w-2xl mx-auto block font-medium">
            While outcomes vary by client and industry, our websites are built to consistently improve key performance indicators:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {frameworks.map((fw, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-xl border border-[#0C0F14]/10 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-[#0C0F14] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-[#D19C5B] transition-colors duration-300">
                {fw.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0C0F14] mb-3 tracking-tight">{fw.title}</h3>
              <p className="text-[#0C0F14]/70 text-sm leading-relaxed font-medium">{fw.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us & Closing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gradient-to-br from-[#131821] to-[#0C0F14] rounded-3xl p-8 md:p-12 lg:p-16 border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(209,156,91,0.05)_0%,transparent_50%)] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8">Why Clients Choose Us</h2>
          <ul className="space-y-5">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex items-center text-[#E6ECF5]/90">
                <CheckCircle2 className="w-5 h-5 text-[#D19C5B] mr-4 shrink-0" />
                <span className="text-lg font-light">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
            Your website should be your best salesperson.
          </h3>
          <p className="text-[#E6ECF5]/70 mb-6 font-light leading-relaxed block">
            If your current website is not generating leads, not reflecting your brand, or not supporting your growth — it’s underperforming. We help businesses fix that.
          </p>
          <div className="text-white font-medium text-lg border-l-2 border-[#D19C5B] pl-4 py-1 italic">
            From strategy to execution, we deliver websites that are built to perform, convert, and scale.
          </div>
        </div>
      </motion.div>

    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Smartphone, Cpu, CheckCircle, Zap, Globe, Shield, Rocket, Users, Target, Activity, Check, X, Send } from "lucide-react";
import HexagonBackground from "@/components/HexagonBackground";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", requirements: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handlePlanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addDoc(collection(db, "plan_inquiries"), {
        ...formData,
        plan: selectedPlan,
        createdAt: serverTimestamp()
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", requirements: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter",
    "Python", "Node.js", "GraphQL", "AWS", "AI/ML Integration"
  ];

  // const stats = [
  //   { label: "Successful Projects", value: "150+" },
  //   { label: "Global Clients", value: "45+" },
  //   { label: "Team Members", value: "30+" },
  //   { label: "Client Rate", value: "99%" },
  // ];

  const process = [
    { num: "01", title: "Discovery", desc: "We analyze your requirements, target audience, and business goals to formulate a solid strategy." },
    { num: "02", title: "Design", desc: "Our UI/UX team creates wireframes and high-fidelity prototypes to visualize the end product." },
    { num: "03", title: "Development", desc: "Using agile methodologies, we build scalable and robust solutions using modern tech stacks." },
    { num: "04", title: "Deployment", desc: "Thorough testing and seamless deployment to ensure a flawless launch and post-launch support." },
  ];

  const testimonials = [
    {
      text: "DevHive transformed our initial concept into a powerful digital platform. Their attention to detail and technical expertise is unmatched.",
      author: "Abhi Shah",
      role: "CTO, HomeSol Digital"
    },
    {
      text: "Working with them was a breeze. They understood our complex requirements and delivered an enterprise-grade mobile app ahead of schedule.",
      author: "Darsh Dodia",
      role: "CEO, Dodia Brothers"
    },
    {
      text: "The web application they built for us not only looks stunning but handles our massive traffic loads effortlessly. Highly recommended team.",
      author: "Vanshika",
      role: "Business Head, PGC Chennai"
    }
  ];

  const features = [
    {
      title: "Web Development",
      description: "Scalable, high-performance web applications built with modern frameworks and robust backend architectures.",
      icon: <Code size={24} className="text-[#D19C5B]" />,
      colSpan: "md:col-span-2",
      delay: 0.1,
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform native mobile experiences.",
      icon: <Smartphone size={24} className="text-[#D19C5B]" />,
      colSpan: "md:col-span-1",
      delay: 0.2,
    },
    {
      title: "Custom Software",
      description: "Tailored enterprise solutions engineered to digitize workflows and solve complex technical challenges.",
      icon: <Cpu size={24} className="text-[#D19C5B]" />,
      colSpan: "md:col-span-1",
      delay: 0.3,
    },
    {
      title: "AI Integration",
      description: "Leverage machine learning and generative AI to automate your systems.",
      icon: <Zap size={24} className="text-[#D19C5B]" />,
      colSpan: "md:col-span-1",
      delay: 0.4,
    },
    {
      title: "Global Scale",
      description: "Cloud-native architectures engineered for massive concurrency.",
      icon: <Globe size={24} className="text-[#D19C5B]" />,
      colSpan: "md:col-span-1",
      delay: 0.5,
    }
  ];

  const pricingTiers = [
    {
      id: "tier_beginner",
      title: "Beginner / Base Plan",
      subtitle: "Essential presence for individuals and startups",
      price: "₹999",
      billingPeriod: "/ month",
      setupFee: "Excl. Domain Cost",
      deliverySla: "7 Days",
      specs: [
        { label: "Pages", value: "Up to 5" },
        { label: "Backend", value: "None" },
        { label: "Architecture", value: "Template-based" }
      ],
      features: [
        "Home, About, T&C, Contact + 1 Custom Page",
        "Responsive Design",
        "Basic SEO Optimization",
        "Email Support",
        "Resource Gathering Consultation"
      ],
      isFeatured: false,
      ctaText: "Start Basic"
    },
    {
      id: "tier_mid_level",
      title: "Mid-Level Projects",
      subtitle: "Full-scale E-commerce & Booking solutions",
      price: "₹2,100",
      billingPeriod: "/ month",
      setupFee: "Excl. Domain Cost",
      deliverySla: "14 Days",
      specs: [
        { label: "Pages", value: "Up to 7" },
        { label: "Backend", value: "Basic+" },
        { label: "Architecture", value: "Hybrid Logic" }
      ],
      features: [
        "Home, Product, Cart, Checkout, Profile, etc.",
        "Payment Gateway Integration",
        "Appointment Booking Engine",
        "Product Display Dashboard",
        "User Authentication",
        "Priority Email Support"
      ],
      isFeatured: true,
      ctaText: "Launch Business"
    },
    {
      id: "tier_custom",
      title: "Custom Plan",
      subtitle: "Bespoke enterprise-grade infrastructure",
      price: "Custom",
      billingPeriod: "Project-based",
      setupFee: "Tailored",
      deliverySla: "Flexible",
      specs: [
        { label: "Pages", value: "Unlimited" },
        { label: "Backend", value: "Scalable Systems" },
        { label: "Architecture", value: "Fully Custom" }
      ],
      features: [
        "Custom Storage & User Management",
        "Dedicated Account Manager",
        "Scalable Cloud Infrastructure",
        "API Third-party Integrations",
        "24/7 Priority Support"
      ],
      isFeatured: false,
      ctaText: "Get a Quote"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#0C0F14] overflow-hidden">
      {/* Redesigned Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Sleek Dark Background with Minimal Accents */}
        <div className="absolute inset-0 bg-[#0C0F14]"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Subtle Radial Gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D19C5B]/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Elegant Hexagon Background */}
        <HexagonBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-[#131821]/50 border border-white/5 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D19C5B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D19C5B]"></span>
              </span>
              <span className="text-sm font-medium text-[#D19C5B] uppercase tracking-widest">Enterprise Software Agency</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
              We Build <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6ECF5] to-white/40">
                Digital Realities
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#E6ECF5]/60 mb-12 max-w-2xl font-light leading-relaxed">
              Transforming ambitious ideas into state-of-the-art web and mobile applications with uncompromising quality and speed.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-[#D19C5B] text-[#0C0F14] rounded-full font-bold text-lg hover:bg-[#E6B981] transition-all transform hover:-translate-y-1 shadow-[0_15px_30px_rgba(209,156,91,0.2)] flex items-center justify-center group"
              >
                Let&apos;s Talk
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center group"
              >
                Our Portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Bar
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-32 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <h4 className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-sm uppercase tracking-wider text-[#E6ECF5]/50 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 bg-[#0C0F14] border-y border-white/5 overflow-hidden relative">
        <div className="absolute left-0 w-48 h-full bg-gradient-to-r from-[#0C0F14] to-transparent z-10 top-0 pointer-events-none" />
        <div className="absolute right-0 w-48 h-full bg-gradient-to-l from-[#0C0F14] to-transparent z-10 top-0 pointer-events-none" />

        <div className="flex space-x-16 w-max animate-scroller opacity-70 hover:opacity-100 transition-opacity">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center space-x-3">
              <CheckCircle size={18} className="text-[#D19C5B]/40" />
              <span className="text-xl font-medium tracking-wide text-white/50">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section (Bento Grid) */}
      <section className="py-32 relative z-10 bg-[#0C0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-[#D19C5B] uppercase tracking-widest font-semibold text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
              Architectural Brilliance & Cutting-Edge Tech.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: feature.delay }}
                className={`${feature.colSpan} relative group rounded-3xl overflow-hidden bg-[#E6ECF5] border border-[#E6ECF5]/50 hover:border-[#D19C5B] transition-all duration-500 shadow-xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D19C5B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#0C0F14] border border-[#0C0F14]/10 flex items-center justify-center shadow-lg group-hover:bg-[#0C0F14]/90 transition-colors duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#0C0F14] group-hover:text-[#D19C5B] transition-colors">{feature.title}</h3>
                    <p className="text-[#0C0F14]/70 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#0C0F14] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-[#D19C5B] uppercase tracking-widest font-semibold text-sm mb-3">Our Process</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              How We Deliver Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line (hidden on mobile) */}
                {index !== process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-[1px] bg-white/10" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#131821] border border-white/10 flex items-center justify-center mb-8 shadow-xl">
                    <span className="text-2xl font-black text-[#D19C5B]">{step.num}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-[#E6ECF5]/60 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-[#0C0F14] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D19C5B]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-[#D19C5B] uppercase tracking-widest font-semibold text-sm mb-3">Transparent Pricing</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Invest in Your Digital Future
            </h3>
            <p className="mt-4 text-[#E6ECF5]/60 max-w-2xl mx-auto">Straightforward tiers designed for every stage of your business growth.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 h-full ${tier.isFeatured
                  ? 'bg-gradient-to-br from-[#1A2235] to-[#0A0D14] border-2 border-[#D19C5B]/50 shadow-[0_0_50px_rgba(209,156,91,0.15)] lg:scale-105 z-10'
                  : 'bg-[#131821]/40 border border-white/5 hover:border-white/10 hover:bg-[#131821]/60'
                  }`}>

                  {tier.isFeatured && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#D19C5B] text-[#0C0F14] text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{tier.title}</h4>
                    <p className="text-[#E6ECF5]/50 text-sm h-10">{tier.subtitle}</p>
                  </div>

                  {/* <div className="mb-8 flex items-end">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-[#E6ECF5]/40 ml-2 mb-1 font-medium">{tier.billingPeriod}</span>
                  </div> */}

                  <div className="mb-8 space-y-4">
                    <div className="bg-[#0C0F14]/50 rounded-2xl p-4 border border-white/5 space-y-3">
                      {tier.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-[#E6ECF5]/50">{spec.label}</span>
                          <span className="text-white font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-sm px-2">
                      <span className="text-[#E6ECF5]/50 flex items-center"><Zap size={14} className="mr-1.5 text-[#D19C5B]" /> Delivery</span>
                      <span className="text-emerald-400 font-medium">{tier.deliverySla}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">What's Included</p>
                    <ul className="space-y-4 mb-10">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={18} className="text-[#D19C5B] shrink-0 mt-0.5" />
                          <span className="text-[#E6ECF5]/80 text-sm ml-3 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(tier.title)}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${tier.isFeatured
                      ? 'bg-[#D19C5B] text-[#0C0F14] hover:bg-[#E6B981] shadow-lg hover:shadow-xl'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                      }`}>
                    {tier.ctaText}
                  </button>

                  <p className="text-center text-[#E6ECF5]/30 text-xs mt-4">
                    Setup Fee: <span className="text-[#E6ECF5]/50">{tier.setupFee}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#0C0F14] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#D19C5B]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-[#D19C5B] uppercase tracking-widest font-semibold text-sm mb-3">Client Feedback</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Trusted by Innovators
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#131821]/40 backdrop-blur-sm border border-white/5 p-10 rounded-3xl relative"
              >
                <div className="mb-8">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-[#D19C5B]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#E6ECF5]/80 text-lg leading-relaxed italic">
                    &quot;{test.text}&quot;
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold">{test.author}</h4>
                  <p className="text-[#D19C5B] text-sm">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#0C0F14]">
        <div className="absolute inset-0 bg-[#D19C5B]/5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-[#D19C5B]/50 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-[#E6ECF5]/60 mb-10 max-w-2xl mx-auto font-light">
              Partner with DevHive to transform your ideas into groundbreaking digital products. Let&apos;s engineer something remarkable.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-12 py-5 bg-[#D19C5B] text-[#0C0F14] rounded-full font-bold text-xl hover:bg-[#E6B981] transition-all transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(209,156,91,0.2)] items-center group"
            >
              Start Your Project <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Plan Inquiry Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0F14]/80 backdrop-blur-md p-4"
            onClick={() => {
              if (status !== 'loading' && status !== 'success') {
                setSelectedPlan(null);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-2xl bg-[#080B0E] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D19C5B]/5 to-transparent pointer-events-none"></div>

              {status !== 'success' && (
                <button
                  onClick={() => setSelectedPlan(null)}
                  disabled={status === 'loading'}
                  className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 p-2 rounded-full transition-colors disabled:opacity-50 z-10"
                >
                  <X size={20} />
                </button>
              )}

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="flex flex-col items-center justify-center text-center py-10 relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                      className="w-24 h-24 bg-gradient-to-br from-[#D19C5B] to-[#E6B981] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(209,156,91,0.4)] mb-8 relative"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border-2 border-[#D19C5B]"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-12 h-12 text-[#0C0F14]">
                        <motion.path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }} />
                      </svg>
                    </motion.div>
                    <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl font-black text-white mb-4">Request Sent</motion.h3>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-[#E6ECF5]/70 mb-8 max-w-sm">
                      Thank you for your interest in the <span className="font-bold text-white">{selectedPlan}</span>. A DevHive representative will contact you shortly to finalize details.
                    </motion.p>
                    <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} onClick={() => { setStatus('idle'); setSelectedPlan(null); }} className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-semibold transition-all">Close</motion.button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, filter: "blur(5px)" }} transition={{ duration: 0.3 }} className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Configure Your Plan</h3>
                    <p className="text-[#E6ECF5]/60 text-sm mb-8">You have selected the <strong className="text-[#D19C5B]">{selectedPlan}</strong>. Fill out the details below so we can start immediately.</p>

                    {status === "error" && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center text-red-400 text-sm">
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <form onSubmit={handlePlanSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Name</label>
                          <input type="text" required name="name" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full bg-[#131821] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D19C5B]/70 text-white placeholder-white/20" placeholder="User Name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Email</label>
                          <input type="email" required name="email" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full bg-[#131821] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D19C5B]/70 text-white placeholder-white/20" placeholder="example@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Phone</label>
                          <input type="text" required name="phone" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full bg-[#131821] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D19C5B]/70 text-white placeholder-white/20" placeholder="+91 9000900000" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Company</label>
                          <input type="text" name="company" value={formData.company} onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))} className="w-full bg-[#131821] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D19C5B]/70 text-white placeholder-white/20" placeholder="Example Corp." />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Requirements (Optional)</label>
                        <textarea rows={3} name="requirements" value={formData.requirements} onChange={(e) => setFormData(p => ({ ...p, requirements: e.target.value }))} className="w-full bg-[#131821] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D19C5B]/70 text-white resize-none placeholder-white/20" placeholder="Any specific features or integrations needed..."></textarea>
                      </div>
                      <button type="submit" disabled={status === 'loading'} className="w-full bg-white text-[#0C0F14] rounded-xl font-bold py-4 mt-2 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex justify-center items-center group">
                        <span className="flex items-center space-x-2">
                          <span>{status === 'loading' ? 'Processing...' : 'Submit Request'}</span>
                          {status !== 'loading' && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                        </span>
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    details: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus("success");
      setFormData({ name: "", email: "", company: "", budget: "", details: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex-1 py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#131821]/50 border border-white/5 rounded-full px-5 py-2 mb-6 backdrop-blur-md">
            <span className="text-sm font-medium text-[#D19C5B] uppercase tracking-widest">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">Let's Build Together</h1>
          <p className="text-xl text-[#E6ECF5]/70 font-light leading-relaxed">
            Have a project in mind? We'd love to discuss how DevHive can bring your vision to life with cutting-edge technology.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 space-y-8 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0C0F14]/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden h-full"
          >
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D19C5B]/10 blur-[80px] rounded-full"></div>

            <h3 className="text-3xl font-bold mb-10 text-white tracking-tight">Direct Connect</h3>
            <div className="space-y-10 relative z-10">
              {/* Email Section */}
              <a
                href="mailto:solutionsbydevhive@gmail.com"
                className="flex items-start space-x-6 group cursor-pointer"
              >
                <div className="p-4 bg-[#131821] rounded-2xl text-[#D19C5B] border border-white/5 group-hover:scale-110 group-hover:bg-[#D19C5B] group-hover:text-[#0C0F14] transition-all duration-300 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#E6ECF5]/50 mb-1 uppercase tracking-wider font-semibold">Email Us</p>
                  <p className="font-medium text-lg text-white group-hover:text-[#D19C5B] transition-colors">solutionsbydevhive@gmail.com</p>
                </div>
              </a>

              {/* Call Section */}
              <div className="flex flex-col space-y-6">
                <a
                  href="tel:+918879693624"
                  className="flex items-start space-x-6 group cursor-pointer"
                >
                  <div className="p-4 bg-[#131821] rounded-2xl text-[#D19C5B] border border-white/5 group-hover:scale-110 group-hover:bg-[#D19C5B] group-hover:text-[#0C0F14] transition-all duration-300 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#E6ECF5]/50 mb-1 uppercase tracking-wider font-semibold">Call Us</p>
                    <p className="font-medium text-lg text-white group-hover:text-[#D19C5B] transition-colors">+91 88796 93624</p>
                  </div>
                </a>
                {/* Optional second number link to keep the UI clean */}
                <a href="tel:+919082512330" className="pl-[80px] font-medium text-lg text-white/70 hover:text-[#D19C5B] transition-colors -mt-4">
                  +91 90825 12330
                </a>
              </div>

              {/* Instagram Section */}
              <a
                href="https://instagram.com/devhive_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-6 group cursor-pointer"
              >
                <div className="p-4 bg-[#131821] rounded-2xl text-[#D19C5B] border border-white/5 group-hover:scale-110 group-hover:bg-[#D19C5B] group-hover:text-[#0C0F14] transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </div>
                <div>
                  <p className="text-sm text-[#E6ECF5]/50 mb-1 uppercase tracking-wider font-semibold">Follow Us</p>
                  <p className="font-medium text-lg text-white group-hover:text-[#D19C5B] transition-colors">@devhive_solutions</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* High-End Contact Form */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#131821]/40 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D19C5B]/5 to-transparent pointer-events-none"></div>

                {status === "error" && (
                  <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center text-red-400">
                    <div className="w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center mr-3 shrink-0 font-bold">!</div>
                    <p>Something went wrong. Please try again or email us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="First Name Last Name"
                      className="w-full bg-[#0C0F14]/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D19C5B]/70 focus:bg-[#0C0F14]/80 focus:ring-4 focus:ring-[#D19C5B]/10 transition-all duration-300 text-white placeholder-white/20 shadow-inner"
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sam@example.com"
                      className="w-full bg-[#0C0F14]/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D19C5B]/70 focus:bg-[#0C0F14]/80 focus:ring-4 focus:ring-[#D19C5B]/10 transition-all duration-300 text-white placeholder-white/20 shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-[#0C0F14]/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D19C5B]/70 focus:bg-[#0C0F14]/80 focus:ring-4 focus:ring-[#D19C5B]/10 transition-all duration-300 text-white placeholder-white/20 shadow-inner"
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Budget Range</label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#0C0F14]/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D19C5B]/70 focus:bg-[#0C0F14]/80 focus:ring-4 focus:ring-[#D19C5B]/10 transition-all duration-300 text-white appearance-none shadow-inner"
                      >
                        <option className="bg-[#0C0F14] text-white" value="">Select Range</option>
                        <option className="bg-[#0C0F14] text-white" value="small">&lt; ₹5000</option>
                        <option className="bg-[#0C0F14] text-white" value="medium">₹5000 - ₹10000</option>
                        <option className="bg-[#0C0F14] text-white" value="large">₹10000 - ₹50000</option>
                        <option className="bg-[#0C0F14] text-white" value="enterprise">&gt; ₹50000</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-10 relative z-10 group">
                  <label className="text-sm font-semibold text-[#E6ECF5]/60 uppercase tracking-widest pl-1">Project Details</label>
                  <textarea
                    rows={4}
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about the project architecture, goals, and timeline..."
                    className="w-full bg-[#0C0F14]/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D19C5B]/70 focus:bg-[#0C0F14]/80 focus:ring-4 focus:ring-[#D19C5B]/10 transition-all duration-300 text-white placeholder-white/20 resize-none shadow-inner"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full relative overflow-hidden bg-white text-[#0C0F14] rounded-2xl font-black text-xl py-5 transition-all group hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>{status === "loading" ? "Sending..." : "Submit Request"}</span>
                    {status !== "loading" && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D19C5B] to-[#E6B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="bg-[#131821]/40 backdrop-blur-2xl p-12 md:p-16 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col items-center justify-center text-center h-[700px] w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D19C5B]/5 to-transparent pointer-events-none"></div>

                {/* Checkmark Animation Container */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-28 h-28 bg-gradient-to-br from-[#D19C5B] to-[#E6B981] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(209,156,91,0.4)] mb-8 z-10 relative"
                >
                  {/* Expanding ring effect */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-2 border-[#D19C5B]"
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-14 h-14 text-[#0C0F14]"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    />
                  </svg>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-black text-white mb-6 z-10 tracking-tight"
                >
                  Message Received
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-xl text-[#E6ECF5]/70 font-light mb-12 max-w-md z-10 leading-relaxed"
                >
                  Thank you for reaching out! A DevHive representative will review your details and get back to you shortly.
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  onClick={() => setStatus("idle")}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-semibold transition-all z-10 backdrop-blur-md flex items-center space-x-2 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span>Send Another Request</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

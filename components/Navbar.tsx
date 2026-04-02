"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0C0F14]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with White Background Treatment */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white  rounded-xl text-[#0C0F14] shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo/2.png"
                alt="DevHive Logo"
                width={32}
                height={32}
                className="w-12 h-12 object-contain mix-blend-multiply"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              Dev<span className="text-[#D19C5B]">Hive</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-white/5 border border-white/5 rounded-full px-2 py-1.5 backdrop-blur-md">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-[#D19C5B]/10 border border-[#D19C5B]/20 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-[#D19C5B]" : "text-[#E6ECF5]/70 hover:text-white"}`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="ml-6 bg-[#D19C5B] text-[#0C0F14] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#E6B981] transition-all transform hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(209,156,91,0.2)]"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0C0F14]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-semibold transition-all ${pathname === link.href
                    ? "bg-[#D19C5B]/10 text-[#D19C5B] border border-[#D19C5B]/20"
                    : "text-white/70 hover:bg-white/5 hover:text-white border border-transparent"
                    }`}
                >
                  {link.name}
                  {pathname === link.href && <ArrowRight size={18} />}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-white/5">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-[#D19C5B] text-[#0C0F14] px-6 py-4 rounded-2xl font-bold text-lg hover:bg-[#E6B981] transition-all"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

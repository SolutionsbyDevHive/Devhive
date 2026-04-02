import Link from "next/link";
import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#0C0F14]/5 bg-[#E6ECF5] pt-16 pb-8 overflow-hidden">
      {/* Dark Hex Grid Background inside Light Footer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='69.282' viewBox='0 0 40 69.282'%3E%3Cpath d='M40 17.32l-20 11.547L0 17.32V-5.774l20-11.548 20 11.548V17.32zm0 46.188l-20 11.548-20-11.548V40.414L20 28.867l20 11.547v23.094z' fill='none' stroke='%230C0F14' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundSize: '40px 69.282px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 inline-flex items-center gap-3 group">
              <div className=" text-[#0C0F14] shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/3.png"
                  alt="DevHive Logo"
                  width={70}
                  height={20}
                  className="w-70 h-20 object-contain mix-blend-multiply"
                />
              </div>
              {/* <span className="text-3xl font-black tracking-tighter text-white">
                Dev<span className="text-[#D19C5B]">Hive</span>
              </span> */}
            </Link>
            <p className="text-[#0C0F14]/70 max-w-sm mt-4 text-sm leading-relaxed">
              Building the future of digital experiences with high-performance software, modern web apps, and innovative mobile solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 glass-panel-light rounded-full text-[#0C0F14]/80 hover:text-[#D19C5B] transition-colors hover:border-[#D19C5B]/50 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="p-2 glass-panel-light rounded-full text-[#0C0F14]/80 hover:text-[#D19C5B] transition-colors hover:border-[#D19C5B]/50 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="p-2 glass-panel-light rounded-full text-[#0C0F14]/80 hover:text-[#D19C5B] transition-colors hover:border-[#D19C5B]/50 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#0C0F14]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#0C0F14]/70 hover:text-[#D19C5B] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-[#0C0F14]/70 hover:text-[#D19C5B] text-sm transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-[#0C0F14]/70 hover:text-[#D19C5B] text-sm transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-[#0C0F14]/70 hover:text-[#D19C5B] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#0C0F14]">Contact Us</h4>
            <ul className="space-y-4">
              {/* Email Link */}
              <li>
                <a
                  href="mailto:solutionsbydevhive@gmail.com"
                  className="flex items-center text-[#0C0F14]/70 text-sm hover:text-[#D19C5B] transition-colors duration-200"
                >
                  <Mail size={16} className="mr-3 text-[#D19C5B]" />
                  solutionsbydevhive@gmail.com
                </a>
              </li>

              {/* Phone Numbers */}
              <li className="space-y-3">
                <a
                  href="tel:+918879693624"
                  className="flex items-center text-[#0C0F14]/70 text-sm hover:text-[#D19C5B] transition-colors duration-200"
                >
                  <PhoneCall size={16} className="mr-3 text-[#D19C5B]" />
                  +91 88796 93624
                </a>

                {/* Second Phone Number - keeping alignment clean */}
                <a
                  href="tel:+919082512330"
                  className="flex items-center text-[#0C0F14]/70 text-sm pl-7 hover:text-[#D19C5B] transition-colors duration-200"
                >
                  +91 90825 12330
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0C0F14]/15 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#0C0F14]/50 text-xs">
            &copy; {new Date().getFullYear()} DevHive Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-[#0C0F14]/50 hover:text-[#D19C5B] text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[#0C0F14]/50 hover:text-[#D19C5B] text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

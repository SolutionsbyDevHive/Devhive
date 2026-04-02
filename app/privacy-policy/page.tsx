"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "April 2, 2026";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#0C0F14] overflow-hidden">
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-[#131821]/50 border border-white/5 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
            <Shield size={16} className="text-[#D19C5B]" />
            <span className="text-sm font-medium text-[#D19C5B] uppercase tracking-widest">Legal</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter text-white">
            Privacy Policy
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[#E6ECF5]/50 text-lg uppercase tracking-wider font-medium">
            Last Updated: {lastUpdated}
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#131821]/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-[#E6ECF5]/70 prose-a:text-[#D19C5B] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
            <p>
              At DevHive Solutions ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, engage with our services, or interact with us.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-[#E6ECF5]/70">
              <li><strong>Contact Data:</strong> Name, email address, phone number, and company details.</li>
              <li><strong>Communication Data:</strong> Messages, query details, and project requirements submitted through our contact forms.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage patterns automatically collected via cookies and similar tracking technologies.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">2. How We Use Your Information</h2>
            <p>
              We process your personal information for a variety of business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-[#E6ECF5]/70">
              <li>To provide, operate, and maintain our website and agency services.</li>
              <li>To communicate with you, respond to inquiries, and furnish project proposals or quotes.</li>
              <li>To improve, personalize, and expand our website's user experience.</li>
              <li>To detect, prevent, and address technical issues or fraudulent activities.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers. We may also disclose information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation or protect our rights.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">4. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">5. Your Choices and Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, update, or request deletion of your data. To exercise these rights, please contact us using the details provided below.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">6. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">7. Contact Us</h2>
            <p className="mb-0">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-6 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <strong>DevHive Solutions</strong><br />
              Email: <a href="mailto:solutionsbydevhive@gmail.com" className="text-[#D19C5B]">solutionsbydevhive@gmail.com</a><br />
              Location: Remote / Global
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

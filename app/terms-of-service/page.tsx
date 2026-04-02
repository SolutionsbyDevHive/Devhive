"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export default function TermsOfService() {
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
            <Scale size={16} className="text-[#D19C5B]" />
            <span className="text-sm font-medium text-[#D19C5B] uppercase tracking-widest">Legal</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter text-white">
            Terms of Service
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
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-[#E6ECF5]/70 prose-a:text-[#D19C5B] prose-a:no-underline hover:prose-a:underline prose-strong:text-white mb-12">
            <p>
              These Terms of Service ("Terms") dictate the rules and guidelines for utilizing the development, design, and consulting services provided by DevHive Solutions ("we," "us," or "our") and govern your access to our website.
            </p>
            <p>
              By accessing our website or engaging us for project work, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">1. Engagement of Services</h2>
            <p>
              DevHive Solutions provides custom software engineering, mobile application development, and web platform design. The specific scope, deliverables, timeline, and pricing for any given project will be defined in a separate binding Statement of Work (SOW) or Master Services Agreement (MSA) signed by both parties.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">2. Client Responsibilities</h2>
            <p>
              To ensure project success, the Client agrees to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-[#E6ECF5]/70">
              <li>Provide clear, timely requirements, assets, and feedback.</li>
              <li>Ensure they hold the necessary licenses and rights for any assets (images, fonts, APIs) provided to us for implementation.</li>
              <li>Designate a primary point of contact authorized to make binding decisions regarding project scope and approvals.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">3. Intellectual Property Rights</h2>
            <p>
              Upon receipt of full and final payment for the services rendered, DevHive Solutions transfers the intellectual property rights of the custom-developed codebase and design assets specific to your project to you, the Client. We reserve the right to reuse generalized boilerplate code, open-source utilities, and development frameworks that are not uniquely proprietary to your business logic. We also retain the right to showcase the completed project in our portfolio, unless a Non-Disclosure Agreement (NDA) stipulates otherwise.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">4. Payment Terms</h2>
            <p>
              Billing structures (such as milestone-based, hourly, or retainer) will be outlined in the SOW. Invoices are generally due upon receipt unless explicitly stated otherwise. We reserve the right to halt production or withhold deliverables if payments are delayed beyond the agreed grace period.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">5. Revisions and Maintenance</h2>
            <p>
              Project proposals include a specified number of revision rounds during the design and development phases. Iterations beyond the initial scope will be billed at our standard hourly rate. Post-launch maintenance, bug fixes resulting from third-party API changes, and feature enhancements require a separate maintenance contract.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">6. Warranties and Limitation of Liability</h2>
            <p>
              We warrant that the services will be performed in a professional and workmanlike manner. However, digital platforms are inherently exposed to third-party dependencies. DevHive Solutions shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the delivered software, including server downtimes, third-party plugin deprecations, or data breaches not directly caused by our gross negligence.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">7. Termination</h2>
            <p>
              Either party may terminate a project engagement given written notice if the other party breaches material terms. In the event of early termination by the Client, the Client shall pay for all work completed up to the date of termination, regardless of whether the project is finalized.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/5 pb-4">8. Contact Information</h2>
            <p>
              For any questions or concerns regarding these Terms of Service, please contact us:
            </p>
            <div className="mt-6 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <strong>DevHive Solutions Legal</strong><br />
              Email: <a href="mailto:solutionsbydevhive@gmail.com" className="text-[#D19C5B]">solutionsbydevhive@gmail.com</a><br />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

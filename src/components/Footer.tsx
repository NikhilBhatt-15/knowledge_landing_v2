"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#BDC4D1]/20 bg-[#242B7A]">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/secondaryLogo.png"
                alt="Know[ledge] Logo"
                className="h-8 w-8"
                width={32}
                height={32}
              />
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold font-poppins tracking-tight">
                <span className="bg-gradient-to-r from-[#CFABFA] to-[#D4E333] bg-clip-text text-transparent">
                  Know
                </span>
                <span className="text-white">[</span>
                <span className="text-[#D4E333]">ledge</span>
                <span className="text-white">]</span>
              </span>
            </div>
            <p className="text-[#BDC4D1] mb-4 max-w-md">
              Exploring the past to understand the present and shape the future.
              Join millions of learners on their historical journey.
            </p>
            <div className="flex space-x-4">
              {/* <motion.a
                href="#"
                className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Twitter
              </motion.a>
              <motion.a
                href="#"
                className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Facebook
              </motion.a> */}
              <motion.a
                href="https://www.instagram.com/know_allhistory/"
                target="_blank"
                className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/knowhistory/"
                target="_blank"
                className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>

          {/* <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ancient-history"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                >
                  Ancient History
                </Link>
              </li>
              <li>
                <Link
                  href="/medieval-times"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                >
                  Medieval Times
                </Link>
              </li>
              <li>
                <Link
                  href="/modern-era"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                >
                  Modern Era
                </Link>
              </li>
              <li>
                <Link
                  href="/world-wars"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                >
                  World Wars
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <motion.a
                  href="mailto:info@knowhistory.xyz"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact
                </motion.a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-[#BDC4D1] hover:text-[#CFABFA] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

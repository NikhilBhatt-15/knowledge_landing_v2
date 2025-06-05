"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DownloadModal } from "@/components/DownloadModal";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      {/* Download Modal (controlled by downloadOpen state) */}
      <DownloadModal open={downloadOpen} onOpenChange={setDownloadOpen}>
        {/* Empty span as trigger, since we open modal programmatically */}
        <span />
      </DownloadModal>

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#242B7A]/95 backdrop-blur-md border-b border-[#D4E333]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <motion.img
                  src="/secondaryLogo.png"
                  alt="know[ledge] Logo"
                  className="h-10 w-auto"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
              <Link href="/" className="hidden md:block">
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  <span className="bg-gradient-to-r from-[#CFABFA] to-[#D4E333] bg-clip-text text-transparent">
                    Know
                  </span>
                  <span className="text-white">[</span>
                  <span className="text-[#D4E333]">ledge</span>
                  <span className="text-white">]</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#D4E333] transition-colors duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4E333] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-[#D4E333] transition-colors duration-300 relative group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4E333] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] hover:from-[#D4E333]/90 hover:to-[#CFABFA]/90 text-[#242B7A] font-semibold border-0 rounded-full px-6 py-2 relative overflow-hidden group transition-all duration-300"
                  onClick={() => setDownloadOpen(true)}
                  type="button"
                >
                  <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-400" />
                  <span className="relative z-10">Download</span>
                </button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-[#D4E333] p-2 rounded"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`md:hidden ${isOpen ? "block" : "hidden"}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4 border-t border-[#D4E333]/20">
              <Link
                href="#home"
                className="block text-gray-300 hover:text-[#D4E333] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block text-gray-300 hover:text-[#D4E333] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="w-full bg-gradient-to-r from-[#D4E333] to-[#CFABFA] hover:from-[#D4E333]/90 hover:to-[#CFABFA]/90 text-[#242B7A] font-semibold border-0 rounded-full px-6 py-2 transition-all duration-300"
                  onClick={() => setDownloadOpen(true)}
                  type="button"
                >
                  Download
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

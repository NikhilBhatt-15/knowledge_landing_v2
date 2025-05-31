"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-[#242B7A]"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4E333] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CFABFA] rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontFamily:
                  "var(--font-poppins), var(--font-inter), sans-serif",
              }}
            >
              Uncover Histories They{" "}
              <span className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent">
                Didn&apos;t Teach You
              </span>
            </motion.h1>

            <motion.h2
              className="text-lg md:text-2xl text-[#D4E333] mb-2 font-semibold tracking-wide uppercase"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ letterSpacing: "0.1em" }}
            >
              Question. Learn. Evolve.
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Know[ledge] is a revolutionary platform that reveals overlooked
              histories of race, gender, sexual orientation, and ethnicity
              through immersive storytelling and interactive learning.
            </motion.p>

            <motion.ul
              className="mb-8 space-y-2 text-left max-w-md mx-auto lg:mx-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <li className="flex items-center text-gray-100 text-lg">
                <span className="text-[#D4E333] mr-3 text-xl">✔️</span>
                <span>Bite-sized stories that challenge the status quo</span>
              </li>
              <li className="flex items-center text-gray-100 text-lg">
                <span className="text-[#D4E333] mr-3 text-xl">✔️</span>
                <span>Gamified quizzes & interactive timelines</span>
              </li>
              <li className="flex items-center text-gray-100 text-lg">
                <span className="text-[#D4E333] mr-3 text-xl">✔️</span>
                <span>Personalized learning paths powered by AI</span>
              </li>
            </motion.ul>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.knowhistory_knowledge.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(212, 227, 51, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#D4E333] to-[#CFABFA] hover:from-[#D4E333]/90 hover:to-[#CFABFA]/90 text-[#242B7A] font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-[#D4E333]/25 transition-all duration-300"
              >
                <svg
                  x="0px"
                  y="0px"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 48 48"
                >
                  <path
                    // fill="#30dc80"
                    fill="currentColor"
                    d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"
                  ></path>
                  <path
                    // fill="#30dc80"
                    fill="currentColor"
                    d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"
                  ></path>
                  <path
                    // fill="#30dc80"
                    fill="currentColor"
                    d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"
                  ></path>
                </svg>
                Download for Android
              </motion.a>
              <motion.a
                href="https://testflight.apple.com/join/xhzmTnHr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212, 227, 51, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border border-[#D4E333] text-[#D4E333] hover:bg-[#D4E333] hover:text-[#242B7A] px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                Download for Apple
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <ArrowDown className="w-8 h-8 text-[#D4E333]" />
        </motion.div>
      </div>
    </section>
  );
};

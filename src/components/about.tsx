"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const statistics = [
  {
    number: "3,362",
    label:
      "Books banned in U.S. schools in 2023—many featuring race, gender, and LGBTQ+ themes.",
    source: "PEN America, 2023",
    color: "text-red-400",
  },
  {
    number: "<10%",
    label:
      "Of U.S. history textbooks cover Black, Indigenous, Latinx, and Asian American history combined.",
    source: "Teaching Hard History Report, SPLC, 2018",
    color: "text-orange-400",
  },
  {
    number: "18",
    label:
      "States have restricted discussions on race and gender, limiting access to critical narratives.",
    source: "Education Week, 2023",
    color: "text-yellow-400",
  },
];

const positiveStats = [
  {
    number: "19%",
    label: "Jump in mentions of race as a top national issue after 2020",
    detail:
      "After 2020, public awareness of racial and social justice issues surged—mentions of race as a top national issue jumped from 5% to 19% in June 2020.",
    source: "Gallup, 2020",
  },
  {
    number: "84.9%",
    label:
      "Of learners want to expand their knowledge of race, gender, sexual orientation, and ethnicity",
    detail:
      "84.9% of learners want to expand their knowledge of race, gender, sexual orientation, and ethnicity—but most platforms fail to deliver.",
    source: "Early Adopter Survey, 2024",
  },
];

export const AboutPage = () => {
  return (
    <main className="bg-[#242B7A]">
      <section
        id="about"
        className="relative py-20 px-4 sm:px-6 bg-[#242B7A] overflow-hidden min-h-screen"
        aria-labelledby="about-heading"
      >
        {/* Light effect background */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="absolute top-15 left-95 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#D4E333] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/2 translate-x-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-[#CFABFA] rounded-full blur-3xl" />
        </motion.div>
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Mission Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              id="about-heading"
              className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tight drop-shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent">
                Mission
              </span>
            </motion.h1>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#D4E333] mb-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className=" decoration-[#CFABFA] decoration-4 underline-offset-4">
                History Reclaimed
              </span>
            </motion.h2>

            <div className="space-y-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                The stories of{" "}
                <span className="text-[#CFABFA] font-semibold">women</span>,{" "}
                <span className="text-[#D4E333] font-semibold">
                  people of color
                </span>
                ,{" "}
                <span className="text-[#CFABFA] font-semibold">
                  LGBTQ+ pioneers
                </span>
                , and{" "}
                <span className="text-[#D4E333] font-semibold">
                  changemakers
                </span>{" "}
                have too often been erased, distorted, or reduced to footnotes.
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                At{" "}
                <span className="text-[#D4E333] font-semibold">
                  Know[ledge]
                </span>
                , we&apos;re rewriting the way history is told.
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Using{" "}
                <span className="text-[#D4E333] font-semibold">
                  AI-powered storytelling
                </span>
                ,{" "}
                <span className="text-[#CFABFA] font-semibold">
                  gamification
                </span>
                , and{" "}
                <span className="text-[#D4E333] font-semibold">
                  interactive experiences
                </span>
                , we bring untold narratives to life—because understanding the{" "}
                <span className="text-[#CFABFA] font-semibold">
                  full picture of history
                </span>{" "}
                is the first step toward a more informed and just world.
              </motion.p>
            </div>

            <motion.div
              className="mt-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(212, 227, 51, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://testflight.apple.com/join/xhzmTnHr",
                      "_blank"
                    );
                  }}
                  className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] hover:from-[#D4E333]/90 hover:to-[#CFABFA]/90 text-[#242B7A] font-semibold px-8 py-6 text-lg rounded-full shadow-2xl transition-all duration-300"
                  aria-label="Download for iOS"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why Now Section */}
          <motion.div
            className="mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-4 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why{" "}
              <span className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent">
                Now?
              </span>
            </motion.h2>
            <motion.h3
              className="text-2xl md:text-3xl text-[#D4E333] font-semibold mb-12 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Diverse, unfiltered history is under threat.
            </motion.h3>
            {/* Threat Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer transition-shadow"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                    boxShadow:
                      "0 8px 32px 0 rgba(212,227,51,0.10), 0 1.5px 8px 0 rgba(207,171,250,0.10)",
                  }}
                >
                  <motion.div
                    className={`text-5xl md:text-6xl font-bold mb-4 ${stat.color}`}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    Source: {stat.source}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Positive Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {positiveStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#D4E333]/10 to-[#CFABFA]/10 border border-[#D4E333]/30 cursor-pointer transition-shadow"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.18 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                    boxShadow:
                      "0 8px 32px 0 rgba(212,227,51,0.10), 0 1.5px 8px 0 rgba(207,171,250,0.10)",
                  }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-[#D4E333] mb-4"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.18 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {stat.label}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {stat.detail}
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    Source: {stat.source}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Gap in Platforms */}
            <motion.div
              className="text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl text-[#D4E333] font-semibold mb-8">
                Yet, existing learning platforms aren&apos;t engaging enough.
              </h3>
              <motion.div
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg text-gray-300">
                  Educational apps average a{" "}
                  <span className="text-red-400 font-bold">1.8-star</span>{" "}
                  satisfaction rating, signaling a gap in engaging, high-quality
                  content.
                </p>
              </motion.div>
            </motion.div>
            {/* Solution */}
            <motion.div
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-8"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We&apos;re here to{" "}
                <span className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent">
                  change that.
                </span>
              </motion.h3>

              <motion.div
                className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#D4E333]/20 to-[#CFABFA]/20 border border-[#D4E333]/50"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  Know[ledge] isn&apos;t just another learning app. It&apos;s a{" "}
                  <span className="text-[#D4E333] font-semibold">movement</span>
                  —one that transforms hidden histories into immersive,
                  interactive experiences, free from censorship.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

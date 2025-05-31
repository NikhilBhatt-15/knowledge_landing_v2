"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const screens = [
  {
    title: "Welcome to know[ledge]",
    image: "/screens/screen-1.jpg",
    bg: "from-blue-500 to-purple-500",
    content: "Discover a world of knowledge at your fingertips.",
  },
  {
    title: "Explore Topics",
    image: "/screens/screen-2.jpg",
    bg: "from-purple-500 to-pink-500",
    content: "Dive into a wide range of topics and expand your horizons.",
  },
  {
    title: "Engage with Content",
    image: "/screens/screen-3.jpg",
    bg: "from-pink-500 to-red-500",
    content: "Interact with articles, videos, and more.",
  },
  {
    title: "Community Insights",
    image: "/screens/screen-4.jpg",
    bg: "from-orange-500 to-red-500",
  },
  {
    title: "Interactive Stories",
    image: "/screens/screen-5.jpg",
    bg: "from-red-500 to-pink-500",
  },
  {
    title: "Knowledge Hub",
    image: "/screens/screen-6.jpg",
    bg: "from-pink-500 to-purple-500",
  },
];

export const PhoneMockup = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative mx-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Phone Frame */}
      <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white border-4 border-gray-900 rounded-[2.5rem] overflow-hidden relative">
          {" "}
          {/* Notch */}
          {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black/90 rounded-b-2xl z-10"></div> */}
          {/* Screen Content */}
          <motion.div
            key={currentScreen}
            className="w-full h-full flex flex-col justify-center items-center text-center bg-transparent"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 flex items-center justify-center w-full h-full relative">
              <Image
                src={screens[currentScreen].image}
                alt={screens[currentScreen].title}
                fill
                objectFit="cover"
                className="rounded-xl object-contain shadow-lg"
                priority={currentScreen === 0}
              />
            </div>
          </motion.div>
          {/* Screen indicators */}
          {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {screens.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentScreen ? "bg-blue-500" : "bg-gray-400/40"
                }`}
                animate={{ scale: index === currentScreen ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* Floating elements around phone */}
      <motion.div
        className="absolute -top-8 -left-8 w-16 h-16 bg-orange-400/20 rounded-full"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-8 -right-8 w-12 h-12 bg-amber-400/20 rounded-full"
        animate={{
          y: [0, 10, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

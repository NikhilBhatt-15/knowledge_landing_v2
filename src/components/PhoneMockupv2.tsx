import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PhoneMockupProps {
  className?: string;
  scale?: number;
  rotate?: number;
  opacity?: number;
  zIndex?: number;
  isMobile?: boolean;
  iphoneScreens: string[];
  screenIndex: number;
}

export const PhoneMockupv2 = ({
  scale = 1,
  rotate = 0,
  opacity = 1,
  zIndex = 1,
  isMobile = false,
  iphoneScreens,
  screenIndex,
}: PhoneMockupProps) => {
  const [prevIndex, setPrevIndex] = useState(screenIndex);
  const [showPrev, setShowPrev] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const firstRender = useRef(true);
  const lastDirection = useRef(1);

  // Calculate direction, handle wrap-around
  let direction = 1;
  if (screenIndex === 0 && prevIndex === iphoneScreens.length - 1) {
    direction = 1; // loop forward
  } else if (screenIndex === iphoneScreens.length - 1 && prevIndex === 0) {
    direction = -1; // loop backward
  } else {
    direction = screenIndex > prevIndex ? 1 : -1;
  }
  lastDirection.current = direction;

  useEffect(() => {
    if (screenIndex !== prevIndex) {
      setShowPrev(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowPrev(false);
        setPrevIndex(screenIndex);
      }, 600);
    }
  }, [screenIndex, prevIndex]);

  useEffect(() => {
    // Set firstRender to false after first paint
    firstRender.current = false;
  }, []);

  return (
    <motion.div
      className={`relative aspect-[9/19.5] w-[180px] h-[380px] sm:w-[215px] sm:h-[440px] md:w-[245px] md:h-[490px] lg:w-[285px] lg:h-[600px] mx-auto`}
      style={{ zIndex }}
      initial={false}
      animate={{
        opacity,
        scale: isMobile ? 0.85 : scale,
        rotate: isMobile ? 0 : rotate,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-3xl sm:rounded-[3rem] shadow-2xl pointer-events-none" />
      <div className="absolute inset-[6px] bg-white rounded-2xl sm:rounded-[2.75rem] overflow-hidden pointer-events-none">
        <div className="relative w-full h-full sm:h-[420px] md:h-full bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
          {/* Persistent background color */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-900 to-purple-800" />
          {/* Crossfade/swipe images */}
          {showPrev && prevIndex !== screenIndex && (
            <motion.div
              key={iphoneScreens[prevIndex] + "-prev"}
              initial={{ opacity: 1, scale: 1, x: 0 }}
              animate={{
                opacity: 0,
                scale: 1.02,
                x: -lastDirection.current * 40,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{ willChange: "opacity, transform" }}
            >
              <Image
                src={iphoneScreens[prevIndex]}
                alt="know[ledge] app interface"
                fill
                sizes="100vw"
                className="object-cover w-full h-full sm:rounded-[2.5rem] rounded-2xl"
                priority
                draggable={false}
              />
            </motion.div>
          )}
          <motion.div
            key={iphoneScreens[screenIndex] + "-current"}
            initial={
              firstRender.current
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.98, x: lastDirection.current * 40 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ willChange: "opacity, transform" }}
          >
            <Image
              src={iphoneScreens[screenIndex]}
              alt="know[ledge] app interface"
              fill
              sizes="100vw"
              className="object-cover w-full h-full sm:rounded-[2.5rem] rounded-2xl"
              priority
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
      {/* ...rest of your code for animated circles... */}
      <motion.div
        className="absolute -top-0 -left-13 w-16 h-16 bg-orange-400/20 rounded-full"
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
        className="absolute -bottom-0 -right-8 w-12 h-12 bg-amber-400/20 rounded-full"
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

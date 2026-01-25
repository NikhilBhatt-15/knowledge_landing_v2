"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PhoneMockupv3Props {
  iphoneScreens: string[];
  screenIndex: number;
}

export const PhoneMockupv3 = ({
  iphoneScreens,
  screenIndex,
}: PhoneMockupv3Props) => {
  return (
    <div className="relative w-full max-w-[240px] md:max-w-[280px] lg:max-w-[320px] perspective-1000">
      {/* iPhone Frame with 3D tilt effect */}
      <div 
        className="relative w-full aspect-[9/19] transform hover:scale-105 transition-transform duration-300"
        style={{ 
          transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        <Image
          src="/iphone-mck.png"
          alt="iPhone Frame"
          fill
          className="object-contain z-10 pointer-events-none"
          priority
        />
        
        {/* Screen Content Container - positioned inside the frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[88%] h-[95%] rounded-[2.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={screenIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={iphoneScreens[screenIndex]}
                  alt={`Screen ${screenIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

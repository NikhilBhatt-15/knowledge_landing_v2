import { motion, AnimatePresence } from "framer-motion";
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
  className = "",
  scale = 1,
  rotate = 0,
  opacity = 1,
  zIndex = 1,
  isMobile = false,
  iphoneScreens,
  screenIndex,
}: PhoneMockupProps) => (
  <motion.div
    className={`relative aspect-[9/19.5] w-[180px]  h-[350px]  sm:w-[220px] sm:h-[450px] md:w-[260px] md:h-fu lg:w-[300px] lg:h-[650px]  mx-auto `}
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
    <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl pointer-events-none" />
    <div className="absolute inset-[6px] bg-white rounded-[2.75rem] overflow-hidden pointer-events-none">
      <div className="relative w-full h-[350px] sm:h-[420px] md:h-full bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 rounded-[2.5rem] overflow-hidden">
        {/* Persistent background color to avoid black flash */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-900 to-purple-800" />
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(59,130,246,0.18) 100%)",
            zIndex: 1,
          }}
        /> */}
        <AnimatePresence mode="wait">
          <motion.div
            key={iphoneScreens[screenIndex]}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ willChange: "opacity, transform" }}
          >
            <Image
              src={iphoneScreens[screenIndex]}
              alt="know[ledge] app interface"
              fill
              sizes="100vw"
              className="object-cover w-full h-full rounded-[2.5rem]"
              priority
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
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

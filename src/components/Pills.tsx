import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const pills = [
  {
    title: "For Those Who Want a Fuller Story",
    subtitle: "Built for Curious Minds",
    image: "/pills/pill1.png",
    color: "from-[#D4E333] to-[#CFABFA]",
    buttonText: "Start Exploring",
    leftText:
      "Discover untold stories and perspectives that challenge traditional historical narratives.",
    rightText:
      "Every story matters. Every voice counts. Experience history from all angles.",
  },
  {
    title: "For Thoughtful Learners Everywhere",
    subtitle: "Deeper Understanding",
    image: "/pills/pill4.png",
    color: "from-[#CFABFA] to-[#D4E333]",
    buttonText: "Join the Journey",
    leftText:
      "Connect historical events to contemporary issues and understand their lasting impact.",
    rightText:
      "Explore how past events shape our understanding of race, gender, culture, and identity.",
  },
  {
    title: "For Lifelong Explorers",
    subtitle: "Never Stop Learning",
    image: "/pills/pill6.png",
    color: "from-[#242B7A] to-[#CFABFA]",
    buttonText: "Begin Discovery",
    leftText:
      "Every day brings new insights and perspectives to expand your understanding.",
    rightText:
      "Your journey of discovery never ends - there's always more to learn and explore.",
  },
];

const Pills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animations
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [0.95, 1.1]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [5, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [20, -20]
  );

  const progress1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "0%"]);
  const progress2 = useTransform(scrollYProgress, [0.15, 0.33], ["100%", "0%"]);
  const progress3 = useTransform(scrollYProgress, [0.5, 0.8], ["100%", "0%"]);

  const textTransitions = {
    text1: {
      y: useTransform(scrollYProgress, [0, 0.33], [0, -50]),
      opacity: useTransform(scrollYProgress, [0, 0.33], [1, 0]),
    },
    text2: {
      y: useTransform(scrollYProgress, [0.15, 0.33, 0.5, 0.8], [50, 0, 0, -50]),
      opacity: useTransform(
        scrollYProgress,
        [0.15, 0.33, 0.5, 0.8],
        [0, 1, 1, 0]
      ),
    },
    text3: {
      y: useTransform(scrollYProgress, [0.5, 0.8], [50, 0]),
      opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]),
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-gradient-to-b from-[#242B7A] to-[#181C4B]"
      aria-label="Who is Know[ledge] for?"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#242B7A] to-[#181C4B]">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Text Section */}
          <div
            className="relative h-[600px] items-center hidden md:flex"
            aria-hidden="true"
          >
            {pills.map((pill, index) => {
              const key = `text${index + 1}` as "text1" | "text2" | "text3";
              return (
                <motion.div
                  key={`left-${index}`}
                  style={{
                    ...textTransitions[key],
                    position: "absolute",
                    width: "100%",
                  }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-[#D4E333]">
                      {pill.subtitle}
                    </h3>
                    <div className="h-1 w-20 bg-[#D4E333] rounded-full" />
                  </div>
                  <p className="text-lg leading-relaxed text-white/90">
                    {pill.leftText}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center iPhone Section */}
          <motion.div
            style={{ scale, rotateX, y }}
            className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] mx-auto"
            aria-label="App preview"
          >
            <div className="absolute -inset-4 bg-black/10 blur-2xl rounded-[3rem] -rotate-[4deg]" />
            <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-[3rem] rotate-[4deg]" />

            <div className="absolute inset-0 bg-[#1D1D1F] rounded-[2.5rem] sm:rounded-[2.8rem] shadow-[0_0_20px_rgba(0,0,0,0.2),0_0_40px_rgba(0,0,0,0.1)]" />
            <div className="absolute inset-[4px] bg-white rounded-[2.3rem] sm:rounded-[2.6rem] overflow-hidden shadow-inner">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-[1.2rem] z-10">
                <div className="absolute top-[8px] left-[22px] w-[12px] h-[12px] rounded-full bg-[#1D1D1F]" />
                <div className="absolute top-[10px] right-[22px] w-[8px] h-[8px] rounded-full bg-[#1D1D1F]" />
              </div>
              <div className="relative w-full h-full">
                {pills.map((pill, index) => (
                  <motion.div
                    key={index}
                    style={{
                      y:
                        index === 0
                          ? progress1
                          : index === 1
                          ? progress2
                          : progress3,
                      position: "absolute",
                      inset: 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col h-full"
                    aria-label={pill.title}
                  >
                    <div className="relative h-full w-full">
                      {/* <div
                        className={`absolute inset-0 bg-gradient-to-br ${pill.color}`}
                        aria-hidden="true"
                      /> */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={pill.image}
                          alt={pill.title}
                          quality={100}
                          fill
                          className="w-full h-full object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <div className="absolute bottom-6 left-0 right-0 px-6">
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(212, 227, 51, 0.6)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-[#242B7A] hover:bg-[#242B7A]/90 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
                          aria-label={pill.buttonText}
                        >
                          {pill.buttonText}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Text Section */}
          <div
            className="relative h-[600px] items-center hidden md:flex"
            aria-hidden="true"
          >
            {pills.map((pill, index) => {
              const key = `text${index + 1}` as "text1" | "text2" | "text3";
              return (
                <motion.div
                  key={`right-${index}`}
                  style={{
                    ...textTransitions[key],
                    position: "absolute",
                    width: "100%",
                  }}
                  className="space-y-6 text-right"
                >
                  <div className="space-y-2 flex flex-col items-end">
                    <h3 className="text-3xl font-bold text-[#D4E333]">
                      {pill.title}
                    </h3>
                    <div className="h-1 w-20 bg-[#D4E333] rounded-full" />
                  </div>
                  <p className="text-lg leading-relaxed text-white/90">
                    {pill.rightText}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      {/* SEO: Hidden h2 for accessibility/SEO */}
      <h2 className="sr-only">Who is Know[ledge] for?</h2>
    </section>
  );
};

export default Pills;

import { motion } from "framer-motion";
import { Target, CalendarDays, Rocket } from "lucide-react";

const features = [
  {
    title: "Personalized Feed",
    description:
      "A curated stream of stories and timelines shaped by your interests and what you choose to follow.",
    icon: <Target size={48} className="text-[#D4E333] drop-shadow-lg" />,
    gradient: "from-[#D4E333] to-[#CFABFA]",
  },
  {
    title: "Daily 'On This Day' Stories",
    description:
      "Daily moments from history surfaced with context, connections, and surprising details.",
    icon: <CalendarDays size={48} className="text-[#CFABFA] drop-shadow-lg" />,
    gradient: "from-[#CFABFA] to-[#D4E333]",
  },
  {
    title: "Progress & Discovery",
    description:
      "Follow stories over time, unlock deeper layers, and track what you've explored as you go.",
    icon: <Rocket size={48} className="text-[#baba37] drop-shadow-lg" />,
    gradient: "from-[#D4E333] via-[#CFABFA] to-[#242B7A]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Features = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-[#242B7A] to-[#181C4B]">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-[#D4E333]/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-[#CFABFA]/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Key{" "}
            <span className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent">
              Features
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Designed to help you follow stories deeper, connect moments across time, and see the bigger picture.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group perspective-1000"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-[#D4E333]/20 hover:border-[#D4E333]/50 transition-all duration-500 h-full relative overflow-hidden rounded-2xl">
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="text-center relative z-10 p-8">
                  <motion.div
                    className="mb-6 inline-block"
                    initial={{ rotateY: 0 }}
                    whileHover={{
                      rotateY: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-white text-2xl group-hover:text-[#D4E333] transition-colors duration-300 mb-4 font-bold">
                      {feature.title}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action with pulse animation */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] text-[#242B7A] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212, 227, 51, 0.7)",
                  "0 0 0 10px rgba(212, 227, 51, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Explore Features
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

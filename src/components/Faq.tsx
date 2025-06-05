"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "Why was Know[ledge] created?",
    answer:
      "We created the platform to fill a critical gap in historical representation by making overlooked narratives accessible, engaging, and immersive. Traditional education, books, and media often omit or minimize key events and perspectives related to race, gender, sexuality, and culture. Our mission is to readjust or unearth these stories by providing a space where users can explore untold histories, gain deeper insights, and engage in meaningful discussions that connect the past to the present.",
  },
  {
    question: "What is Know[ledge]?",
    answer:
      "We bring overlooked history to life through immersive storytelling, expert insights, and collaborative learning. Our focus is on highlighting untold narratives about race, gender, sexuality, and culture—stories often missing from mainstream education.",
  },
  {
    question: "Who is Know[ledge] for?",
    answer:
      "We’re designed for lifelong learners, educators, and socially conscious individuals who want to engage with history beyond textbooks. Whether you’re looking to explore new perspectives, contribute your own insights, or connect with a like-minded community, we provide an interactive space to deepen your understanding of historical events and their impact today.",
  },
  {
    question: "What makes Know[ledge] different?",
    answer:
      "Unlike traditional history platforms, we prioritize narratives that have been suppressed or overlooked. By combining immersive storytelling with community engagement, we allow users to not only learn but also participate in discussions, share insights, and contribute to a collective understanding of history.",
  },
  {
    question: "How does Know[ledge] work?",
    answer:
      "We integrate story-driven learning with collaborative features. Users can explore bite-sized historical narratives, engage in discussions with fellow seekers, access curated content on key historical events, and participate in knowledge-building challenges. Our platform is designed to be both interactive and informative, ensuring an engaging learning experience.",
  },
  {
    question: "Can I contribute to Know[ledge]?",
    answer:
      "In the near future, yes! We are building a collaborative learning space where users can share historical insights, participate in discussions, and contribute recommended resources to enrich the platform. We welcome diverse perspectives and community-driven contributions that align with our mission of making history more inclusive and accessible.",
  },
  {
    question: "Is Know[ledge] free?",
    answer:
      "We offer free access to core content, with premium features available for users who want a deeper, more interactive experience. Premium members gain access to exclusive expert discussions, additional learning tools, and a more personalized experience.",
  },
  {
    question: "How can I support Know[ledge]?",
    answer:
      "You can support us by signing up for early access, sharing the platform with your network, participating in discussions, and providing feedback to help us improve. By engaging with the community and contributing to the learning experience, you help shape a more inclusive and comprehensive historical resource.",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-20 px-6 bg-gradient-to-b from-[#242B7A] to-[#3640ab]"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.header
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            id="faq-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Know[ledge] and how it can
            transform your learning experience.
          </p>
        </motion.header>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            aria-label="Frequently Asked Questions"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-lg border border-[#D4E333]/20 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-[#D4E333] text-left text-lg font-medium py-6">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

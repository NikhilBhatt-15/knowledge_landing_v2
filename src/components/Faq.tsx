import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "What is Know History?",
    answer:
      "Know History is an interactive platform that brings historical events to life through immersive timelines, engaging stories, and multimedia content. We make learning history fun and accessible for everyone.",
  },
  {
    question: "How accurate is the historical content?",
    answer:
      "All our content is carefully curated and verified by professional historians and subject matter experts. We maintain high academic standards while presenting information in an engaging format.",
  },
  {
    question: "Can I use Know History for educational purposes?",
    answer:
      "Absolutely! Know History is designed for learners of all ages. Teachers can use our platform in classrooms, and students can explore history at their own pace with our interactive tools and quizzes.",
  },
  {
    question: "Is the app available on mobile devices?",
    answer:
      "Yes, Know History is fully responsive and works seamlessly on all devices. We also have dedicated mobile apps for iOS and Android for the best experience on the go.",
  },
  {
    question: "How often is new content added?",
    answer:
      "We regularly update our platform with new historical discoveries, stories, and interactive content. Our team works continuously to expand our database and improve the user experience.",
  },
  {
    question: "Is there a subscription fee?",
    answer:
      "We offer both free and premium tiers. The free version includes access to basic timelines and stories, while premium unlocks advanced features, exclusive content, and ad-free browsing.",
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
            Everything you need to know about Know History and how it can
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

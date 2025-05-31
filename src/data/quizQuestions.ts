export interface QuizQuestion {
  image?: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    image: "/quiz/ques1.jpeg",
    question:
      "Which ancient wonder of the world was located in Alexandria, Egypt?",
    options: [
      "The Hanging Gardens",
      "The Lighthouse of Alexandria",
      "The Colossus of Rhodes",
      "The Temple of Artemis",
    ],
    correct: "The Lighthouse of Alexandria",
    explanation:
      "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World, built around 280 BC.",
  },
  {
    image: "/quiz/ques2.jpeg",
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Rosalind Franklin",
      "Dorothy Hodgkin",
      "Lise Meitner",
    ],
    correct: "Marie Curie",
    explanation:
      "Marie Curie won the Nobel Prize in Physics in 1903, shared with her husband Pierre Curie and Henri Becquerel.",
  },
  {
    image: "/quiz/ques3.jpeg",
    question: "Which civilization built Machu Picchu?",
    options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
    correct: "Incas",
    explanation:
      "Machu Picchu was built by the Inca civilization around 1450 CE in Peru.",
  },
  {
    image: "/quiz/ques1.jpeg",
    question: "In what year did the Berlin Wall fall?",
    options: ["1987", "1989", "1991", "1993"],
    correct: "1989",
    explanation:
      "The Berlin Wall fell on November 9, 1989, marking a significant moment in the end of the Cold War.",
  },
  {
    image: "/quiz/ques2.jpeg",
    question:
      "Who was the first African American to serve as President of the United States?",
    options: [
      "Martin Luther King Jr.",
      "Barack Obama",
      "Frederick Douglass",
      "Thurgood Marshall",
    ],
    correct: "Barack Obama",
    explanation: "Barack Obama served as the 44th President from 2009 to 2017.",
  },
  {
    image: "/quiz/ques3.jpeg",
    question: "Which empire was ruled by Cleopatra VII?",
    options: [
      "Roman Empire",
      "Greek Empire",
      "Persian Empire",
      "Egyptian Empire",
    ],
    correct: "Egyptian Empire",
    explanation:
      "Cleopatra VII was the last active pharaoh of Ptolemaic Egypt from 69 BC until her death in 30 BC.",
  },
  {
    image: "/quiz/ques1.jpeg",
    question: "What year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correct: "1945",
    explanation:
      "World War II ended in 1945 with Japan's surrender on September 2, 1945.",
  },
  {
    image: "/quiz/ques2.jpeg",
    question: "Who painted the famous 'Girl with a Pearl Earring'?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Johannes Vermeer",
      "Rembrandt",
    ],
    correct: "Johannes Vermeer",
    explanation:
      "Johannes Vermeer painted this masterpiece around 1665 during the Dutch Golden Age.",
  },
  {
    image: "/quiz/ques3.jpeg",
    question: "Which language was primarily used in the Roman Empire?",
    options: ["Greek", "Latin", "Hebrew", "Aramaic"],
    correct: "Latin",
    explanation:
      "Latin was the official language of the Roman Empire and the basis for many modern Romance languages.",
  },
  {
    image: "/quiz/ques1.jpeg",
    question: "Who led the Mongol Empire at its largest extent?",
    options: ["Genghis Khan", "Kublai Khan", "Möngke Khan", "Ögedei Khan"],
    correct: "Kublai Khan",
    explanation:
      "While Genghis Khan founded the empire, it reached its largest extent under his grandson Kublai Khan.",
  },
];

export interface QuizQuestion {
  image?: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    image: "/quiz/quiz1.png",
    question:
      "Who was the first Black woman to argue a case before the U.S. Supreme Court in 1956?",
    options: [
      "Rosa Parks",
      "Shirley Chisholm",
      "Ida B. Wells",
      "Constance Baker Motley",
    ],
    correct: "Constance Baker Motley",
    explanation:
      "The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World, known for their impressive terraced greenery.",
  },
  {
    image: "/quiz/quiz2.png",
    question:
      "Which Native American tribe had a recognized third gender known as “Two-Spirit” long before European colonization?",
    options: ["Navajo (Diné)", "Cherokee", "Sioux", "Apache"],
    correct: "Navajo (Diné)",
    explanation:
      "Marie Curie won the Nobel Prize in Physics in 1903, shared with her husband Pierre Curie and Henri Becquerel.",
  },
  {
    image: "/quiz/quiz3.png",
    question:
      "Who was the first openly gay elected official in the U.S. before Harvey Milk?",
    options: [
      "Harvey Milk",
      "Larry Kramer",
      "Kathy Kozachenko",
      "Bayard Rustin",
    ],
    correct: "Kathy Kozachenko",
    explanation:
      "Machu Picchu was built by the Inca civilization around 1450 CE in Peru.",
  },
  {
    image: "/quiz/quiz4.png",
    question:
      "Which Mexican-American activist was a key member of the Mexican Civil Rights Committee and fought for voting rights and racial justice in the 1940s?",
    options: [
      "Josephine Fierro de Bright",
      "Sylvia Rivera",
      "Lupe Anguiano",
      "Antonia Pantoja",
    ],
    correct: "Josephine Fierro de Bright",
    explanation:
      "The Berlin Wall fell on November 9, 1989, marking a significant moment in the end of the Cold War.",
  },
  {
    image: "/quiz/quiz5.png",
    question:
      "In the 1950s, which U.S. city was home to the first known lesbian publication, Vice Versa, created and distributed in secret?",
    options: [
      "New York City, New York",
      "Los Angeles, California",
      "San Francisco, California",
      "Chicago, Illinois",
    ],
    correct: "Los Angeles, California",
    explanation: "Barack Obama served as the 44th President from 2009 to 2017.",
  },
];

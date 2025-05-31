import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  RotateCcw,
  Sparkles,
  Star,
  CheckCircle2,
  XCircle,
  Smile,
  BookOpen,
  ThumbsUp,
  Award,
} from "lucide-react";
import { quizQuestions as baseQuestions } from "../data/quizQuestions";
import { ConfettiAnimation } from "./ConfettiAnimation";
import Image from "next/image";

// Add an image property to each question in your data file or here:
const quizQuestions = baseQuestions.map((q, i) => ({
  ...q,
  image: q.image || `/quiz/q${i + 1}.jpg`, // fallback or set your own images
}));

export const QuizGame = () => {
  const [quiz, setQuiz] = useState({
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null as string | null,
    showResult: false,
    gameStarted: false,
    showFeedback: false,
    isCorrect: false,
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(quizQuestions);

  useEffect(() => {
    if (quiz.gameStarted) {
      const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
      setShuffledQuestions(shuffled.slice(0, 5));
    }
  }, [quiz.gameStarted]);

  const startGame = () => {
    setQuiz({
      currentQuestion: 0,
      score: 0,
      selectedAnswer: null,
      showResult: false,
      gameStarted: true,
      showFeedback: false,
      isCorrect: false,
    });
  };

  const handleAnswerSelect = (answer: string) => {
    if (quiz.showFeedback) return;
    const isCorrect =
      answer === shuffledQuestions[quiz.currentQuestion].correct;
    setQuiz((prev) => ({
      ...prev,
      selectedAnswer: answer,
      showFeedback: true,
      isCorrect,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));

    if (isCorrect && quiz.score + 1 === shuffledQuestions.length) {
      setShowConfetti(true);
    }
  };

  const nextQuestion = () => {
    if (quiz.currentQuestion + 1 < shuffledQuestions.length) {
      setQuiz((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: null,
        showFeedback: false,
        isCorrect: false,
      }));
    } else {
      setQuiz((prev) => ({ ...prev, showResult: true }));
    }
  };

  const resetGame = () => {
    setQuiz({
      currentQuestion: 0,
      score: 0,
      selectedAnswer: null,
      showResult: false,
      gameStarted: false,
      showFeedback: false,
      isCorrect: false,
    });
    setShowConfetti(false);
  };

  const getScoreIcon = () => {
    const percentage = (quiz.score / shuffledQuestions.length) * 100;
    if (percentage === 100)
      return <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />;
    if (percentage >= 80)
      return <Award className="w-16 h-16 text-[#D4E333] mx-auto" />;
    if (percentage >= 60)
      return <ThumbsUp className="w-16 h-16 text-blue-400 mx-auto" />;
    if (percentage >= 40)
      return <BookOpen className="w-16 h-16 text-purple-400 mx-auto" />;
    return <Smile className="w-16 h-16 text-orange-400 mx-auto" />;
  };

  const getScoreMessage = () => {
    const percentage = (quiz.score / shuffledQuestions.length) * 100;
    if (percentage === 100) return "Perfect! You're a history master!";
    if (percentage >= 80) return "Excellent! You know your history well!";
    if (percentage >= 60) return "Good job! Keep learning!";
    if (percentage >= 40) return "Not bad! There's room to grow!";
    return "Keep studying! History is fascinating!";
  };

  if (!quiz.gameStarted) {
    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-[#242B7A] to-[#3640ab] flex items-center justify-center">
        <motion.div
          className="w-full max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-16 h-16 mx-auto text-[#D4E333] mb-4" />
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            History Quiz Challenge!
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Test your knowledge with 5 fun history questions
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={startGame}
              size="lg"
              className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] hover:from-[#D4E333]/90 hover:to-[#CFABFA]/90 text-[#242B7A] font-bold px-8 py-6 text-xl rounded-full shadow-lg"
            >
              Start Quiz!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (quiz.showResult) {
    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-[#242B7A] to-[#3640ab] flex items-center justify-center">
        <motion.div
          className="w-full max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {showConfetti && <ConfettiAnimation />}
          <motion.div
            className="mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {getScoreIcon()}
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Quiz Complete!
          </motion.h2>
          <motion.div
            className="text-6xl font-bold bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            {quiz.score}/{shuffledQuestions.length}
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {getScoreMessage()}
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={resetGame}
                size="lg"
                className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] hover:from-[#D4E333]/90 hover:to-[#CFABFA]/90 text-[#242B7A] font-bold px-6 py-3 rounded-full"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Play Again
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const currentQ = shuffledQuestions[quiz.currentQuestion];
  const progress =
    ((quiz.currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="min-h-screen py-4 px-2 bg-gradient-to-b from-[#242B7A] to-[#3640ab] flex items-center justify-center">
      <motion.div
        className="w-full max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Progress Bar */}
        <div className="mb-4 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#D4E333] font-semibold text-sm md:text-base">
              Question {quiz.currentQuestion + 1} of {shuffledQuestions.length}
            </span>
            <span className="text-[#CFABFA] font-semibold flex items-center text-sm md:text-base">
              <Star className="w-4 h-4 mr-1" />
              {quiz.score}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ minWidth: 0, maxWidth: "100%" }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={quiz.currentQuestion}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-[#D4E333]/30 mb-4">
              <CardContent className="p-4 md:p-6">
                {/* Question Image */}
                <div className="w-full flex justify-center mb-4">
                  <div className="relative w-40 h-28 md:w-60 md:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-[#CFABFA]/40">
                    <Image
                      src={currentQ.image}
                      alt={currentQ.question}
                      fill
                      className="object-cover"
                      sizes="240px"
                      priority
                    />
                  </div>
                </div>
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-white mb-4 leading-relaxed text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentQ.question}
                </motion.h3>
                {/* Options as 2-column grid on md+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {currentQ.options.map((option, index) => {
                    const isCorrect = option === currentQ.correct;
                    const isSelected = quiz.selectedAnswer === option;
                    return (
                      <motion.div
                        key={option}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: quiz.showFeedback ? 1 : 1.03 }}
                        whileTap={{ scale: quiz.showFeedback ? 1 : 0.97 }}
                      >
                        <Button
                          onClick={() => handleAnswerSelect(option)}
                          disabled={quiz.showFeedback}
                          className={`w-full p-4 md:p-5 text-left text-base md:text-lg font-medium rounded-xl transition-all duration-300 ${
                            quiz.showFeedback
                              ? isCorrect
                                ? "bg-gradient-to-r from-green-400 to-green-500 text-white border-green-400"
                                : isSelected
                                ? "bg-gradient-to-r from-red-400 to-red-500 text-white border-red-400"
                                : "bg-gray-600 text-gray-300 border-gray-500"
                              : isSelected
                              ? "bg-[#D4E333] text-[#242B7A] border-[#D4E333]"
                              : "bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-[#D4E333]/50"
                          }`}
                          variant="outline"
                        >
                          <span className="mr-3 font-bold text-[#D4E333]">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                          <AnimatePresence>
                            {quiz.showFeedback && isCorrect && (
                              <motion.span
                                className="float-right flex items-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-300 ml-2" />
                              </motion.span>
                            )}
                            {quiz.showFeedback && isSelected && !isCorrect && (
                              <motion.span
                                className="float-right flex items-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <XCircle className="w-5 h-5 text-red-300 ml-2" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
                {/* Reveal Explanation */}
                <AnimatePresence>
                  {quiz.showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="mt-6 p-4 md:p-6 bg-gradient-to-r from-[#CFABFA]/30 to-[#D4E333]/20 border-2 border-[#CFABFA]/40 rounded-2xl text-center"
                    >
                      <motion.p
                        className="text-base md:text-xl font-semibold text-white mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {currentQ.explanation}
                      </motion.p>
                      <motion.button
                        onClick={nextQuestion}
                        className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#D4E333] to-[#CFABFA] rounded-full text-[#242B7A] font-black text-base md:text-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {quiz.currentQuestion + 1 < shuffledQuestions.length ? (
                          <>Next Question</>
                        ) : (
                          <>See Results</>
                        )}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

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
  Download,
  Share2,
  Award,
  ThumbsUp,
  BookOpen,
  Smile,
} from "lucide-react";
import { quizQuestions as baseQuestions } from "../data/quizQuestions";
import { ConfettiAnimation } from "./ConfettiAnimation";
import Image from "next/image";
import { DownloadModal } from "./DownloadModal";

const quizQuestions = baseQuestions.map((q, i) => ({
  ...q,
  image: q.image || `/quiz/q${i + 1}.jpg`,
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

  // Auto-advance after feedback
  useEffect(() => {
    if (quiz.showFeedback) {
      const timeout = setTimeout(() => {
        if (quiz.isCorrect && quiz.score + 1 === shuffledQuestions.length) {
          setShowConfetti(true);
        }
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
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [
    quiz.showFeedback,
    quiz.currentQuestion,
    quiz.score,
    quiz.isCorrect,
    shuffledQuestions.length,
  ]);

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
    setShowConfetti(false);
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

  const getBadgeColor = () => "from-[#D4E333] to-[#CFABFA]";

  const shareScore = () => {
    const text = `I just scored ${quiz.score}/${
      shuffledQuestions.length
    } on the Know History quiz! ${getScoreMessage()}`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  if (!quiz.gameStarted) {
    return (
      <div className="h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#242B7A] to-[#3640ab] flex items-center justify-center py-0 px-2">
        <motion.div
          className="w-full max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Test your
            <span className="bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent">
              &nbsp;Know[ledge]
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Challenge yourself with our interactive history quiz and discover
            fascinating stories from the past!
          </motion.p>
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
      <div className="h-screen w-full overflow-x-hidden bg-[#242B7A] flex items-center justify-center py-0 px-0">
        <motion.div
          className="w-full max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {showConfetti && <ConfettiAnimation />}
          {/* Achievement Badge */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div
              className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${getBadgeColor()} flex items-center justify-center shadow-2xl`}
            >
              <motion.div
                className="flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {getScoreIcon()}
              </motion.div>
            </div>
            <motion.div
              className="absolute -top-0 -right-0 bg-[#D4E333] text-[#242B7A] rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <Trophy className="w-6 h-6" />
            </motion.div>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
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
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-5 border border-[#D4E333]/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to explore more{" "}
              <span className="text-[#D4E333]">hidden histories</span>?
            </h3>
            <p className="text-gray-300 mb-4">
              Download Know[ledge] for unlimited quizzes, interactive timelines,
              and untold stories from around the world.
            </p>
            <DownloadModal>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="w-60 h-10 bg-gradient-to-r from-[#D4E333] to-[#CFABFA] hover:from-[#D4E333]/90 hover:to-[#CFABFA]/90 text-[#242B7A] font-bold px-8 py-3 rounded-full text-lg">
                  <Download className="w-7 h-12 mr-2" />
                  Get the Full App
                </Button>
              </motion.div>
            </DownloadModal>
          </motion.div>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={shareScore}
                variant="outline"
                className="border-[#CFABFA] text-[#CFABFA] hover:bg-[#CFABFA]/10 rounded-full px-10 py-5"
              >
                <Share2 className="w-6 h-6 mr-2" />
                Share Score
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={resetGame}
                variant="outline"
                className="border-[#D4E333] text-[#D4E333] hover:bg-[#D4E333]/10 rounded-full px-10 py-5"
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
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#242B7A] to-[#3640ab] flex items-center justify-center py-0 px-2">
      <motion.div
        className="w-full max-w-2xl mx-auto"
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
              initial={false}
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
            <Card className="bg-white/10 backdrop-blur-md border-[#D4E333]/30 mb-4 w-full max-w-2xl mx-auto">
              <CardContent className="p-4 md:p-6 w-full">
                {/* Question Image */}
                <div className="w-full flex justify-center mb-4">
                  <div className="relative w-40 h-28 md:w-60 md:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-[#CFABFA]/40">
                    <Image
                      src={currentQ.image}
                      alt={currentQ.question}
                      quality={100}
                      fill
                      className="w-full h-full object-cover"
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
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                        className="w-full "
                      >
                        <Button
                          onClick={() => handleAnswerSelect(option)}
                          disabled={quiz.showFeedback}
                          className={`w-full  min-w-0 flex items-center p-4 md:p-7 text-left text-base md:text-lg font-medium rounded-xl transition-all duration-300 break-words ${
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
                          <span className="w-8 shrink-0 mr-3 font-bold text-[#D4E333] text-center">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="flex-1 break-words whitespace-pre-wrap min-w-0">
                            {option}
                          </span>
                          <AnimatePresence>
                            {quiz.showFeedback && isCorrect && (
                              <motion.span
                                className="ml-2 flex items-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-300" />
                              </motion.span>
                            )}
                            {quiz.showFeedback && isSelected && !isCorrect && (
                              <motion.span
                                className="ml-2 flex items-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <XCircle className="w-5 h-5 text-red-300" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Feedback Animation */}
                <AnimatePresence>
                  {quiz.showFeedback && (
                    <motion.div
                      className="text-center mt-4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <motion.div
                        className={`text-4xl mb-2 flex items-center justify-center`}
                        animate={
                          quiz.isCorrect
                            ? { rotate: [0, 10, -10, 0] }
                            : { x: [-5, 5, -5, 5, 0] }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {quiz.isCorrect ? (
                          <CheckCircle2 className="w-10 h-10 text-green-400" />
                        ) : (
                          <XCircle className="w-10 h-10 text-red-400" />
                        )}
                      </motion.div>
                      <p
                        className={`text-lg font-bold ${
                          quiz.isCorrect ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {quiz.isCorrect
                          ? "Correct! Well done!"
                          : "Oops! Better luck next time!"}
                      </p>
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

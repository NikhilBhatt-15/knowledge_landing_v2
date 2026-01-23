import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number; // Optional size for SadConfettiAnimation
}

export const ConfettiAnimation = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
    const colors = ["#D4E333", "#CFABFA", "#FFD700", "#FF6B6B", "#4ECDC4"];
    const newConfetti: Confetti[] = [];

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        size: 5 + Math.random() * 10, // Random size between 5 and 15
      });
    }

    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
            top: "-10%",
          }}
          initial={{ y: -100, rotate: 0, opacity: 1 }}
          animate={{
            y: windowHeight + 100,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export const SadConfettiAnimation = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
    const colors = ["#60A5FA", "#64748B", "#A3A3A3", "#CBD5E1", "#94A3B8"];
    const newConfetti: Confetti[] = [];

    for (let i = 0; i < 30; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 1.5,
        size: 8 + Math.random() * 8,
      });
    }

    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
            top: "-8%",
            width: `${piece.size}px`,
            height: `${piece.size * 1.7}px`,
            borderRadius: "50% 50% 60% 60% / 60% 60% 100% 100%",
            opacity: 0.7,
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
          }}
          initial={{ y: -100, rotate: 0, opacity: 0.7 }}
          animate={{
            y: windowHeight + 80,
            rotate: 20 + Math.random() * 40,
            opacity: 0.2,
          }}
          transition={{
            duration: 3.5,
            delay: piece.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

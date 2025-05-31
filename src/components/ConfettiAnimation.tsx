"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
}

export const ConfettiAnimation = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const colors = ["#D4E333", "#CFABFA", "#FFD700", "#FF6B6B", "#4ECDC4"];
    const newConfetti: Confetti[] = [];

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
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
            y: window.innerHeight + 100,
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

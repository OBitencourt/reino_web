"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Tipagem das bolinhas
interface Dot {
  id: number;
  size: number;
  top: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface MovingDotsProps {
  dotCount?: number;
}

export default function MovingDotsSide({ dotCount = 55 }: MovingDotsProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generateDots = (): Dot[] => {
      const newDots: Dot[] = [];

      for (let i = 0; i < dotCount; i++) {
        const size = Math.random() * 6 + 3; // entre 3 e 9px
        const top = Math.random() * 150; // posição vertical (%)
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 6;
        const opacity = Math.random() * 0.6 + 0.3;

        newDots.push({ id: i, size, top, delay, duration, opacity });
      }

      return newDots;
    };

    setDots(generateDots());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
        top: "400px"
      }}
    >
      {dots.map(({ id, size, top, delay, duration, opacity }) => (
        <motion.div
          key={id}
          initial={{ x: 10 }}
          animate={{ x: 2000 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration,
            delay,
          }}
          style={{
            position: "absolute",
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            backgroundColor: "var(--cs)", // 💡 usa a variável CSS
            opacity: "5px",
            boxShadow: `0 0 6px var(--cs)`,
          }}
        />
      ))}
    </div>
  );
}

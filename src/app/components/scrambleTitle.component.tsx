"use client";

import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";

const ALPHABET: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
const WORDS: string[] = ["Game Match", "Team Up", "Ranked Mode", "Duo Forge"];
const SWAP_SPEED_MS: number = 30;
const HOLD_TIME_MS: number = 800;

interface IScrambleTitleProps {
  swapSpeed?: number;
  holdTime?: number;
}

export const ScrambleTitle = ({
  swapSpeed = SWAP_SPEED_MS,
  holdTime = HOLD_TIME_MS,
}: IScrambleTitleProps): JSX.Element => {
  const [text, setText] = useState<string>(WORDS[0]);
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect((): (() => void) => {
    const currentWord: string = WORDS[wordIndex];
    let iterations: number = 0;
    let timeoutId: NodeJS.Timeout;

    const scramble = (): void => {
      const scrambled: string = currentWord
        .split("")
        .map((letter: string, index: number): string => {
          if (index < iterations) {
            return currentWord[index];
          }
          return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        })
        .join("");

      setText(scrambled);

      if (iterations >= currentWord.length) {
        timeoutId = setTimeout((): void => {
          setWordIndex((prev: number): number => (prev + 1) % WORDS.length);
        }, holdTime);
      } else {
        iterations += 1 / 3;
        timeoutId = setTimeout(scramble, swapSpeed);
      }
    };

    timeoutId = setTimeout(scramble, swapSpeed);

    return (): void => clearTimeout(timeoutId);
  }, [wordIndex, holdTime, swapSpeed]);

  return (
    <div className="relative flex items-center justify-center h-auto w-full bg-transparent overflow-visible px-4">
      <motion.h1
        layout
        className="relative z-10 font-mono text-5xl md:text-9xl font-black tracking-tighter uppercase cursor-default text-center break-all text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        data-testid="scramble-text"
      >
        {text}
      </motion.h1>
    </div>
  );
};

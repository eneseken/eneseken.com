import React, { useEffect, useCallback, useRef, useMemo } from 'react';

const WordAnimation = () => {
  const words = useMemo(() => ["UI/UX", "games", "web apps", "mobile apps", "things"], []);
  const currentIndexRef = useRef(0);
  const currentWordRef = useRef(words[currentIndexRef.current]);

  const getRandomChars = useCallback((length) => {
    const chars = "@!#%&?*_$~+=-|^<>[]{}"; // Special characters
    let randomChars = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomChars += chars.charAt(randomIndex);
    }

    return randomChars;
  }, []);

  const typeWord = useCallback((word) => {
    let index = 0;
    const interval = setInterval(() => {
      const randomChars = getRandomChars(word.length);
      let animatedWord = randomChars;

      for (let i = 0; i < index; i++) {
        animatedWord = animatedWord.substring(0, i) + word.charAt(i) + animatedWord.substring(i + 1);
      }

      const wordElement = document.getElementById("word");
      if (wordElement) {
        wordElement.textContent = animatedWord;
      }
      index++;

      if (index > word.length) {
        clearInterval(interval);
        currentIndexRef.current++;
        if (currentIndexRef.current >= words.length) {
          currentIndexRef.current = 0;
        }
        setTimeout(() => {
          currentWordRef.current = words[currentIndexRef.current];
          typeWord(currentWordRef.current);
        }, 2000); // Wait for 1 second before transitioning to the next word
      }
    }, 100); // Delay per letter (ms)

    return () => clearInterval(interval);
  }, [getRandomChars, words]);

  useEffect(() => {
    typeWord(currentWordRef.current);
  }, [typeWord]);

  return <span id="word"></span>;
};

export default WordAnimation;

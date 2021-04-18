import { useState, useRef } from 'react';

const colors = ['landing', 'dark', 'black', 'green', 'red'];
export const useRandomColor = () => {
  const [color, setColor] = useState(colors[0]);
  const lastColorRef = useRef();

  const randomColorRecursive = () => {
    const randomIdx = Math.floor(Math.random() * colors.length);
    if (randomIdx === lastColorRef.current) {
      return randomColorRecursive();
    }
    lastColorRef.current = randomIdx;
    return colors[randomIdx];
  };

  const getRandomColor = () => setColor(randomColorRecursive());

  return { color, getRandomColor };
};

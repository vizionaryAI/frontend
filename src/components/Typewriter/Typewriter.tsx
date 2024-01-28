import React, { useEffect, useState } from "react";

type Props = {
  text: string;
  typingSpeed?: number;
  enableVibration: boolean;
};

export const Typewriter: React.FC<Props> = ({
  text,
  typingSpeed = 100,
  enableVibration = false,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const textArray = text.split(" ");

  useEffect(() => {
    if (index < textArray.length) {
      const timer = setTimeout(() => {
        setDisplayedText(
          displayedText + (displayedText ? " " : "") + textArray[index]
        );
        setIndex(index + 1);
        if (enableVibration && "vibrate" in navigator) {
          navigator.vibrate(10);
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [displayedText, index, textArray, typingSpeed]);

  return <span>{displayedText}</span>;
};

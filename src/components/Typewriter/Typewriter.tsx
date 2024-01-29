import React, { useEffect, useState } from "react";

type Props = {
  text: string;
  typingSpeed?: number;
  enableVibration: boolean;
  onTextUpdate: () => void;
  setIsTyping: (isFinish: boolean) => void;
};

export const Typewriter: React.FC<Props> = ({
  text,
  typingSpeed = 60,
  enableVibration = false,
  onTextUpdate,
  setIsTyping,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const textArray = text.split(" ");

  useEffect(() => {
    setIsTyping(true);
    onTextUpdate?.();

    if (index < textArray.length) {
      const timer = setTimeout(
        () => {
          setDisplayedText(
            displayedText + (displayedText ? " " : "") + textArray[index]
          );
          setIndex(index + 1);
          if (enableVibration && "vibrate" in navigator) {
            navigator.vibrate(200);
          }
          onTextUpdate();
        },
        index === 0 ? 800 : typingSpeed // delay for first word
      );

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [
    displayedText,
    index,
    textArray,
    typingSpeed,
    enableVibration,
    onTextUpdate,
  ]);

  return <span>{displayedText}</span>;
};

import React from "react";
import Lottie from "react-lottie";
import { recordingAnimation } from "../../assets/animation/recording-animation";
import { RecordingState } from "../../types/chatbot";
import { waitingAnimation } from "../../assets/animation/waiting-animation";
import { listeningAnimation } from "../../assets/animation/listening-animation";

type Props = {
  animation: RecordingState;
};

const recordingOptions = {
  loop: true,
  autoplay: true,
  animationData: recordingAnimation,
};

const waitingOptions = {
  loop: true,
  autoplay: true,
  animationData: waitingAnimation,
};

const listeningOptions = {
  loop: true,
  autoplay: true,
  animationData: listeningAnimation,
};

export const RecordingAnimation: React.FC<Props> = ({ animation }) => {
  let options;

  switch (animation) {
    case RecordingState.Recording:
      options = recordingOptions;
      break;
    case RecordingState.Waiting:
      options = waitingOptions;
      break;
    case RecordingState.Listening:
      options = listeningOptions;
      break;
    default:
      return <></>;
  }

  return <Lottie options={options} height={"100%"} width={"100%"} />;
};

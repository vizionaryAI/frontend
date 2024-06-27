import React from "react";
import Lottie from "react-lottie";
import { recordingAnimation } from "../../assets/animation/recording-animation";
import { RecordingState } from "../../types/chatbot";
import { waitingAnimation } from "../../assets/animation/waiting-animation";
import { listeningAnimation } from "../../assets/animation/listening-animation";
import { HelpGuideAnimation } from "../../assets/animation/help-guide-animation";

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

const helpGuideOptions = {
  loop: true,
  autoplay: true,
  animationData: HelpGuideAnimation,
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
    case RecordingState.HelpGuideAnimation:
      options = helpGuideOptions;
      break;
    default:
      return <></>;
  }

  return <Lottie options={options} height={"100%"} width={"100%"} />;
};

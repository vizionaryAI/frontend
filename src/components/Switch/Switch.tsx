import React from "react";
import * as S from "./Switch.styles.ts";

interface Props {
  setSwitch: () => void;
  isVoiceMessage: boolean;
}

export const Switch: React.FC<Props> = ({ setSwitch, isVoiceMessage }) => {
  return (
    <S.SwitchContainer onClick={setSwitch}>
      <S.Slider isVoiceMessage={isVoiceMessage} />
    </S.SwitchContainer>
  );
};

import React from "react";
import * as S from "./Switch.styles";

interface Props {
  setSwitch: () => void;
  isVoiceMessage: boolean;
}

export const Switch: React.FC<Props> = ({ setSwitch, isVoiceMessage }) => {
  return (
    <S.Container>
      <S.Icon src={S.voice} alt="Voice Icon" />
      <S.SwitchContainer onClick={setSwitch}>
        <S.Slider isVoiceMessage={isVoiceMessage} />
      </S.SwitchContainer>
      <S.Icon src={S.keyboard} alt="Keyboard Icon" />
    </S.Container>
  );
};

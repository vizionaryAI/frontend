import React, { useState } from "react";
import * as S from "./UserWarning.styles";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  message: string;
};

export const UserWarning: React.FC<Props> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  };

  return (
    <S.WarningBoxContainer onClick={handleClick}>
      <S.InfoIcon icon={faInfoCircle} />
      {isVisible && <S.WarningText>{message}</S.WarningText>}
    </S.WarningBoxContainer>
  );
};

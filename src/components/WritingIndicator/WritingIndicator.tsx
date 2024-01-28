import { useContext } from "react";
import * as S from "./WritingIndicator.styles";
import { ThemeContext } from "styled-components";

export const WritingIndicator = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <S.Dot theme={theme} />
      <S.Dot theme={theme} />
      <S.Dot theme={theme} />
    </div>
  );
};

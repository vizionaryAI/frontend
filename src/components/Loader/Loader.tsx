import { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as S from "./Loader.styles.ts";

export const Loader = () => {
  const theme = useContext(ThemeContext);

  return (
    <S.Wrapper color={theme?.loaderBackground}>
      <S.Svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 830.000000 815.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <S.Path
          x="100%"
          y="100%"
          fontFamily="Arial"
          fontSize="450"
          textAnchor="middle"
          fill={theme?.loaderColor}
        >
          Aimful
        </S.Path>
      </S.Svg>
    </S.Wrapper>
  );
};

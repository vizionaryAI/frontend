import { ButtonHTMLAttributes, useContext } from "react";
import * as S from "./Button.styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ThemeContext } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: IconProp;
};

const Button = ({ icon, children, ...rest }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <S.Container {...rest} theme={theme}>
      {icon && <S.Icon icon={icon} />}
      {children}
    </S.Container>
  );
};

export default Button;

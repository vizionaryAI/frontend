import { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: IconProp;
};

const Button = ({ variant = "primary", icon, children, ...rest }: Props) => {
  return (
    <S.Container variant={variant} {...rest}>
      {icon && <S.Icon icon={icon} />}
      {children}
    </S.Container>
  );
};

export default Button;

import { useState } from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as S from "./HamburgerMenu.styles";

type Props = {
  themeChange: () => void;
};

export const HamburgerMenu: React.FC<Props> = ({ themeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.MenuContainer>
      <S.MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} /> {/* FontAwesome user ikon */}
      </S.MenuIcon>
      <S.MenuContent isopen={isOpen ? "true" : "false"}>
        <ThemeToggle toggleTheme={themeChange} />
        <LoginButton />
      </S.MenuContent>
    </S.MenuContainer>
  );
};

export default HamburgerMenu;

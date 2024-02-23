import styled, { DefaultTheme, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pulse = keyframes`
  0% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1.7);
  }
  100% {
    transform: scale(1.3);
  }
`;

export const WarningBoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  max-width: 50rem;
  cursor: pointer;
  padding-right: 1rem;
`;

export const WarningText = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 5px 10px;
  border: 1px solid #f5c6cb;
  border-radius: 3px;
  font-size: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  transition: visibility 0s linear 2500ms, opacity 2500ms;
  max-width: 30%;

  @media (max-width: 768px) {
    font-size: 0.55rem;
    max-width: 90%;
  }
`;

export const InfoIcon = styled(FontAwesomeIcon)<{ theme: DefaultTheme }>`
  animation: ${pulse} 2s infinite ease-in-out;
  z-index: 999;
  filter: ${({ theme }) =>
    theme.mode === "light"
      ? "brightness(1) invert(0)"
      : "brightness(1) invert(1)"};
`;

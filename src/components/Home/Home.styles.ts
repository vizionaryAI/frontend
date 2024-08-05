import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

export const LogoContainer = styled.div`
  width: 10rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    width: 8rem;
    margin-bottom: 0.1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div<{
  theme: DefaultTheme;
  disabled?: boolean;
}>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.mainColor};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 1.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin: 0.625rem;
  width: 15rem;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  border: 1px solid transparent;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: calc(1.5rem + 10px);
    border: 5px solid
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(128, 128, 128, 0.5)"};
    filter: blur(6px);
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    border-color: transparent;
    filter: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.text};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-weight: bold;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    text-align: left;
  }
`;

export const Notes = styled.p<{ theme: DefaultTheme }>`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.text};
  text-align: left;
  font-weight: normal;
  line-height: 1.15rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    line-height: 0.8rem;
  }
`;

export const Duration = styled.p<{ theme: DefaultTheme }>`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  text-align: right;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Overlay = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  h2 {
    color: ${({ theme }) => theme.highlightColor};
    text-align: center;
    font-size: 1rem;
    font-style: italic;
    margin: 0;
  }
`;

export const OverlayLogo = styled.img<{ theme: DefaultTheme }>`
  width: 1.8rem;
  margin: 0.4rem;
  filter: ${({ theme }) =>
    theme.mode === "dark"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};
`;

export const CardTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardLogo = styled.img<{ theme: DefaultTheme }>`
  width: 20px;
`;

export const Logo = styled.img<{ theme: DefaultTheme }>`
  width: 100%;
  filter: ${({ theme }) =>
    theme.mode === "dark"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  width: 100%;
  @media (max-width: 768px) {
    height: 50%;
  }
`;

export const IntroLogo = styled.img<{ theme: DefaultTheme }>`
  width: 10%;
  filter: ${({ theme }) =>
    theme.mode === "dark"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  color: ${({ theme }) => theme.highlightColor};
  font-weight: 100;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.highlightColor};
  font-weight: 300;
  font-style: italic;
  margin: 0;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartButton = styled.button<{ theme: DefaultTheme }>`
  margin-top: 1rem;
  width: 14rem;
  height: 2rem;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.highlightColor};
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0 0.4rem 1rem
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(255, 255, 255, 0.4)"
          : "rgba(128, 128, 128, 0.7)"};
  }
`;

export const ButtonTitle = styled.p<{ theme: DefaultTheme }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.mainColor};
`;

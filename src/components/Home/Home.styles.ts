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

  backdrop-filter: blur(1px);

  h2 {
    color: ${({ theme }) => theme.text};
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
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
  justify-content: center;
  height: 100%;
  gap: 0.6rem;

  @media (max-width: 768px) {
    gap: 0rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  align-self: center;
  font-weight: bold;

  margin-left: 5rem;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;

  font-style: italic;

  color: ${({ theme }) => theme.text};
  text-align: center;
  font-weight: bold;
  margin-top: 0rem;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }
`;

export const GreenText = styled.span`
  color: green;
`;

export const BlueText = styled.span<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.blue};
`;

export const ButtonTitle = styled.p<{ theme: DefaultTheme }>`
  font-size: 1rem;
  color: white;
`;

export const StartButton = styled.button<{ theme: DefaultTheme }>`
  margin-top: 1rem;
  width: 12rem;
  height: 3rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.blue};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: white;

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

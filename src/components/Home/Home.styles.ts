import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.homeCardBackground};
  }

  &:before {
    clip-path: polygon(51.4% 0%, 100% 26.8%, 100% 0%);
  }

  &:after {
    clip-path: polygon(0% 100%, 82.4% 100%, 0% 64.5%);
    right: 0;
    top: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.homeCardBackground};
    }

    &:before {
      clip-path: polygon(100% 0%, 100% 31%, 60.6% 0%);
    }

    &:after {
      clip-path: polygon(0% 100%, 82.4% 100%, 0% 77.5%);
      right: 0;
      top: 0;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  align-items: center;

  transform: translateY(-4rem);

  width: 100%;
  height: 100vh;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div<{
  theme: DefaultTheme;
  disabled?: boolean;
  blurred?: boolean;
}>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.homeDisabledCardBackground : theme.homeCardBackground};
  color: ${({ theme }) => theme.textLight};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.775);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin: 0.625rem;
  width: 15rem;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.cardShadow};
  }

  h2 {
    font-weight: normal;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.textLight};
    text-align: left;
    font-weight: bold;
  }

  @media (max-width: 550px) {
    width: 12rem;
    padding: 0.4rem;
    margin: 0.4rem;

    h2 {
      font-size: 0.8rem;
    }
  }
`;

export const Notes = styled.p<{ theme: DefaultTheme }>`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textLight};
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
  color: ${({ theme }) => theme.textLight};
  text-align: right;
  font-weight: normal;

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
    color: ${({ theme }) => theme.textLight};
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 8rem;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 1rem;
  transform: translateX(-13rem);

  @media (max-width: 768px) {
    padding-top: 20%;
    transform: translateX(0);
  }
`;

export const Logo = styled.img<{ theme: DefaultTheme }>`
  width: 100%;
  filter: ${({ theme }) =>
    theme.mode === "dark"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};
`;

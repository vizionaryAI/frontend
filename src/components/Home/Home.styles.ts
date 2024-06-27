import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
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
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s ease-in-out;
  opacity: ${({ disabled }) => (disabled ? 0.85 : 1)};
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.cardShadow};
  }

  h2 {
    font-weight: normal;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.textLight};
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 15rem;
    padding: 0.4rem;
    margin: 0.4rem;
  }
`;

export const Notes = styled.p<{ theme: DefaultTheme }>`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textLight};
  text-align: left;
  font-weight: normal;
  line-height: 1rem;
`;

export const Duration = styled.p<{ theme: DefaultTheme }>`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textLight};
  text-align: right;
  font-weight: normal;
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

  backdrop-filter: blur(2px);

  h2 {
    color: ${({ theme }) => theme.textLight};
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

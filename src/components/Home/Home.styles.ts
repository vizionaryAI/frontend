import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Card = styled.div<{ theme: DefaultTheme; disabled?: boolean }>`
  background-color: ${({ theme }) => theme.homeCardBackground};
  color: ${({ theme }) => theme.text};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: 1.25rem;
  margin: 0.625rem;
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease-in-out;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.cardShadow};
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    color: #333;
  }
  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
    padding: 0.4rem;
    margin: 0.4rem;
  }
`;

export const Notes = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: gray;
`;

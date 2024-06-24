import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50rem;
  width: 100%;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const Title = styled.p<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text};
  position: absolute;
  left: 50%;
  font-size: 1.2rem;
  transform: translateX(-50%);
  margin: 0;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: ${(props) => (props.isActive ? "#4CAF50" : "#ccc")};
  border-radius: 34px;
  transition: background-color 0.2s;
`;

export const SwitchButton = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
  transform: ${(props) =>
    props.isActive ? "translateX(26px)" : "translateX(0)"};
`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

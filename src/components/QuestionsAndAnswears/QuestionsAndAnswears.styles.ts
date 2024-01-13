import styled, { DefaultTheme } from "styled-components";

export const NotebookPage = styled.div<{ theme: DefaultTheme }>`
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif; /* Replace with actual handwriting font */
  background: ${(props) => props.theme.notebookBackground};
  color: ${(props) => props.theme.text};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 800px; /* or your preferred max width */
  max-height: 90vh; /* Adjust the height as necessary */
  overflow-y: auto; /* This will add scroll */
  border-radius: 10px;
  line-height: 1.6;

  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 31px,
    ${(props) => props.theme.border} 31px
  );
  background-size: 100% 32px; /* Height of the lines */
`;

export const Question = styled.h2`
  margin: 0;
  padding: 10px 0;
`;

export const Subtitle = styled.p`
  color: #666;
  margin: 0;
  padding: 5px 0;
`;

export const Message = styled.div<{ role: string; theme: DefaultTheme }>`
  background: ${(props) =>
    props.role === "user"
      ? props.theme.userTextBackground
      : props.theme.adviserTextBackground};
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  display: inline-block;
  font-weight: ${(props) => (props.role === "user" ? "bold" : "normal")};
`;

export const ErrorBox = styled.div`
  background-color: #ffccbc;
  color: #c62828;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;

export const Input = styled.input`
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif; // A jegyzetfüzet stílusú kézírás betűtípust használva
  background: transparent; // Átlátszó háttér, hogy illeszkedjen a NotebookPage háttérhez
  border: none; // Border eltávolítása
  border-bottom: 1px solid ${(props) => props.theme.border}; // Csak az alján vékony vonal, mint egy jegyzetfüzetben
  color: ${(props) => props.theme.text}; // Szöveg színe
  padding: 8px 10px; // Kényelmes térköz
  margin: 10px 0; // Külső térköz
  width: 100%; // Teljes szélesség kihasználása
  box-sizing: border-box; // Box-sizing a helyes méretezés érdekében

  &:focus {
    outline: none; // Fókuszáláskor az alapértelmezett keret eltávolítása
    border-bottom: 2px solid ${(props) => props.theme.highlight}; // Fókuszált állapotban vastagabb alsó vonal
  }

  &::placeholder {
    color: #999; // Helykitöltő szöveg színe
  }
`;

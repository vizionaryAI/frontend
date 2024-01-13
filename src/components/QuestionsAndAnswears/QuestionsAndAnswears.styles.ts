import styled from "styled-components";

export const NotebookPage = styled.div`
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif; /* Replace with actual handwriting font */
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 800px; /* or your preferred max width */
  max-height: 90vh; /* Adjust the height as necessary */
  overflow-y: auto; /* This will add scroll */
  border-radius: 10px;
  line-height: 1.6;
  border: 1px solid #ddd; /* Simulate the lines of a notebook */
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 31px,
    #eee 31px
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

export const Message = styled.div<{ isUser: boolean }>`
  background: ${(props) => (props.isUser ? "#e0f7fa" : "#f0f4c3")};
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  display: inline-block;
`;

export const ErrorBox = styled.div`
  background-color: #ffccbc;
  color: #c62828;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;

import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  max-height: 40rem;
  overflow-y: auto;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  background-color: #f4f7f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Message = styled.div`
  padding: 10px 15px;
  margin: 8px;
  border-radius: 20px;
  max-width: 80%;
  word-wrap: break-word;
  line-height: 1.4;
`;

export const UserMessage = styled(Message)`
  background-color: #007bff;
  color: white;
  align-self: flex-end;
`;

export const BotMessage = styled(Message)`
  background-color: #e1e9ee;
  color: #333;
  align-self: flex-start;
  border: 1px solid #d3d8db;
`;

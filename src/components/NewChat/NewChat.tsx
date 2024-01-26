import { useChatBotConversationStore } from "../../store/chatBotConversation.store";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";

export const NewChat: React.FC = () => {
  const { deleteChat } = useChatBotConversationStore();
  const { questionsAndAnswers } = useQuestionsAndAnswersStore();

  return (
    <>
      {questionsAndAnswers.finished_all && (
        <div onClick={deleteChat}>New Chat</div>
      )}
    </>
  );
};

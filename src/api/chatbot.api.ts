import { api } from ".";
import { ChatbotQuestionsAndAnswers } from "../types/chatbot";

export async function getQuestionsAndAnswersAPI(): Promise<ChatbotQuestionsAndAnswers> {
  try {
    const resp = await api.get(`api/v0/next`);
    return resp.data;
    // const dummyData: ChatbotQuestionsAndAnswers = {
    //   question: {
    //     title: "What are your career ambitions?",
    //     subtitle:
    //       "Imagine what an exciting career would look like. A career you are passionate about. What would this look like?",
    //     conversation: [
    //       {
    //         role: "user",
    //         message:
    //           "As a university student passionate about technology and innovation, my career ambition is to become a pioneering researcher in artificial intelligence. I envision working in a dynamic environment, constantly pushing the boundaries of what AI can achieve, particularly in enhancing human-machine interaction and ethical AI development. My dream career involves collaborating with a diverse team of experts, publishing groundbreaking research, and contributing to technologies that positively impact society.",
    //       },
    //       {
    //         role: "assistant",
    //         message:
    //           "That sounds like an excellent career choice. Can you please specify what level of seniority you are aiming for in this industry? Would you like to become a Manager, CEO, or perhaps work in a self-employed capacity?",
    //       },
    //       {
    //         role: "user",
    //         message:
    //           "In my envisioned career path in artificial intelligence, I aim to achieve a level of seniority that balances hands-on research with leadership. My goal is to become a Chief Technology Officer (CTO) in an innovative tech company, where I can lead cutting-edge AI projects while still being deeply involved in the research and development process. This role would allow me to shape the direction of AI advancements, mentor emerging talent in the field, and ensure ethical considerations are at the forefront of technological progress. Being a CTO would provide the perfect blend of leadership, innovation, and impact in the field I am passionate about.",
    //       },
    //       {
    //         role: "assistant",
    //         message:
    //           "Your aspirations are quite clear and well-explained. Now, can you please describe what tasks you envision doing on a daily basis as a CTO in an AI-related company?",
    //       },
    //       {
    //         role: "user",
    //         message:
    //           "In my envisioned career path in artificial intelligence, I aim to achieve a level of seniority that balances hands-on research with leadership. My goal is to become a Chief Technology Officer (CTO) in an innovative tech company, where I can lead cutting-edge AI projects while still being deeply involved in the research and development process. This role would allow me to shape the direction of AI advancements, mentor emerging talent in the field, and ensure ethical considerations are at the forefront of technological progress. Being a CTO would provide the perfect blend of leadership, innovation, and impact in the field I am passionate about.",
    //       },
    //       {
    //         role: "assistant",
    //         message:
    //           "That sounds like an excellent career choice. Can you please specify what level of seniority you are aiming for in this industry? Would you like to become a Manager, CEO, or perhaps work in a self-employed capacity?",
    //       },
    //     ],
    //     completed: false,
    //   },
    //   finished_all: false,
    //   error: null,
    // };

    // return dummyData;
  } catch (error) {
    console.log("Faild to get new questions: ", error);

    return {
      question: {
        title: "",
        subtitle: "",
        conversation: [],
        completed: false,
      },
      finished_all: false,
      error: "Failed to fetch data",
    };
  }
}

export async function sendAnswerAPI(
  Answer: string
): Promise<ChatbotQuestionsAndAnswers> {
  try {
    const resp = await api.post(`api/v0/next`, { Answer });
    return resp.data;
    ///=========================================================================
    //dummy data
    // const dummyData: ChatbotQuestionsAndAnswers = {
    //   question: {
    //     title: "What are your career ambitions?",
    //     subtitle:
    //       "Imagine what an exciting career would look like. A career you are passionate about. What would this look like?",
    //     conversation: [
    //       {
    //         role: "user",
    //         message:
    //           "As a university student passionate about technology and innovation, my career ambition is to become a pioneering researcher in artificial intelligence. I envision working in a dynamic environment, constantly pushing the boundaries of what AI can achieve, particularly in enhancing human-machine interaction and ethical AI development. My dream career involves collaborating with a diverse team of experts, publishing groundbreaking research, and contributing to technologies that positively impact society.",
    //       },
    //       {
    //         role: "assistant",
    //         message:
    //           "That sounds like an excellent career choice. Can you please specify what level of seniority you are aiming for in this industry? Would you like to become a Manager, CEO, or perhaps work in a self-employed capacity?",
    //       },
    //       {
    //         role: "user",
    //         message:
    //           "In my envisioned career path in artificial intelligence, I aim to achieve a level of seniority that balances hands-on research with leadership. My goal is to become a Chief Technology Officer (CTO) in an innovative tech company, where I can lead cutting-edge AI projects while still being deeply involved in the research and development process. This role would allow me to shape the direction of AI advancements, mentor emerging talent in the field, and ensure ethical considerations are at the forefront of technological progress. Being a CTO would provide the perfect blend of leadership, innovation, and impact in the field I am passionate about.",
    //       },
    //       {
    //         role: "assistant",
    //         message:
    //           "Your aspirations are quite clear and well-explained. Now, can you please describe what tasks you envision doing on a daily basis as a CTO in an AI-related company?",
    //       },
    //       {
    //         role: "user",
    //         message:
    //           "In my envisioned career path in artificial intelligence, I aim to achieve a level of seniority that balances hands-on research with leadership. My goal is to become a Chief Technology Officer (CTO) in an innovative tech company, where I can lead cutting-edge AI projects while still being deeply involved in the research and development process. This role would allow me to shape the direction of AI advancements, mentor emerging talent in the field, and ensure ethical considerations are at the forefront of technological progress. Being a CTO would provide the perfect blend of leadership, innovation, and impact in the field I am passionate about.",
    //       },
    //       {
    //         role: "assistant",
    //         message:
    //           "That sounds like an excellent career choice. Can you please specify what level of seniority you are aiming for in this industry? Would you like to become a Manager, CEO, or perhaps work in a self-employed capacity?",
    //       },
    //     ],
    //     completed: false,
    //   },
    //   finished_all: false,
    //   error: null,
    // };

    // dummyData.question.conversation.push({
    //   role: "user",
    //   message: Answer,
    // });

    // return dummyData;
  } catch (error) {
    console.log("Faild to send Answer: ", error);

    return {
      question: {
        title: "",
        subtitle: "",
        conversation: [],
        completed: false,
      },
      finished_all: false,
      error: "Failed to send Answer",
    };
  }
}

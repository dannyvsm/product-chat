import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  //initial message sent by the chatbot
  initialMessages: [
    createChatBotMessage(
      `Hello! I'm the Plain White Tshirt of your dreams. How can I help?`
    ),
  ],
};

export default config;

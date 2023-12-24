import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Bot/config.js';
import MessageParser from './Bot/MessageParser.jsx';
import ActionProvider from './Bot/ActionProvider.jsx';
import { useState } from 'react';
import { addMessage } from 'react-chatbot-kit';

function App() {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (message) => {
    console.log("hi")
    addMessage({
      text: message,
      isUser: true,
    });

    // Send a response to the user's message.
    addMessage({
      text: 'Hello, user!',
    });
  };
  return (
      <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        messages={messages}
        handleUserMessage={handleUserMessage}
      />
    </div>
  )
}

export default App

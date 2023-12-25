import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Bot/config.js';
import MessageParser from './Bot/MessageParser.jsx';
import ActionProvider from './Bot/ActionProvider.jsx';
import { useEffect, useState } from 'react';
import { addMessage } from 'react-chatbot-kit';
import io from "socket.io-client";
export const socket = io("ws://localhost:3000")
import "./App.css"
function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    socket.emit("create-conversation");
  }, [])
  socket.on('convo-creted', (convoID)=>{
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!")
    localStorage.setItem("convoID", convoID)
    localStorage.setItem("threadID", null)
  })

  
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
      <div className='styling-div' > 
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

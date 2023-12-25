import React from 'react';
import {socket}  from "../App"
import { useEffect } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    console.log("!!!!")
    // trial()
  };
  useEffect(()=>{
    socket.on("query-response", (data)=>{
      console.log("data",data)
      localStorage.setItem("threadID", data.threadID)
      alert(data.text)
      let botMessage = createChatBotMessage(data.text);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        }));
    })
  }, [])


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
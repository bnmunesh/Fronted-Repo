import React from 'react';
import {socket}  from "../App"

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log("children", children)
    if (message.includes('hello')) {
      actions.handleHello();
    }else{
      const convoID = localStorage.getItem("convoID");
      const threadID = localStorage.getItem("threadID");

      socket.emit("message", {message, threadID: threadID ? threadID :null, convoID})
      actions.handleHello()
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const socket = io("http://localhost:5000");
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      if (data) {
        if (data !== message) {
          console.log(data, "watching");
          setMessage((prevState) => data);
        }
      }
    });
    console.log("yikes?");
  }, [socket, message, setMessage]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;

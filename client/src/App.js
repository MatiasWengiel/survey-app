import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("The text has not loaded yet");
  useEffect(() => {
    axios.get("/api").then((res) => {
      setText(res.data);
    });
  }, []);

  return <div className="App">{text}</div>;
}

export default App;

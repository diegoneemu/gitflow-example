import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";

import "./App.css";

const getMessage = async () => {
  try {
    const response = await axios.get("/message");

    return response.statusText;
  } catch (err) {
    return err.message;
  }
};

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      const result = await getMessage();

      if (result.statusCode === 404) {
        setMessage("Não possível obter mensagem.");
      } else if (!didCancel) {
        setMessage(result);
      }
    }

    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
};

export default App;

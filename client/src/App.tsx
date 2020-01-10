import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import MainSection from "./MainSection";


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
      <Header />
      <MainSection><Home /></MainSection>
    </div>
  );
};

export default App;

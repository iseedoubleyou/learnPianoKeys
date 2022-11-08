import React from "react";
import './App.css';
import NotenQuiz from "./components/NotenQuiz";


function App() {
  return (
    <div id="App" className="App" style={{fontSize: "14px", fontWeight: "bold"}}>
      <h1>Notenquiz</h1>
      <NotenQuiz />
    </div>
  );
}

export default App;
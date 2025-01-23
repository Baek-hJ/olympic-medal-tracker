// src/App.jsx
import React from "react";
import MedalList from "./components/MedalList";

const App = () => {
  return (
    <div className="main-center">
      <p id="title">2024 파리 올림픽</p>
      <MedalList />
    </div>
  );
};
export default App;
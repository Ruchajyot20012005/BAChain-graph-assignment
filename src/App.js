import React from "react";
import "./App.css";
import ContainerFirst from "./components/ContainerFirst";
import ContainerSecond from "./components/ContainerSecond";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="left-section-bar"></div>
      <div className="right-section-page">
        <Navbar />
        <ContainerFirst />
        <ContainerSecond />
      </div>
    </div>
  );
}

export default App;

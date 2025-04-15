import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <div id="main-content">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

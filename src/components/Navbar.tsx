import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo-text">LLM Price Check</span>
      </div>
      <div className="powered-by">
        Powered by <span className="openai">OpenAI</span>
      </div>
    </header>
  );
};

export default Navbar;

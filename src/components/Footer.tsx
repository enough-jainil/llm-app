import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <h3>Source</h3>
          <div className="footer-links">
            <h4>Pricing</h4>
            <ul>
              <li>
                <a href="#">OpenAI Pricing</a>
              </li>
              <li>
                <a href="#">Anthropic Pricing</a>
              </li>
              <li>
                <a href="#">Google Cloud Pricing</a>
              </li>
              <li>
                <a href="#">AWS Pricing</a>
              </li>
              <li>
                <a href="#">Cohere Pricing</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <span>LLM Price Checker</span>
        <div className="footer-bottom-right">
          <a href="/contact" title="Contact LLM Price Checker">
            Contact us
          </a>
          <span>•</span>
          <a href="/credits" title="Credits and Attributions">
            Credits
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

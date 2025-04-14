import { useState } from "react";
import "./App.css";
import { llmModels, LLMModel } from "./data/llmModels";
import SearchBar from "./components/SearchBar";
import LLMTableRow from "./components/LLMTableRow";
import PricingCalculator from "./components/PricingCalculator";

type TabType = "comparison" | "calculator";

function App() {
  const [filteredModels, setFilteredModels] = useState<LLMModel[]>(llmModels);
  const [activeTab, setActiveTab] = useState<TabType>("comparison");

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredModels(llmModels);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = llmModels.filter(
      (model) =>
        model.name.toLowerCase().includes(lowercaseQuery) ||
        model.provider.name.toLowerCase().includes(lowercaseQuery)
    );

    setFilteredModels(filtered);
  };

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <span className="logo-text">🔍 LLM Price Check</span>
        </div>
        <div className="powered-by">
          <span>Powered by </span>
          <span className="openai">OpenAI</span>
        </div>
      </header>

      <main className="main-content">
        <h1 className="title">LLM Pricing</h1>
        <p className="description">
          Compare and calculate the exact prices for 170+ different Large
          Language Models (LLMs) from leading providers such as OpenAI, AWS,
          Anthropic, Cohere, Mistral, Meta, Claude, AI21, and more. Use our
          streamlined LLM Price Check tool to start optimizing your AI budget
          efficiently today!
        </p>

        <div className="tabs">
          <div
            className={`tab ${activeTab === "comparison" ? "active" : ""}`}
            onClick={() => handleTabClick("comparison")}
          >
            Price Comparison
          </div>
          <div
            className={`tab ${activeTab === "calculator" ? "active" : ""}`}
            onClick={() => handleTabClick("calculator")}
          >
            Pricing Calculator
          </div>
        </div>

        {activeTab === "comparison" && (
          <>
            <SearchBar onSearch={handleSearch} />

            <div className="pricing-table-container">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Provider</th>
                    <th>Quality</th>
                    <th>Context</th>
                    <th>Input $/1M</th>
                    <th>Output $/1M</th>
                    <th>Knowledge</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredModels.map((model) => (
                    <LLMTableRow key={model.id} model={model} />
                  ))}
                  {filteredModels.length === 0 && (
                    <tr>
                      <td colSpan={8} className="no-results">
                        No models found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "calculator" && <PricingCalculator />}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Source</h3>
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
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>🔍 LLM Price Check</span>
          <div className="footer-bottom-right">
            <span>Contact us</span>
            <span>•</span>
            <span>Credits</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

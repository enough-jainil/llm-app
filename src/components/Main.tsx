import React, { useState } from "react";
import "./Main.css";
import { llmModels, LLMModel } from "../data/llmModels";
import SearchBar from "./SearchBar";
import LLMTableRow from "./LLMTableRow";
import PricingCalculator from "./PricingCalculator";

type TabType = "comparison" | "calculator";

const Main: React.FC = () => {
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
    <main className="main-content">
      <div className="content-wrapper">
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
      </div>
    </main>
  );
};

export default Main;

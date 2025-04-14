import { useState, ChangeEvent } from "react";
import { llmModels, LLMModel } from "../data/llmModels";

type UnitType = "tokens" | "words" | "characters";

function PricingCalculator() {
  const [selectedModelId, setSelectedModelId] = useState<string>("");
  const [inputValue, setInputValue] = useState<number>(1000);
  const [outputValue, setOutputValue] = useState<number>(1000);
  const [apiCalls, setApiCalls] = useState<number>(1);
  const [selectedUnit, setSelectedUnit] = useState<UnitType>("tokens");
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  // Conversion rates (approximate)
  const TOKENS_PER_WORD = 1.3;
  const CHARS_PER_TOKEN = 4;

  const handleModelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedModelId(e.target.value);
    calculatePrice(e.target.value, inputValue, outputValue, apiCalls);
  };

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setInputValue(value);
    calculatePrice(selectedModelId, value, outputValue, apiCalls);
  };

  const handleOutputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setOutputValue(value);
    calculatePrice(selectedModelId, inputValue, value, apiCalls);
  };

  const handleApiCallsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setApiCalls(value);
    calculatePrice(selectedModelId, inputValue, outputValue, value);
  };

  const handleUnitChange = (unit: UnitType) => {
    setSelectedUnit(unit);
    calculatePrice(selectedModelId, inputValue, outputValue, apiCalls);
  };

  const convertToTokens = (value: number, unit: UnitType): number => {
    switch (unit) {
      case "words":
        return value * TOKENS_PER_WORD;
      case "characters":
        return value / CHARS_PER_TOKEN;
      default:
        return value;
    }
  };

  const calculatePrice = (
    modelId: string,
    inputs: number,
    outputs: number,
    calls: number
  ) => {
    if (!modelId) {
      setTotalPrice(null);
      return;
    }

    const model = llmModels.find((m) => m.id === modelId);
    if (!model) {
      setTotalPrice(null);
      return;
    }

    // Convert to tokens if using a different unit
    const inputTokens = convertToTokens(inputs, selectedUnit);
    const outputTokens = convertToTokens(outputs, selectedUnit);

    const inputCost = (inputTokens / 1000000) * model.inputPrice;
    const outputCost = (outputTokens / 1000000) * model.outputPrice;
    const totalCostPerCall = inputCost + outputCost;
    const totalCost = totalCostPerCall * calls;

    setTotalPrice(totalCost);
  };

  const getSelectedModel = () => {
    return llmModels.find((m) => m.id === selectedModelId);
  };

  // Calculate estimated price for a specific model
  const calculateModelPrice = (model: LLMModel) => {
    const inputTokens = convertToTokens(inputValue, selectedUnit);
    const outputTokens = convertToTokens(outputValue, selectedUnit);

    const inputCost = (inputTokens / 1000000) * model.inputPrice;
    const outputCost = (outputTokens / 1000000) * model.outputPrice;

    return (inputCost + outputCost) * apiCalls;
  };

  // Sort models by calculated price
  const getSortedModels = () => {
    return [...llmModels].sort((a, b) => {
      const priceA = calculateModelPrice(a);
      const priceB = calculateModelPrice(b);
      return priceA - priceB;
    });
  };

  return (
    <div className="pricing-calculator-container">
      <div className="pricing-calculator">
        <h2 className="calculator-title">LLM Price Calculator</h2>

        <div className="unit-selector">
          <div className="unit-tabs">
            <div
              className={`unit-tab ${
                selectedUnit === "tokens" ? "active" : ""
              }`}
              onClick={() => handleUnitChange("tokens")}
            >
              Tokens
            </div>
            <div
              className={`unit-tab ${selectedUnit === "words" ? "active" : ""}`}
              onClick={() => handleUnitChange("words")}
            >
              Words
            </div>
            <div
              className={`unit-tab ${
                selectedUnit === "characters" ? "active" : ""
              }`}
              onClick={() => handleUnitChange("characters")}
            >
              Characters
            </div>
          </div>
        </div>

        <div className="calculator-form">
          <div className="form-group">
            <label htmlFor="model-select">Select Model:</label>
            <select
              id="model-select"
              value={selectedModelId}
              onChange={handleModelChange}
              className="model-select"
            >
              <option value="">-- Select a model --</option>
              {llmModels.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name} ({model.provider.name})
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="input-value">Input {selectedUnit}:</label>
              <input
                id="input-value"
                type="number"
                min="0"
                value={inputValue}
                onChange={handleInputValueChange}
                className="token-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="output-value">Output {selectedUnit}:</label>
              <input
                id="output-value"
                type="number"
                min="0"
                value={outputValue}
                onChange={handleOutputValueChange}
                className="token-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="api-calls">API Calls:</label>
              <input
                id="api-calls"
                type="number"
                min="1"
                value={apiCalls}
                onChange={handleApiCallsChange}
                className="token-input"
              />
            </div>
          </div>
        </div>

        {selectedModelId && (
          <div className="price-details">
            <table className="price-table">
              <thead>
                <tr>
                  <th>API Calls</th>
                  <th>Input {selectedUnit}</th>
                  <th>Output {selectedUnit}</th>
                  <th>Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{apiCalls}</td>
                  <td>
                    {inputValue} {selectedUnit} × $
                    {(getSelectedModel()?.inputPrice || 0) / 1000000} per{" "}
                    {selectedUnit} = $
                    {(
                      (convertToTokens(inputValue, selectedUnit) / 1000000) *
                      (getSelectedModel()?.inputPrice || 0)
                    ).toFixed(6)}
                  </td>
                  <td>
                    {outputValue} {selectedUnit} × $
                    {(getSelectedModel()?.outputPrice || 0) / 1000000} per{" "}
                    {selectedUnit} = $
                    {(
                      (convertToTokens(outputValue, selectedUnit) / 1000000) *
                      (getSelectedModel()?.outputPrice || 0)
                    ).toFixed(6)}
                  </td>
                  <td>${totalPrice?.toFixed(6) || "0.000000"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="price-result">
          <h3>Estimated Total Price:</h3>
          {totalPrice !== null ? (
            <p className="price-value">${totalPrice.toFixed(6)}</p>
          ) : (
            <p className="price-placeholder">
              Select a model to calculate price
            </p>
          )}
        </div>

        <div className="unit-info">
          <h4>About Units</h4>
          <ul>
            <li>
              <strong>Tokens:</strong> The standard billing unit for LLMs. Most
              providers count both input and output tokens.
            </li>
            <li>
              <strong>Words:</strong> Approximately 1 word ≈ 1.3 tokens (varies
              by language and model).
            </li>
            <li>
              <strong>Characters:</strong> Approximately 4 characters ≈ 1 token
              (varies by language and model).
            </li>
          </ul>
          <p className="info-note">
            Note: Conversions are approximate and may vary by language, model,
            and content type.
          </p>
        </div>
      </div>

      <div className="model-comparison-section">
        <h3 className="comparison-title">
          Price Comparison for Current Settings
        </h3>
        <p className="comparison-subtitle">
          Prices calculated for {inputValue} {selectedUnit} input, {outputValue}{" "}
          {selectedUnit} output, and {apiCalls} API call
          {apiCalls !== 1 ? "s" : ""}
        </p>

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
                <th>Estimated Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getSortedModels().map((model) => (
                <tr
                  key={model.id}
                  className={
                    selectedModelId === model.id ? "selected-model-row" : ""
                  }
                >
                  <td>{model.name}</td>
                  <td>
                    <div className="provider-cell">
                      <img
                        src={model.provider.logo}
                        alt={model.provider.name}
                      />
                      {model.provider.name}
                    </div>
                  </td>
                  <td>{model.quality}</td>
                  <td>{model.context}</td>
                  <td>${model.inputPrice}</td>
                  <td>${model.outputPrice}</td>
                  <td className="estimated-cost">
                    ${calculateModelPrice(model).toFixed(6)}
                  </td>
                  <td className="action-cell">
                    <button className="action-button">Buy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PricingCalculator;

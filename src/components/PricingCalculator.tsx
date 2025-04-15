import { useState, ChangeEvent } from "react";
import { llmModels, LLMModel } from "../data/llmModels";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import "./PricingCalculator.css";

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
    calculatePrice(
      e.target.value,
      inputValue,
      outputValue,
      apiCalls,
      selectedUnit
    );
  };

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setInputValue(value);
    calculatePrice(selectedModelId, value, outputValue, apiCalls, selectedUnit);
  };

  const handleOutputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setOutputValue(value);
    calculatePrice(selectedModelId, inputValue, value, apiCalls, selectedUnit);
  };

  const handleApiCallsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setApiCalls(value);
    calculatePrice(
      selectedModelId,
      inputValue,
      outputValue,
      value,
      selectedUnit
    );
  };

  const handleUnitChange = (unit: UnitType) => {
    setSelectedUnit(unit);
    calculatePrice(selectedModelId, inputValue, outputValue, apiCalls, unit);
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
    calls: number,
    unit: UnitType
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

    // Convert to tokens using the passed unit
    const inputTokens = convertToTokens(inputs, unit);
    const outputTokens = convertToTokens(outputs, unit);

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
  const calculateModelPrice = (model: LLMModel, unit: UnitType) => {
    // Use passed unit for conversion
    const inputTokens = convertToTokens(inputValue, unit);
    const outputTokens = convertToTokens(outputValue, unit);

    const inputCost = (inputTokens / 1000000) * model.inputPrice;
    const outputCost = (outputTokens / 1000000) * model.outputPrice;

    const cost = (inputCost + outputCost) * apiCalls;
    // Ensure cost is slightly above zero for log scale
    return Math.max(cost, 0.00000001);
  };

  // Function to prepare data for the cost comparison chart - now includes all models
  const getCostComparisonData = () => {
    const data = llmModels.map((model) => ({
      name: model.name,
      provider: model.provider.name,
      cost: calculateModelPrice(model, selectedUnit),
      isSelected: model.id === selectedModelId,
    }));
    // Sort by cost (ascending)
    data.sort((a, b) => a.cost - b.cost);
    return data;
  };

  return (
    <div className="pricing-calculator-container">
      <div className="main-content-row">
        <div className="calculator-section">
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
                  className={`unit-tab ${
                    selectedUnit === "words" ? "active" : ""
                  }`}
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
                          (convertToTokens(inputValue, selectedUnit) /
                            1000000) *
                          (getSelectedModel()?.inputPrice || 0)
                        ).toFixed(6)}
                      </td>
                      <td>
                        {outputValue} {selectedUnit} × $
                        {(getSelectedModel()?.outputPrice || 0) / 1000000} per{" "}
                        {selectedUnit} = $
                        {(
                          (convertToTokens(outputValue, selectedUnit) /
                            1000000) *
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
                  <strong>Tokens:</strong> The standard billing unit for LLMs.
                  Most providers count both input and output tokens.
                </li>
                <li>
                  <strong>Words:</strong> Approximately 1 word ≈ 1.3 tokens
                  (varies by language and model).
                </li>
                <li>
                  <strong>Characters:</strong> Approximately 4 characters ≈ 1
                  token (varies by language and model).
                </li>
              </ul>
              <p className="info-note">
                Note: Conversions are approximate and may vary by language,
                model, and content type.
              </p>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <h3 className="comparison-title">Cost Comparison (Log Scale)</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={700}>
              <BarChart
                data={getCostComparisonData()}
                margin={{ top: 20, right: 30, left: 20, bottom: 150 }}
                layout="horizontal"
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  type="category"
                  interval={0}
                  angle={-90}
                  textAnchor="end"
                  height={160}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  type="number"
                  scale="log"
                  domain={["auto", "auto"]}
                  allowDataOverflow={true}
                  tickFormatter={(value) => `$${value.toFixed(6)}`}
                  width={90}
                />
                <Tooltip
                  formatter={(value, name, props) => [
                    `$${Number(value).toFixed(6)}`,
                    `${props.payload.name} (${props.payload.provider})`,
                  ]}
                />
                <Legend verticalAlign="top" height={36} />
                <Bar dataKey="cost" name="Estimated Cost" barSize={40}>
                  {getCostComparisonData().map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.isSelected ? "#4CAF50" : "#8884d8"}
                      stroke={entry.isSelected ? "#4CAF50" : "#8884d8"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="comparison-subtitle">
            Prices calculated for {inputValue} {selectedUnit} input,{" "}
            {outputValue} {selectedUnit} output, and {apiCalls} API call
            {apiCalls !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="model-comparison-section">
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
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {llmModels.map((model) => (
                <tr
                  key={model.id}
                  className={
                    selectedModelId === model.id ? "selected-model-row" : ""
                  }
                >
                  <td className="model-name">{model.name}</td>
                  <td>
                    <div className="provider-cell">
                      <img
                        src={model.provider.logo}
                        alt={model.provider.name}
                      />
                      {model.provider.name}
                    </div>
                  </td>
                  <td className="quality-cell">{model.quality}</td>
                  <td>{model.context}</td>
                  <td>${model.inputPrice}</td>
                  <td>${model.outputPrice}</td>
                  <td className="estimated-cost">
                    ${calculateModelPrice(model, selectedUnit).toFixed(6)}
                  </td>
                  {/* <td className="action-cell">
                    <button className="action-button">Buy</button>
                  </td> */}
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

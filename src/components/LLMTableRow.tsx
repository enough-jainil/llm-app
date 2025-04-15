import { LLMModel } from "../data/llmModels";

interface LLMTableRowProps {
  model: LLMModel;
}

function LLMTableRow({ model }: LLMTableRowProps) {
  return (
    <tr key={model.id}>
      <td className="model-name">{model.name}</td>
      <td>
        <div className="provider-cell">
          <img src={model.provider.logo} alt={model.provider.name} />
          {model.provider.name}
        </div>
      </td>
      <td className="quality-cell">{model.quality}</td>
      <td>{model.context}</td>
      <td>${model.inputPrice}</td>
      <td>${model.outputPrice}</td>
      <td>{model.knowledge}</td>
      {/* <td className="action-cell">
        <button className="action-button">Buy</button>
      </td> */}
    </tr>
  );
}

export default LLMTableRow;

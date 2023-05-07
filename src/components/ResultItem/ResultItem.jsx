import "./ResultItem.scss";

export default function ResultItem({ title, value }) {
  return (
    <li className="calculator__result">
      <div className="calculator__result-label">
        <span className="calculator__result-title">{title}</span>
        <span className="calculator__result-subtitle">/ person</span>
      </div>
      <span className="calculator__result-value">${value.toFixed(2)}</span>
    </li>
  );
}

import "./TipResults.scss";
import Button from "../Button/Button";
import ResultItem from "../ResultItem/ResultItem";

export default function TipResults({ tipEach, totalEach, handleReset }) {
  return (
    <section
      className={`calculator__result-group ${
        tipEach === 0.0 || totalEach === 0.0 ? "calculator__result-group--empty" : ""
      }`}
    >
      <ul className="calculator__result-list">
        <ResultItem title="Tip Amount" value={tipEach} />
        <ResultItem title="Total" value={totalEach} />
      </ul>
      <Button id="reset" name="reset" value="Reset" handleClick={handleReset} />
    </section>
  );
}

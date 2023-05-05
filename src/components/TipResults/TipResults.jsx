import { useState } from "react";
import Button from "../Button/Button";
import ResultItem from "../ResultItem/ResultItem";

export default function TipResults() {
  const [splitResult, setSplitResult] = useState({
    tipEach: 0.0,
    totalEach: 0.0,
  });

  function calculateSplit(inputs) {
    console.log(inputs);
    // setSplitResult((previousSplit) => {
    //   return {
    //     tipEach: 0.0,
    //     totalEach: 0.0,
    //   };
    // });
  }

  return (
    <section className="calculator__result-group">
      <ul className="calculator__result-list">
        <ResultItem title="Tip Amount" value={splitResult.tipEach} />
        <ResultItem title="Total" value={splitResult.totalEach} />
      </ul>
      <Button id="reset" name="reset" value="Reset" />
    </section>
  );
}

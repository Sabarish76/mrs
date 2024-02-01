import React, { useEffect, useState } from "react";

function FrontBack() {
  const [FrontBackenteredNumber, setFrontBackEnteredNumber] = useState("");
  const [FrontBackinitialEnteredNumber, setFrontBackInitialEnteredNumber] =
    useState("");
  const [FrontBackfinished, setFrontBackFinished] = useState("");
  const [FrontBackdisplayedNumber, setFrontBackDisplayedNumber] =
    useState(null);
  const [FrontBackfinishedNumber, setFrontBackFinishedNumber] = useState(null);

  useEffect(() => {
    const FrontBackstoredEnteredNumber = localStorage.getItem(
      "FrontBackenteredNumber"
    );
    const FrontBackstoredFinishedNumber = localStorage.getItem(
      "FrontBackfinishedNumber"
    );

    if (FrontBackstoredEnteredNumber) {
      setFrontBackDisplayedNumber(FrontBackstoredEnteredNumber);
      setFrontBackInitialEnteredNumber(FrontBackstoredEnteredNumber);
    }

    if (FrontBackstoredFinishedNumber) {
      setFrontBackFinishedNumber(FrontBackstoredFinishedNumber);
    }
  }, []);

  const FrontBackhandleInputChange = (e) => {
    setFrontBackEnteredNumber(e.target.value);
    setFrontBackFinishedNumber(null);
    setFrontBackInitialEnteredNumber(e.target.value);
  };

  const FrontBackhandleFinishedInputChange = (e) => {
    setFrontBackFinished(e.target.value);
  };

  const FrontBackhandleButtonClick = () => {
    setFrontBackDisplayedNumber(FrontBackenteredNumber);
    setFrontBackInitialEnteredNumber(FrontBackenteredNumber);
    setFrontBackFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("FrontBackenteredNumber", FrontBackenteredNumber);
  };

  const FrontBackhandleButtonClick2 = () => {
    const FrontBackremaining =
      FrontBackfinishedNumber === null
        ? FrontBackinitialEnteredNumber - FrontBackfinished
        : FrontBackfinishedNumber - FrontBackfinished;

    setFrontBackFinishedNumber(FrontBackremaining);

    localStorage.setItem("FrontBackfinishedNumber", FrontBackremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Front Back </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={FrontBackenteredNumber}
            onChange={FrontBackhandleInputChange}
          />
        </label>
        <button onClick={FrontBackhandleButtonClick}>submit</button>
        {FrontBackdisplayedNumber && <p>Total: {FrontBackdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={FrontBackfinished}
            onChange={FrontBackhandleFinishedInputChange}
          />
          <button onClick={FrontBackhandleButtonClick2}>submit</button>
          {FrontBackfinishedNumber !== null && (
            <p>Remaining: {FrontBackfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default FrontBack;

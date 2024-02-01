import React, { useEffect, useState } from "react";

function SleeveMouth() {
  const [SleeveMouthenteredNumber, setSleeveMouthEnteredNumber] = useState("");
  const [SleeveMouthinitialEnteredNumber, setSleeveMouthInitialEnteredNumber] =
    useState("");
  const [SleeveMouthfinished, setSleeveMouthFinished] = useState("");
  const [SleeveMouthdisplayedNumber, setSleeveMouthDisplayedNumber] =
    useState(null);
  const [SleeveMouthfinishedNumber, setSleeveMouthFinishedNumber] =
    useState(null);

  useEffect(() => {
    const SleeveMouthstoredEnteredNumber = localStorage.getItem(
      "SleeveMouthenteredNumber"
    );
    const SleeveMouthstoredFinishedNumber = localStorage.getItem(
      "SleeveMouthfinishedNumber"
    );

    if (SleeveMouthstoredEnteredNumber) {
      setSleeveMouthDisplayedNumber(SleeveMouthstoredEnteredNumber);
      setSleeveMouthInitialEnteredNumber(SleeveMouthstoredEnteredNumber);
    }

    if (SleeveMouthstoredFinishedNumber) {
      setSleeveMouthFinishedNumber(SleeveMouthstoredFinishedNumber);
    }
  }, []);

  const SleeveMouthhandleInputChange = (e) => {
    setSleeveMouthEnteredNumber(e.target.value);
    setSleeveMouthFinishedNumber(null);
    setSleeveMouthInitialEnteredNumber(e.target.value);
  };

  const SleeveMouthhandleFinishedInputChange = (e) => {
    setSleeveMouthFinished(e.target.value);
  };

  const SleeveMouthhandleButtonClick = () => {
    setSleeveMouthDisplayedNumber(SleeveMouthenteredNumber);
    setSleeveMouthInitialEnteredNumber(SleeveMouthenteredNumber);
    setSleeveMouthFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("SleeveMouthenteredNumber", SleeveMouthenteredNumber);
  };

  const SleeveMouthhandleButtonClick2 = () => {
    const SleeveMouthremaining =
      SleeveMouthfinishedNumber === null
        ? SleeveMouthinitialEnteredNumber - SleeveMouthfinished
        : SleeveMouthfinishedNumber - SleeveMouthfinished;

    setSleeveMouthFinishedNumber(SleeveMouthremaining);

    localStorage.setItem("SleeveMouthfinishedNumber", SleeveMouthremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Sleeve Mouth </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={SleeveMouthenteredNumber}
            onChange={SleeveMouthhandleInputChange}
          />
        </label>
        <button onClick={SleeveMouthhandleButtonClick}>submit</button>
        {SleeveMouthdisplayedNumber && (
          <p>Total: {SleeveMouthdisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={SleeveMouthfinished}
            onChange={SleeveMouthhandleFinishedInputChange}
          />
          <button onClick={SleeveMouthhandleButtonClick2}>submit</button>
          {SleeveMouthfinishedNumber !== null && (
            <p>Remaining: {SleeveMouthfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default SleeveMouth;

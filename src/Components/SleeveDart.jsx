import React, { useEffect, useState } from "react";

function SleeveDart() {
  const [SleeveDartenteredNumber, setSleeveDartEnteredNumber] = useState("");
  const [SleeveDartinitialEnteredNumber, setSleeveDartInitialEnteredNumber] =
    useState("");
  const [SleeveDartfinished, setSleeveDartFinished] = useState("");
  const [SleeveDartdisplayedNumber, setSleeveDartDisplayedNumber] =
    useState(null);
  const [SleeveDartfinishedNumber, setSleeveDartFinishedNumber] =
    useState(null);

  useEffect(() => {
    const SleeveDartstoredEnteredNumber = localStorage.getItem(
      "SleeveDartenteredNumber"
    );
    const SleeveDartstoredFinishedNumber = localStorage.getItem(
      "SleeveDartfinishedNumber"
    );

    if (SleeveDartstoredEnteredNumber) {
      setSleeveDartDisplayedNumber(SleeveDartstoredEnteredNumber);
      setSleeveDartInitialEnteredNumber(SleeveDartstoredEnteredNumber);
    }

    if (SleeveDartstoredFinishedNumber) {
      setSleeveDartFinishedNumber(SleeveDartstoredFinishedNumber);
    }
  }, []);

  const SleeveDarthandleInputChange = (e) => {
    setSleeveDartEnteredNumber(e.target.value);
    setSleeveDartFinishedNumber(null);
    setSleeveDartInitialEnteredNumber(e.target.value);
  };

  const SleeveDarthandleFinishedInputChange = (e) => {
    setSleeveDartFinished(e.target.value);
  };

  const SleeveDarthandleButtonClick = () => {
    setSleeveDartDisplayedNumber(SleeveDartenteredNumber);
    setSleeveDartInitialEnteredNumber(SleeveDartenteredNumber);
    setSleeveDartFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("SleeveDartenteredNumber", SleeveDartenteredNumber);
  };

  const SleeveDarthandleButtonClick2 = () => {
    const SleeveDartremaining =
      SleeveDartfinishedNumber === null
        ? SleeveDartinitialEnteredNumber - SleeveDartfinished
        : SleeveDartfinishedNumber - SleeveDartfinished;

    setSleeveDartFinishedNumber(SleeveDartremaining);

    localStorage.setItem("SleeveDartfinishedNumber", SleeveDartremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Sleeve Dart</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={SleeveDartenteredNumber}
            onChange={SleeveDarthandleInputChange}
          />
        </label>
        <button onClick={SleeveDarthandleButtonClick}>submit</button>
        {SleeveDartdisplayedNumber && <p>Total: {SleeveDartdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={SleeveDartfinished}
            onChange={SleeveDarthandleFinishedInputChange}
          />
          <button onClick={SleeveDarthandleButtonClick2}>submit</button>
          {SleeveDartfinishedNumber !== null && (
            <p>Remaining: {SleeveDartfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default SleeveDart;

import React, { useEffect, useState } from "react";

function CuffReady() {
  const [CuffReadyenteredNumber, setCuffReadyEnteredNumber] = useState("");
  const [CuffReadyinitialEnteredNumber, setCuffReadyInitialEnteredNumber] =
    useState("");
  const [CuffReadyfinished, setCuffReadyFinished] = useState("");
  const [CuffReadydisplayedNumber, setCuffReadyDisplayedNumber] =
    useState(null);
  const [CuffReadyfinishedNumber, setCuffReadyFinishedNumber] = useState(null);

  useEffect(() => {
    const CuffReadystoredEnteredNumber = localStorage.getItem(
      "CuffReadyenteredNumber"
    );
    const CuffReadystoredFinishedNumber = localStorage.getItem(
      "CuffReadyfinishedNumber"
    );

    if (CuffReadystoredEnteredNumber) {
      setCuffReadyDisplayedNumber(CuffReadystoredEnteredNumber);
      setCuffReadyInitialEnteredNumber(CuffReadystoredEnteredNumber);
    }

    if (CuffReadystoredFinishedNumber) {
      setCuffReadyFinishedNumber(CuffReadystoredFinishedNumber);
    }
  }, []);

  const CuffReadyhandleInputChange = (e) => {
    setCuffReadyEnteredNumber(e.target.value);
    setCuffReadyFinishedNumber(null);
    setCuffReadyInitialEnteredNumber(e.target.value);
  };

  const CuffReadyhandleFinishedInputChange = (e) => {
    setCuffReadyFinished(e.target.value);
  };

  const CuffReadyhandleButtonClick = () => {
    setCuffReadyDisplayedNumber(CuffReadyenteredNumber);
    setCuffReadyInitialEnteredNumber(CuffReadyenteredNumber);
    setCuffReadyFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("CuffReadyenteredNumber", CuffReadyenteredNumber);
  };

  const CuffReadyhandleButtonClick2 = () => {
    const CuffReadyremaining =
      CuffReadyfinishedNumber === null
        ? CuffReadyinitialEnteredNumber - CuffReadyfinished
        : CuffReadyfinishedNumber - CuffReadyfinished;

    setCuffReadyFinishedNumber(CuffReadyremaining);

    localStorage.setItem("CuffReadyfinishedNumber", CuffReadyremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Cuff Ready</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={CuffReadyenteredNumber}
            onChange={CuffReadyhandleInputChange}
          />
        </label>
        <button onClick={CuffReadyhandleButtonClick}>submit</button>
        {CuffReadydisplayedNumber && <p>Total: {CuffReadydisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={CuffReadyfinished}
            onChange={CuffReadyhandleFinishedInputChange}
          />
          <button onClick={CuffReadyhandleButtonClick2}>submit</button>
          {CuffReadyfinishedNumber !== null && (
            <p>Remaining: {CuffReadyfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default CuffReady;

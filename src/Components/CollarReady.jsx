import React, { useEffect, useState } from "react";

function CollarReady() {
  const [CollarReadyenteredNumber, setCollarReadyEnteredNumber] = useState("");
  const [CollarReadyinitialEnteredNumber, setCollarReadyInitialEnteredNumber] =
    useState("");
  const [CollarReadyfinished, setCollarReadyFinished] = useState("");
  const [CollarReadydisplayedNumber, setCollarReadyDisplayedNumber] =
    useState(null);
  const [CollarReadyfinishedNumber, setCollarReadyFinishedNumber] =
    useState(null);

  useEffect(() => {
    const CollarReadystoredEnteredNumber = localStorage.getItem(
      "CollarReadyenteredNumber"
    );
    const CollarReadystoredFinishedNumber = localStorage.getItem(
      "CollarReadyfinishedNumber"
    );

    if (CollarReadystoredEnteredNumber) {
      setCollarReadyDisplayedNumber(CollarReadystoredEnteredNumber);
      setCollarReadyInitialEnteredNumber(CollarReadystoredEnteredNumber);
    }

    if (CollarReadystoredFinishedNumber) {
      setCollarReadyFinishedNumber(CollarReadystoredFinishedNumber);
    }
  }, []);

  const CollarReadyhandleInputChange = (e) => {
    setCollarReadyEnteredNumber(e.target.value);
    setCollarReadyFinishedNumber(null);
    setCollarReadyInitialEnteredNumber(e.target.value);
  };

  const CollarReadyhandleFinishedInputChange = (e) => {
    setCollarReadyFinished(e.target.value);
  };

  const CollarReadyhandleButtonClick = () => {
    setCollarReadyDisplayedNumber(CollarReadyenteredNumber);
    setCollarReadyInitialEnteredNumber(CollarReadyenteredNumber);
    setCollarReadyFinishedNumber(null);

    localStorage.setItem("CollarReadyenteredNumber", CollarReadyenteredNumber);
  };

  const CollarReadyhandleButtonClick2 = () => {
    const CollarReadyremaining =
      CollarReadyfinishedNumber === null
        ? CollarReadyinitialEnteredNumber - CollarReadyfinished
        : CollarReadyfinishedNumber - CollarReadyfinished;

    setCollarReadyFinishedNumber(CollarReadyremaining);

    localStorage.setItem("CollarReadyfinishedNumber", CollarReadyremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Collar Ready</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={CollarReadyenteredNumber}
            onChange={CollarReadyhandleInputChange}
          />
        </label>
        <button onClick={CollarReadyhandleButtonClick}>submit</button>
        {CollarReadydisplayedNumber && (
          <p>Total: {CollarReadydisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={CollarReadyfinished}
            onChange={CollarReadyhandleFinishedInputChange}
          />
          <button onClick={CollarReadyhandleButtonClick2}>submit</button>
          {CollarReadyfinishedNumber !== null && (
            <p>Remaining: {CollarReadyfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default CollarReady;

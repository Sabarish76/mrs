import React, { useEffect, useState } from "react";

function Sleeve_dart() {
  const [Sleeve_dartenteredNumber, setSleeve_dartEnteredNumber] = useState("");
  const [Sleeve_dartinitialEnteredNumber, setSleeve_dartInitialEnteredNumber] =
    useState("");
  const [Sleeve_dartfinished, setSleeve_dartFinished] = useState("");
  const [Sleeve_dartdisplayedNumber, setSleeve_dartDisplayedNumber] =
    useState(null);
  const [Sleeve_dartfinishedNumber, setSleeve_dartFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Sleeve_dartstoredEnteredNumber = localStorage.getItem(
      "Sleeve_dartenteredNumber"
    );
    const Sleeve_dartstoredFinishedNumber = localStorage.getItem(
      "Sleeve_dartfinishedNumber"
    );

    if (Sleeve_dartstoredEnteredNumber) {
      setSleeve_dartDisplayedNumber(Sleeve_dartstoredEnteredNumber);
      setSleeve_dartInitialEnteredNumber(Sleeve_dartstoredEnteredNumber);
    }

    if (Sleeve_dartstoredFinishedNumber) {
      setSleeve_dartFinishedNumber(Sleeve_dartstoredFinishedNumber);
    }
  }, []);

  const Sleeve_darthandleInputChange = (e) => {
    setSleeve_dartEnteredNumber(e.target.value);
    setSleeve_dartFinishedNumber(null);
    setSleeve_dartInitialEnteredNumber(e.target.value);
  };

  const Sleeve_darthandleFinishedInputChange = (e) => {
    setSleeve_dartFinished(e.target.value);
  };

  const Sleeve_darthandleButtonClick = () => {
    setSleeve_dartDisplayedNumber(Sleeve_dartenteredNumber);
    setSleeve_dartInitialEnteredNumber(Sleeve_dartenteredNumber);
    setSleeve_dartFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("Sleeve_dartenteredNumber", Sleeve_dartenteredNumber);
  };

  const Sleeve_darthandleButtonClick2 = () => {
    const Sleeve_dartremaining =
      Sleeve_dartfinishedNumber === null
        ? Sleeve_dartinitialEnteredNumber - Sleeve_dartfinished
        : Sleeve_dartfinishedNumber - Sleeve_dartfinished;

    setSleeve_dartFinishedNumber(Sleeve_dartremaining);

    localStorage.setItem("Sleeve_dartfinishedNumber", Sleeve_dartremaining);
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
            value={Sleeve_dartenteredNumber}
            onChange={Sleeve_darthandleInputChange}
          />
        </label>
        <button onClick={Sleeve_darthandleButtonClick}>submit</button>
        {Sleeve_dartdisplayedNumber && (
          <p>Total: {Sleeve_dartdisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Sleeve_dartfinished}
            onChange={Sleeve_darthandleFinishedInputChange}
          />
          <button onClick={Sleeve_darthandleButtonClick2}>submit</button>
          {Sleeve_dartfinishedNumber !== null && (
            <p>Remaining: {Sleeve_dartfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Sleeve_dart;

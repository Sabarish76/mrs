import React, { useEffect, useState } from "react";

function Cuff_ready() {
  const [Cuff_readyenteredNumber, setCuff_readyEnteredNumber] = useState("");
  const [Cuff_readyinitialEnteredNumber, setCuff_readyInitialEnteredNumber] =
    useState("");
  const [Cuff_readyfinished, setCuff_readyFinished] = useState("");
  const [Cuff_readydisplayedNumber, setCuff_readyDisplayedNumber] =
    useState(null);
  const [Cuff_readyfinishedNumber, setCuff_readyFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Cuff_readystoredEnteredNumber = localStorage.getItem(
      "Cuff_readyenteredNumber"
    );
    const Cuff_readystoredFinishedNumber = localStorage.getItem(
      "Cuff_readyfinishedNumber"
    );

    if (Cuff_readystoredEnteredNumber) {
      setCuff_readyDisplayedNumber(Cuff_readystoredEnteredNumber);
      setCuff_readyInitialEnteredNumber(Cuff_readystoredEnteredNumber);
    }

    if (Cuff_readystoredFinishedNumber) {
      setCuff_readyFinishedNumber(Cuff_readystoredFinishedNumber);
    }
  }, []);

  const Cuff_readyhandleInputChange = (e) => {
    setCuff_readyEnteredNumber(e.target.value);
    setCuff_readyFinishedNumber(null);
    setCuff_readyInitialEnteredNumber(e.target.value);
  };

  const Cuff_readyhandleFinishedInputChange = (e) => {
    setCuff_readyFinished(e.target.value);
  };

  const Cuff_readyhandleButtonClick = () => {
    setCuff_readyDisplayedNumber(Cuff_readyenteredNumber);
    setCuff_readyInitialEnteredNumber(Cuff_readyenteredNumber);
    setCuff_readyFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("Cuff_readyenteredNumber", Cuff_readyenteredNumber);
  };

  const Cuff_readyhandleButtonClick2 = () => {
    const Cuff_readyremaining =
      Cuff_readyfinishedNumber === null
        ? Cuff_readyinitialEnteredNumber - Cuff_readyfinished
        : Cuff_readyfinishedNumber - Cuff_readyfinished;

    setCuff_readyFinishedNumber(Cuff_readyremaining);

    localStorage.setItem("Cuff_readyfinishedNumber", Cuff_readyremaining);
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
            value={Cuff_readyenteredNumber}
            onChange={Cuff_readyhandleInputChange}
          />
        </label>
        <button onClick={Cuff_readyhandleButtonClick}>submit</button>
        {Cuff_readydisplayedNumber && <p>Total: {Cuff_readydisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Cuff_readyfinished}
            onChange={Cuff_readyhandleFinishedInputChange}
          />
          <button onClick={Cuff_readyhandleButtonClick2}>submit</button>
          {Cuff_readyfinishedNumber !== null && (
            <p>Remaining: {Cuff_readyfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Cuff_ready;

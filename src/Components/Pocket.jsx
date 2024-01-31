import React, { useEffect, useState } from "react";

function Pocket() {
  const [PocketenteredNumber, setPocketEnteredNumber] = useState("");
  const [PocketinitialEnteredNumber, setPocketInitialEnteredNumber] =
    useState("");
  const [Pocketfinished, setPocketFinished] = useState("");
  const [PocketdisplayedNumber, setPocketDisplayedNumber] = useState(null);
  const [PocketfinishedNumber, setPocketFinishedNumber] = useState(null);

  useEffect(() => {
    const PocketstoredEnteredNumber = localStorage.getItem(
      "PocketenteredNumber"
    );
    const PocketstoredFinishedNumber = localStorage.getItem(
      "PocketfinishedNumber"
    );

    if (PocketstoredEnteredNumber) {
      setPocketDisplayedNumber(PocketstoredEnteredNumber);
      setPocketInitialEnteredNumber(PocketstoredEnteredNumber);
    }

    if (PocketstoredFinishedNumber) {
      setPocketFinishedNumber(PocketstoredFinishedNumber);
    }
  }, []);

  const PockethandleInputChange = (e) => {
    setPocketEnteredNumber(e.target.value);
    setPocketFinishedNumber(null);
    setPocketInitialEnteredNumber(e.target.value);
  };

  const PockethandleFinishedInputChange = (e) => {
    setPocketFinished(e.target.value);
  };

  const PockethandleButtonClick = () => {
    setPocketDisplayedNumber(PocketenteredNumber);
    setPocketInitialEnteredNumber(PocketenteredNumber);
    setPocketFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("PocketenteredNumber", PocketenteredNumber);
  };

  const PockethandleButtonClick2 = () => {
    const Pocketremaining =
      PocketfinishedNumber === null
        ? PocketinitialEnteredNumber - Pocketfinished
        : PocketfinishedNumber - Pocketfinished;

    setPocketFinishedNumber(Pocketremaining);

    localStorage.setItem("PocketfinishedNumber", Pocketremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Pocket </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={PocketenteredNumber}
            onChange={PockethandleInputChange}
          />
        </label>
        <button onClick={PockethandleButtonClick}>submit</button>
        {PocketdisplayedNumber && <p>Total: {PocketdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Pocketfinished}
            onChange={PockethandleFinishedInputChange}
          />
          <button onClick={PockethandleButtonClick2}>submit</button>
          {PocketfinishedNumber !== null && (
            <p>Remaining: {PocketfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Pocket;

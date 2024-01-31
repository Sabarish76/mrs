import React, { useEffect, useState } from "react";

function Sleeve_ts() {
  const [Sleeve_tsenteredNumber, setSleeve_tsEnteredNumber] = useState("");
  const [Sleeve_tsinitialEnteredNumber, setSleeve_tsInitialEnteredNumber] =
    useState("");
  const [Sleeve_tsfinished, setSleeve_tsFinished] = useState("");
  const [Sleeve_tsdisplayedNumber, setSleeve_tsDisplayedNumber] =
    useState(null);
  const [Sleeve_tsfinishedNumber, setSleeve_tsFinishedNumber] = useState(null);

  useEffect(() => {
    const Sleeve_tsstoredEnteredNumber = localStorage.getItem(
      "Sleeve_tsenteredNumber"
    );
    const Sleeve_tsstoredFinishedNumber = localStorage.getItem(
      "Sleeve_tsfinishedNumber"
    );

    if (Sleeve_tsstoredEnteredNumber) {
      setSleeve_tsDisplayedNumber(Sleeve_tsstoredEnteredNumber);
      setSleeve_tsInitialEnteredNumber(Sleeve_tsstoredEnteredNumber);
    }

    if (Sleeve_tsstoredFinishedNumber) {
      setSleeve_tsFinishedNumber(Sleeve_tsstoredFinishedNumber);
    }
  }, []);

  const Sleeve_tshandleInputChange = (e) => {
    setSleeve_tsEnteredNumber(e.target.value);
    setSleeve_tsFinishedNumber(null);
    setSleeve_tsInitialEnteredNumber(e.target.value);
  };

  const Sleeve_tshandleFinishedInputChange = (e) => {
    setSleeve_tsFinished(e.target.value);
  };

  const Sleeve_tshandleButtonClick = () => {
    setSleeve_tsDisplayedNumber(Sleeve_tsenteredNumber);
    setSleeve_tsInitialEnteredNumber(Sleeve_tsenteredNumber);
    setSleeve_tsFinishedNumber(null);

    localStorage.setItem("Sleeve_tsenteredNumber", Sleeve_tsenteredNumber);
  };

  const Sleeve_tshandleButtonClick2 = () => {
    const Sleeve_tsremaining =
      Sleeve_tsfinishedNumber === null
        ? Sleeve_tsinitialEnteredNumber - Sleeve_tsfinished
        : Sleeve_tsfinishedNumber - Sleeve_tsfinished;

    setSleeve_tsFinishedNumber(Sleeve_tsremaining);

    localStorage.setItem("Sleeve_tsfinishedNumber", Sleeve_tsremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Sleeve Ts </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={Sleeve_tsenteredNumber}
            onChange={Sleeve_tshandleInputChange}
          />
        </label>
        <button onClick={Sleeve_tshandleButtonClick}>submit</button>
        {Sleeve_tsdisplayedNumber && <p>Total: {Sleeve_tsdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Sleeve_tsfinished}
            onChange={Sleeve_tshandleFinishedInputChange}
          />
          <button onClick={Sleeve_tshandleButtonClick2}>submit</button>
          {Sleeve_tsfinishedNumber !== null && (
            <p>Remaining: {Sleeve_tsfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Sleeve_ts;

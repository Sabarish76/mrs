import React, { useEffect, useState } from "react";

function SleeveTs() {
  const [SleeveTsenteredNumber, setSleeveTsEnteredNumber] = useState("");
  const [SleeveTsinitialEnteredNumber, setSleeveTsInitialEnteredNumber] =
    useState("");
  const [SleeveTsfinished, setSleeveTsFinished] = useState("");
  const [SleeveTsdisplayedNumber, setSleeveTsDisplayedNumber] = useState(null);
  const [SleeveTsfinishedNumber, setSleeveTsFinishedNumber] = useState(null);

  useEffect(() => {
    const SleeveTsstoredEnteredNumber = localStorage.getItem(
      "SleeveTsenteredNumber"
    );
    const SleeveTsstoredFinishedNumber = localStorage.getItem(
      "SleeveTsfinishedNumber"
    );

    if (SleeveTsstoredEnteredNumber) {
      setSleeveTsDisplayedNumber(SleeveTsstoredEnteredNumber);
      setSleeveTsInitialEnteredNumber(SleeveTsstoredEnteredNumber);
    }

    if (SleeveTsstoredFinishedNumber) {
      setSleeveTsFinishedNumber(SleeveTsstoredFinishedNumber);
    }
  }, []);

  const SleeveTshandleInputChange = (e) => {
    setSleeveTsEnteredNumber(e.target.value);
    setSleeveTsFinishedNumber(null);
    setSleeveTsInitialEnteredNumber(e.target.value);
  };

  const SleeveTshandleFinishedInputChange = (e) => {
    setSleeveTsFinished(e.target.value);
  };

  const SleeveTshandleButtonClick = () => {
    setSleeveTsDisplayedNumber(SleeveTsenteredNumber);
    setSleeveTsInitialEnteredNumber(SleeveTsenteredNumber);
    setSleeveTsFinishedNumber(null);

    localStorage.setItem("SleeveTsenteredNumber", SleeveTsenteredNumber);
  };

  const SleeveTshandleButtonClick2 = () => {
    const SleeveTsremaining =
      SleeveTsfinishedNumber === null
        ? SleeveTsinitialEnteredNumber - SleeveTsfinished
        : SleeveTsfinishedNumber - SleeveTsfinished;

    setSleeveTsFinishedNumber(SleeveTsremaining);

    localStorage.setItem("SleeveTsfinishedNumber", SleeveTsremaining);
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
            value={SleeveTsenteredNumber}
            onChange={SleeveTshandleInputChange}
          />
        </label>
        <button onClick={SleeveTshandleButtonClick}>submit</button>
        {SleeveTsdisplayedNumber && <p>Total: {SleeveTsdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={SleeveTsfinished}
            onChange={SleeveTshandleFinishedInputChange}
          />
          <button onClick={SleeveTshandleButtonClick2}>submit</button>
          {SleeveTsfinishedNumber !== null && (
            <p>Remaining: {SleeveTsfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default SleeveTs;

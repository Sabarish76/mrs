import React, { useEffect, useState } from "react";

function Bottom() {
  const [BottomenteredNumber, setBottomEnteredNumber] = useState("");
  const [BottominitialEnteredNumber, setBottomInitialEnteredNumber] =
    useState("");
  const [Bottomfinished, setBottomFinished] = useState("");
  const [BottomdisplayedNumber, setBottomDisplayedNumber] = useState(null);
  const [BottomfinishedNumber, setBottomFinishedNumber] = useState(null);

  useEffect(() => {
    const BottomstoredEnteredNumber = localStorage.getItem(
      "BottomenteredNumber"
    );
    const BottomstoredFinishedNumber = localStorage.getItem(
      "BottomfinishedNumber"
    );

    if (BottomstoredEnteredNumber) {
      setBottomDisplayedNumber(BottomstoredEnteredNumber);
      setBottomInitialEnteredNumber(BottomstoredEnteredNumber);
    }

    if (BottomstoredFinishedNumber) {
      setBottomFinishedNumber(BottomstoredFinishedNumber);
    }
  }, []);

  const BottomhandleInputChange = (e) => {
    setBottomEnteredNumber(e.target.value);
    setBottomFinishedNumber(null);
    setBottomInitialEnteredNumber(e.target.value);
  };

  const BottomhandleFinishedInputChange = (e) => {
    setBottomFinished(e.target.value);
  };

  const BottomhandleButtonClick = () => {
    setBottomDisplayedNumber(BottomenteredNumber);
    setBottomInitialEnteredNumber(BottomenteredNumber);
    setBottomFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("BottomenteredNumber", BottomenteredNumber);
  };

  const BottomhandleButtonClick2 = () => {
    const Bottomremaining =
      BottomfinishedNumber === null
        ? BottominitialEnteredNumber - Bottomfinished
        : BottomfinishedNumber - Bottomfinished;

    setBottomFinishedNumber(Bottomremaining);

    localStorage.setItem("BottomfinishedNumber", Bottomremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Bottom Only</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={BottomenteredNumber}
            onChange={BottomhandleInputChange}
          />
        </label>
        <button onClick={BottomhandleButtonClick}>submit</button>
        {BottomdisplayedNumber && <p>Total: {BottomdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Bottomfinished}
            onChange={BottomhandleFinishedInputChange}
          />
          <button onClick={BottomhandleButtonClick2}>submit</button>
          {BottomfinishedNumber !== null && (
            <p>Remaining: {BottomfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Bottom;

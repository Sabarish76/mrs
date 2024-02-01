import React, { useEffect, useState } from "react";

function PocketMouth() {
  const [PocketMouthenteredNumber, setPocketMouthEnteredNumber] = useState("");
  const [PocketMouthinitialEnteredNumber, setPocketMouthInitialEnteredNumber] =
    useState("");
  const [PocketMouthfinished, setPocketMouthFinished] = useState("");
  const [PocketMouthdisplayedNumber, setPocketMouthDisplayedNumber] =
    useState(null);
  const [PocketMouthfinishedNumber, setPocketMouthFinishedNumber] =
    useState(null);

  useEffect(() => {
    const PocketMouthstoredEnteredNumber = localStorage.getItem(
      "PocketMouthenteredNumber"
    );
    const PocketMouthstoredFinishedNumber = localStorage.getItem(
      "PocketMouthfinishedNumber"
    );

    if (PocketMouthstoredEnteredNumber) {
      setPocketMouthDisplayedNumber(PocketMouthstoredEnteredNumber);
      setPocketMouthInitialEnteredNumber(PocketMouthstoredEnteredNumber);
    }

    if (PocketMouthstoredFinishedNumber) {
      setPocketMouthFinishedNumber(PocketMouthstoredFinishedNumber);
    }
  }, []);

  const PocketMouthhandleInputChange = (e) => {
    setPocketMouthEnteredNumber(e.target.value);
    setPocketMouthFinishedNumber(null);
    setPocketMouthInitialEnteredNumber(e.target.value);
  };

  const PocketMouthhandleFinishedInputChange = (e) => {
    setPocketMouthFinished(e.target.value);
  };

  const PocketMouthhandleButtonClick = () => {
    setPocketMouthDisplayedNumber(PocketMouthenteredNumber);
    setPocketMouthInitialEnteredNumber(PocketMouthenteredNumber);
    setPocketMouthFinishedNumber(null);

    localStorage.setItem("PocketMouthenteredNumber", PocketMouthenteredNumber);
  };

  const PocketMouthhandleButtonClick2 = () => {
    const PocketMouthremaining =
      PocketMouthfinishedNumber === null
        ? PocketMouthinitialEnteredNumber - PocketMouthfinished
        : PocketMouthfinishedNumber - PocketMouthfinished;

    setPocketMouthFinishedNumber(PocketMouthremaining);

    localStorage.setItem("PocketMouthfinishedNumber", PocketMouthremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Pocket Mouth</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={PocketMouthenteredNumber}
            onChange={PocketMouthhandleInputChange}
          />
        </label>
        <button onClick={PocketMouthhandleButtonClick}>submit</button>
        {PocketMouthdisplayedNumber && (
          <p>Total: {PocketMouthdisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={PocketMouthfinished}
            onChange={PocketMouthhandleFinishedInputChange}
          />
          <button onClick={PocketMouthhandleButtonClick2}>submit</button>
          {PocketMouthfinishedNumber !== null && (
            <p>Remaining: {PocketMouthfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default PocketMouth;

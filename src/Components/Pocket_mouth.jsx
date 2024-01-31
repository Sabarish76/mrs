import React, { useEffect, useState } from "react";

function Pocket_mouth() {
  const [Pocket_mouthenteredNumber, setPocket_mouthEnteredNumber] =
    useState("");
  const [
    Pocket_mouthinitialEnteredNumber,
    setPocket_mouthInitialEnteredNumber,
  ] = useState("");
  const [Pocket_mouthfinished, setPocket_mouthFinished] = useState("");
  const [Pocket_mouthdisplayedNumber, setPocket_mouthDisplayedNumber] =
    useState(null);
  const [Pocket_mouthfinishedNumber, setPocket_mouthFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Pocket_mouthstoredEnteredNumber = localStorage.getItem(
      "Pocket_mouthenteredNumber"
    );
    const Pocket_mouthstoredFinishedNumber = localStorage.getItem(
      "Pocket_mouthfinishedNumber"
    );

    if (Pocket_mouthstoredEnteredNumber) {
      setPocket_mouthDisplayedNumber(Pocket_mouthstoredEnteredNumber);
      setPocket_mouthInitialEnteredNumber(Pocket_mouthstoredEnteredNumber);
    }

    if (Pocket_mouthstoredFinishedNumber) {
      setPocket_mouthFinishedNumber(Pocket_mouthstoredFinishedNumber);
    }
  }, []);

  const Pocket_mouthhandleInputChange = (e) => {
    setPocket_mouthEnteredNumber(e.target.value);
    setPocket_mouthFinishedNumber(null);
    setPocket_mouthInitialEnteredNumber(e.target.value);
  };

  const Pocket_mouthhandleFinishedInputChange = (e) => {
    setPocket_mouthFinished(e.target.value);
  };

  const Pocket_mouthhandleButtonClick = () => {
    setPocket_mouthDisplayedNumber(Pocket_mouthenteredNumber);
    setPocket_mouthInitialEnteredNumber(Pocket_mouthenteredNumber);
    setPocket_mouthFinishedNumber(null);

    localStorage.setItem(
      "Pocket_mouthenteredNumber",
      Pocket_mouthenteredNumber
    );
  };

  const Pocket_mouthhandleButtonClick2 = () => {
    const Pocket_mouthremaining =
      Pocket_mouthfinishedNumber === null
        ? Pocket_mouthinitialEnteredNumber - Pocket_mouthfinished
        : Pocket_mouthfinishedNumber - Pocket_mouthfinished;

    setPocket_mouthFinishedNumber(Pocket_mouthremaining);

    localStorage.setItem("Pocket_mouthfinishedNumber", Pocket_mouthremaining);
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
            value={Pocket_mouthenteredNumber}
            onChange={Pocket_mouthhandleInputChange}
          />
        </label>
        <button onClick={Pocket_mouthhandleButtonClick}>submit</button>
        {Pocket_mouthdisplayedNumber && (
          <p>Total: {Pocket_mouthdisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Pocket_mouthfinished}
            onChange={Pocket_mouthhandleFinishedInputChange}
          />
          <button onClick={Pocket_mouthhandleButtonClick2}>submit</button>
          {Pocket_mouthfinishedNumber !== null && (
            <p>Remaining: {Pocket_mouthfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Pocket_mouth;

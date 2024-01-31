import React, { useEffect, useState } from "react";

function Sleeve_mouth() {
  const [Sleeve_mouthenteredNumber, setSleeve_mouthEnteredNumber] =
    useState("");
  const [
    Sleeve_mouthinitialEnteredNumber,
    setSleeve_mouthInitialEnteredNumber,
  ] = useState("");
  const [Sleeve_mouthfinished, setSleeve_mouthFinished] = useState("");
  const [Sleeve_mouthdisplayedNumber, setSleeve_mouthDisplayedNumber] =
    useState(null);
  const [Sleeve_mouthfinishedNumber, setSleeve_mouthFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Sleeve_mouthstoredEnteredNumber = localStorage.getItem(
      "Sleeve_mouthenteredNumber"
    );
    const Sleeve_mouthstoredFinishedNumber = localStorage.getItem(
      "Sleeve_mouthfinishedNumber"
    );

    if (Sleeve_mouthstoredEnteredNumber) {
      setSleeve_mouthDisplayedNumber(Sleeve_mouthstoredEnteredNumber);
      setSleeve_mouthInitialEnteredNumber(Sleeve_mouthstoredEnteredNumber);
    }

    if (Sleeve_mouthstoredFinishedNumber) {
      setSleeve_mouthFinishedNumber(Sleeve_mouthstoredFinishedNumber);
    }
  }, []);

  const Sleeve_mouthhandleInputChange = (e) => {
    setSleeve_mouthEnteredNumber(e.target.value);
    setSleeve_mouthFinishedNumber(null);
    setSleeve_mouthInitialEnteredNumber(e.target.value);
  };

  const Sleeve_mouthhandleFinishedInputChange = (e) => {
    setSleeve_mouthFinished(e.target.value);
  };

  const Sleeve_mouthhandleButtonClick = () => {
    setSleeve_mouthDisplayedNumber(Sleeve_mouthenteredNumber);
    setSleeve_mouthInitialEnteredNumber(Sleeve_mouthenteredNumber);
    setSleeve_mouthFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem(
      "Sleeve_mouthenteredNumber",
      Sleeve_mouthenteredNumber
    );
  };

  const Sleeve_mouthhandleButtonClick2 = () => {
    const Sleeve_mouthremaining =
      Sleeve_mouthfinishedNumber === null
        ? Sleeve_mouthinitialEnteredNumber - Sleeve_mouthfinished
        : Sleeve_mouthfinishedNumber - Sleeve_mouthfinished;

    setSleeve_mouthFinishedNumber(Sleeve_mouthremaining);

    localStorage.setItem("Sleeve_mouthfinishedNumber", Sleeve_mouthremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Sleeve Mouth </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={Sleeve_mouthenteredNumber}
            onChange={Sleeve_mouthhandleInputChange}
          />
        </label>
        <button onClick={Sleeve_mouthhandleButtonClick}>submit</button>
        {Sleeve_mouthdisplayedNumber && (
          <p>Total: {Sleeve_mouthdisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Sleeve_mouthfinished}
            onChange={Sleeve_mouthhandleFinishedInputChange}
          />
          <button onClick={Sleeve_mouthhandleButtonClick2}>submit</button>
          {Sleeve_mouthfinishedNumber !== null && (
            <p>Remaining: {Sleeve_mouthfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Sleeve_mouth;

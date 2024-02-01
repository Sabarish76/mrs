import React, { useEffect, useState } from "react";

function ButtonPatti() {
  const [ButtonPattienteredNumber, setButtonPattiEnteredNumber] = useState("");
  const [ButtonPattiinitialEnteredNumber, setButtonPattiInitialEnteredNumber] =
    useState("");
  const [ButtonPattifinished, setButtonPattiFinished] = useState("");
  const [ButtonPattidisplayedNumber, setButtonPattiDisplayedNumber] =
    useState(null);
  const [ButtonPattifinishedNumber, setButtonPattiFinishedNumber] =
    useState(null);

  useEffect(() => {
    const ButtonPattistoredEnteredNumber = localStorage.getItem(
      "ButtonPattienteredNumber"
    );
    const ButtonPattistoredFinishedNumber = localStorage.getItem(
      "ButtonPattifinishedNumber"
    );

    if (ButtonPattistoredEnteredNumber) {
      setButtonPattiDisplayedNumber(ButtonPattistoredEnteredNumber);
      setButtonPattiInitialEnteredNumber(ButtonPattistoredEnteredNumber);
    }

    if (ButtonPattistoredFinishedNumber) {
      setButtonPattiFinishedNumber(ButtonPattistoredFinishedNumber);
    }
  }, []);

  const ButtonPattihandleInputChange = (e) => {
    setButtonPattiEnteredNumber(e.target.value);
    setButtonPattiFinishedNumber(null);
    setButtonPattiInitialEnteredNumber(e.target.value);
  };

  const ButtonPattihandleFinishedInputChange = (e) => {
    setButtonPattiFinished(e.target.value);
  };

  const ButtonPattihandleButtonClick = () => {
    setButtonPattiDisplayedNumber(ButtonPattienteredNumber);
    setButtonPattiInitialEnteredNumber(ButtonPattienteredNumber);
    setButtonPattiFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("ButtonPattienteredNumber", ButtonPattienteredNumber);
  };

  const ButtonPattihandleButtonClick2 = () => {
    const ButtonPattiremaining =
      ButtonPattifinishedNumber === null
        ? ButtonPattiinitialEnteredNumber - ButtonPattifinished
        : ButtonPattifinishedNumber - ButtonPattifinished;

    setButtonPattiFinishedNumber(ButtonPattiremaining);

    localStorage.setItem("ButtonPattifinishedNumber", ButtonPattiremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Button Patti </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={ButtonPattienteredNumber}
            onChange={ButtonPattihandleInputChange}
          />
        </label>
        <button onClick={ButtonPattihandleButtonClick}>submit</button>
        {ButtonPattidisplayedNumber && (
          <p>Total: {ButtonPattidisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={ButtonPattifinished}
            onChange={ButtonPattihandleFinishedInputChange}
          />
          <button onClick={ButtonPattihandleButtonClick2}>submit</button>
          {ButtonPattifinishedNumber !== null && (
            <p>Remaining: {ButtonPattifinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default ButtonPatti;

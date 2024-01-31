import React, { useEffect, useState } from "react";

function Button_patti() {
  const [Button_pattienteredNumber, setButton_pattiEnteredNumber] =
    useState("");
  const [
    Button_pattiinitialEnteredNumber,
    setButton_pattiInitialEnteredNumber,
  ] = useState("");
  const [Button_pattifinished, setButton_pattiFinished] = useState("");
  const [Button_pattidisplayedNumber, setButton_pattiDisplayedNumber] =
    useState(null);
  const [Button_pattifinishedNumber, setButton_pattiFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Button_pattistoredEnteredNumber = localStorage.getItem(
      "Button_pattienteredNumber"
    );
    const Button_pattistoredFinishedNumber = localStorage.getItem(
      "Button_pattifinishedNumber"
    );

    if (Button_pattistoredEnteredNumber) {
      setButton_pattiDisplayedNumber(Button_pattistoredEnteredNumber);
      setButton_pattiInitialEnteredNumber(Button_pattistoredEnteredNumber);
    }

    if (Button_pattistoredFinishedNumber) {
      setButton_pattiFinishedNumber(Button_pattistoredFinishedNumber);
    }
  }, []);

  const Button_pattihandleInputChange = (e) => {
    setButton_pattiEnteredNumber(e.target.value);
    setButton_pattiFinishedNumber(null);
    setButton_pattiInitialEnteredNumber(e.target.value);
  };

  const Button_pattihandleFinishedInputChange = (e) => {
    setButton_pattiFinished(e.target.value);
  };

  const Button_pattihandleButtonClick = () => {
    setButton_pattiDisplayedNumber(Button_pattienteredNumber);
    setButton_pattiInitialEnteredNumber(Button_pattienteredNumber);
    setButton_pattiFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem(
      "Button_pattienteredNumber",
      Button_pattienteredNumber
    );
  };

  const Button_pattihandleButtonClick2 = () => {
    const Button_pattiremaining =
      Button_pattifinishedNumber === null
        ? Button_pattiinitialEnteredNumber - Button_pattifinished
        : Button_pattifinishedNumber - Button_pattifinished;

    setButton_pattiFinishedNumber(Button_pattiremaining);

    localStorage.setItem("Button_pattifinishedNumber", Button_pattiremaining);
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
            value={Button_pattienteredNumber}
            onChange={Button_pattihandleInputChange}
          />
        </label>
        <button onClick={Button_pattihandleButtonClick}>submit</button>
        {Button_pattidisplayedNumber && (
          <p>Total: {Button_pattidisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Button_pattifinished}
            onChange={Button_pattihandleFinishedInputChange}
          />
          <button onClick={Button_pattihandleButtonClick2}>submit</button>
          {Button_pattifinishedNumber !== null && (
            <p>Remaining: {Button_pattifinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Button_patti;

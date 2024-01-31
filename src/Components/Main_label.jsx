import React, { useEffect, useState } from "react";

function Main_label() {
  const [Main_labelenteredNumber, setMain_labelEnteredNumber] = useState("");
  const [Main_labelinitialEnteredNumber, setMain_labelInitialEnteredNumber] =
    useState("");
  const [Main_labelfinished, setMain_labelFinished] = useState("");
  const [Main_labeldisplayedNumber, setMain_labelDisplayedNumber] =
    useState(null);
  const [Main_labelfinishedNumber, setMain_labelFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Main_labelstoredEnteredNumber = localStorage.getItem(
      "Main_labelenteredNumber"
    );
    const Main_labelstoredFinishedNumber = localStorage.getItem(
      "Main_labelfinishedNumber"
    );

    if (Main_labelstoredEnteredNumber) {
      setMain_labelDisplayedNumber(Main_labelstoredEnteredNumber);
      setMain_labelInitialEnteredNumber(Main_labelstoredEnteredNumber);
    }

    if (Main_labelstoredFinishedNumber) {
      setMain_labelFinishedNumber(Main_labelstoredFinishedNumber);
    }
  }, []);

  const Main_labelhandleInputChange = (e) => {
    setMain_labelEnteredNumber(e.target.value);
    setMain_labelFinishedNumber(null);
    setMain_labelInitialEnteredNumber(e.target.value);
  };

  const Main_labelhandleFinishedInputChange = (e) => {
    setMain_labelFinished(e.target.value);
  };

  const Main_labelhandleButtonClick = () => {
    setMain_labelDisplayedNumber(Main_labelenteredNumber);
    setMain_labelInitialEnteredNumber(Main_labelenteredNumber);
    setMain_labelFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("Main_labelenteredNumber", Main_labelenteredNumber);
  };

  const Main_labelhandleButtonClick2 = () => {
    const Main_labelremaining =
      Main_labelfinishedNumber === null
        ? Main_labelinitialEnteredNumber - Main_labelfinished
        : Main_labelfinishedNumber - Main_labelfinished;

    setMain_labelFinishedNumber(Main_labelremaining);

    localStorage.setItem("Main_labelfinishedNumber", Main_labelremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Main Label</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={Main_labelenteredNumber}
            onChange={Main_labelhandleInputChange}
          />
        </label>
        <button onClick={Main_labelhandleButtonClick}>submit</button>
        {Main_labeldisplayedNumber && <p>Total: {Main_labeldisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Main_labelfinished}
            onChange={Main_labelhandleFinishedInputChange}
          />
          <button onClick={Main_labelhandleButtonClick2}>submit</button>
          {Main_labelfinishedNumber !== null && (
            <p>Remaining: {Main_labelfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Main_label;

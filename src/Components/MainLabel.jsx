import React, { useEffect, useState } from "react";

function MainLabel() {
  const [MainLabelenteredNumber, setMainLabelEnteredNumber] = useState("");
  const [MainLabelinitialEnteredNumber, setMainLabelInitialEnteredNumber] =
    useState("");
  const [MainLabelfinished, setMainLabelFinished] = useState("");
  const [MainLabeldisplayedNumber, setMainLabelDisplayedNumber] =
    useState(null);
  const [MainLabelfinishedNumber, setMainLabelFinishedNumber] = useState(null);

  useEffect(() => {
    const MainLabelstoredEnteredNumber = localStorage.getItem(
      "MainLabelenteredNumber"
    );
    const MainLabelstoredFinishedNumber = localStorage.getItem(
      "MainLabelfinishedNumber"
    );

    if (MainLabelstoredEnteredNumber) {
      setMainLabelDisplayedNumber(MainLabelstoredEnteredNumber);
      setMainLabelInitialEnteredNumber(MainLabelstoredEnteredNumber);
    }

    if (MainLabelstoredFinishedNumber) {
      setMainLabelFinishedNumber(MainLabelstoredFinishedNumber);
    }
  }, []);

  const MainLabelhandleInputChange = (e) => {
    setMainLabelEnteredNumber(e.target.value);
    setMainLabelFinishedNumber(null);
    setMainLabelInitialEnteredNumber(e.target.value);
  };

  const MainLabelhandleFinishedInputChange = (e) => {
    setMainLabelFinished(e.target.value);
  };

  const MainLabelhandleButtonClick = () => {
    setMainLabelDisplayedNumber(MainLabelenteredNumber);
    setMainLabelInitialEnteredNumber(MainLabelenteredNumber);
    setMainLabelFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("MainLabelenteredNumber", MainLabelenteredNumber);
  };

  const MainLabelhandleButtonClick2 = () => {
    const MainLabelremaining =
      MainLabelfinishedNumber === null
        ? MainLabelinitialEnteredNumber - MainLabelfinished
        : MainLabelfinishedNumber - MainLabelfinished;

    setMainLabelFinishedNumber(MainLabelremaining);

    localStorage.setItem("MainLabelfinishedNumber", MainLabelremaining);
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
            value={MainLabelenteredNumber}
            onChange={MainLabelhandleInputChange}
          />
        </label>
        <button onClick={MainLabelhandleButtonClick}>submit</button>
        {MainLabeldisplayedNumber && <p>Total: {MainLabeldisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={MainLabelfinished}
            onChange={MainLabelhandleFinishedInputChange}
          />
          <button onClick={MainLabelhandleButtonClick2}>submit</button>
          {MainLabelfinishedNumber !== null && (
            <p>Remaining: {MainLabelfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default MainLabel;

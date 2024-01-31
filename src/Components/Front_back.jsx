import React, { useEffect, useState } from "react";

function Front_back() {
  const [Front_backenteredNumber, setFront_backEnteredNumber] = useState("");
  const [Front_backinitialEnteredNumber, setFront_backInitialEnteredNumber] =
    useState("");
  const [Front_backfinished, setFront_backFinished] = useState("");
  const [Front_backdisplayedNumber, setFront_backDisplayedNumber] =
    useState(null);
  const [Front_backfinishedNumber, setFront_backFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Front_backstoredEnteredNumber = localStorage.getItem(
      "Front_backenteredNumber"
    );
    const Front_backstoredFinishedNumber = localStorage.getItem(
      "Front_backfinishedNumber"
    );

    if (Front_backstoredEnteredNumber) {
      setFront_backDisplayedNumber(Front_backstoredEnteredNumber);
      setFront_backInitialEnteredNumber(Front_backstoredEnteredNumber);
    }

    if (Front_backstoredFinishedNumber) {
      setFront_backFinishedNumber(Front_backstoredFinishedNumber);
    }
  }, []);

  const Front_backhandleInputChange = (e) => {
    setFront_backEnteredNumber(e.target.value);
    setFront_backFinishedNumber(null);
    setFront_backInitialEnteredNumber(e.target.value);
  };

  const Front_backhandleFinishedInputChange = (e) => {
    setFront_backFinished(e.target.value);
  };

  const Front_backhandleButtonClick = () => {
    setFront_backDisplayedNumber(Front_backenteredNumber);
    setFront_backInitialEnteredNumber(Front_backenteredNumber);
    setFront_backFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("Front_backenteredNumber", Front_backenteredNumber);
  };

  const Front_backhandleButtonClick2 = () => {
    const Front_backremaining =
      Front_backfinishedNumber === null
        ? Front_backinitialEnteredNumber - Front_backfinished
        : Front_backfinishedNumber - Front_backfinished;

    setFront_backFinishedNumber(Front_backremaining);

    localStorage.setItem("Front_backfinishedNumber", Front_backremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Front Back </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={Front_backenteredNumber}
            onChange={Front_backhandleInputChange}
          />
        </label>
        <button onClick={Front_backhandleButtonClick}>submit</button>
        {Front_backdisplayedNumber && <p>Total: {Front_backdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Front_backfinished}
            onChange={Front_backhandleFinishedInputChange}
          />
          <button onClick={Front_backhandleButtonClick2}>submit</button>
          {Front_backfinishedNumber !== null && (
            <p>Remaining: {Front_backfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Front_back;

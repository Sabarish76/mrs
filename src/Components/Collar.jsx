import React, { useEffect, useState } from "react";

function Collar() {
  const [CollarenteredNumber, setCollarEnteredNumber] = useState("");
  const [CollarinitialEnteredNumber, setCollarInitialEnteredNumber] =
    useState("");
  const [Collarfinished, setCollarFinished] = useState("");
  const [CollardisplayedNumber, setCollarDisplayedNumber] = useState(null);
  const [CollarfinishedNumber, setCollarFinishedNumber] = useState(null);

  useEffect(() => {
    const CollarstoredEnteredNumber = localStorage.getItem(
      "CollarenteredNumber"
    );
    const CollarstoredFinishedNumber = localStorage.getItem(
      "CollarfinishedNumber"
    );

    if (CollarstoredEnteredNumber) {
      setCollarDisplayedNumber(CollarstoredEnteredNumber);
      setCollarInitialEnteredNumber(CollarstoredEnteredNumber);
    }

    if (CollarstoredFinishedNumber) {
      setCollarFinishedNumber(CollarstoredFinishedNumber);
    }
  }, []);

  const CollarhandleInputChange = (e) => {
    setCollarEnteredNumber(e.target.value);
    setCollarFinishedNumber(null);
    setCollarInitialEnteredNumber(e.target.value);
  };

  const CollarhandleFinishedInputChange = (e) => {
    setCollarFinished(e.target.value);
  };

  const CollarhandleButtonClick = () => {
    setCollarDisplayedNumber(CollarenteredNumber);
    setCollarInitialEnteredNumber(CollarenteredNumber);
    setCollarFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("CollarenteredNumber", CollarenteredNumber);
  };

  const CollarhandleButtonClick2 = () => {
    const Collarremaining =
      CollarfinishedNumber === null
        ? CollarinitialEnteredNumber - Collarfinished
        : CollarfinishedNumber - Collarfinished;

    setCollarFinishedNumber(Collarremaining);

    localStorage.setItem("CollarfinishedNumber", Collarremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Collar </h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={CollarenteredNumber}
            onChange={CollarhandleInputChange}
          />
        </label>
        <button onClick={CollarhandleButtonClick}>submit</button>
        {CollardisplayedNumber && <p>Total: {CollardisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Collarfinished}
            onChange={CollarhandleFinishedInputChange}
          />
          <button onClick={CollarhandleButtonClick2}>submit</button>
          {CollarfinishedNumber !== null && (
            <p>Remaining: {CollarfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Collar;

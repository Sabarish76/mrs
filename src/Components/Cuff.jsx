import React, { useEffect, useState } from "react";

function Cuff() {
  const [CuffenteredNumber, setCuffEnteredNumber] = useState("");
  const [CuffinitialEnteredNumber, setCuffInitialEnteredNumber] = useState("");
  const [Cufffinished, setCuffFinished] = useState("");
  const [CuffdisplayedNumber, setCuffDisplayedNumber] = useState(null);
  const [CufffinishedNumber, setCuffFinishedNumber] = useState(null);

  useEffect(() => {
    const CuffstoredEnteredNumber = localStorage.getItem("CuffenteredNumber");
    const CuffstoredFinishedNumber = localStorage.getItem("CufffinishedNumber");

    if (CuffstoredEnteredNumber) {
      setCuffDisplayedNumber(CuffstoredEnteredNumber);
      setCuffInitialEnteredNumber(CuffstoredEnteredNumber);
    }

    if (CuffstoredFinishedNumber) {
      setCuffFinishedNumber(CuffstoredFinishedNumber);
    }
  }, []);

  const CuffhandleInputChange = (e) => {
    setCuffEnteredNumber(e.target.value);
    setCuffFinishedNumber(null);
    setCuffInitialEnteredNumber(e.target.value);
  };

  const CuffhandleFinishedInputChange = (e) => {
    setCuffFinished(e.target.value);
  };

  const CuffhandleButtonClick = () => {
    setCuffDisplayedNumber(CuffenteredNumber);
    setCuffInitialEnteredNumber(CuffenteredNumber);
    setCuffFinishedNumber(null);

    localStorage.setItem("CuffenteredNumber", CuffenteredNumber);
  };

  const CuffhandleButtonClick2 = () => {
    const Cuffremaining =
      CufffinishedNumber === null
        ? CuffinitialEnteredNumber - Cufffinished
        : CufffinishedNumber - Cufffinished;

    setCuffFinishedNumber(Cuffremaining);

    localStorage.setItem("CufffinishedNumber", Cuffremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Cuff </h1>
      </div>
      <div>
        <label>
          Total Item:
          <input
            type="text"
            value={CuffenteredNumber}
            onChange={CuffhandleInputChange}
          />
        </label>
        <button onClick={CuffhandleButtonClick}>submit</button>
        {CuffdisplayedNumber && <p>Total: {CuffdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Cufffinished}
            onChange={CuffhandleFinishedInputChange}
          />
          <button onClick={CuffhandleButtonClick2}>submit</button>
          {CufffinishedNumber !== null && (
            <p>Remaining: {CufffinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Cuff;

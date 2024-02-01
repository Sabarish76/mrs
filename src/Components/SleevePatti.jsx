import React, { useEffect, useState } from "react";

function SleevePatti() {
  const [SleevePattienteredNumber, setSleevePattiEnteredNumber] = useState("");
  const [SleevePattiinitialEnteredNumber, setSleevePattiInitialEnteredNumber] =
    useState("");
  const [SleevePattifinished, setSleevePattiFinished] = useState("");
  const [SleevePattidisplayedNumber, setSleevePattiDisplayedNumber] =
    useState(null);
  const [SleevePattifinishedNumber, setSleevePattiFinishedNumber] =
    useState(null);

  useEffect(() => {
    const SleevePattistoredEnteredNumber = localStorage.getItem(
      "SleevePattienteredNumber"
    );
    const SleevePattistoredFinishedNumber = localStorage.getItem(
      "SleevePattifinishedNumber"
    );

    if (SleevePattistoredEnteredNumber) {
      setSleevePattiDisplayedNumber(SleevePattistoredEnteredNumber);
      setSleevePattiInitialEnteredNumber(SleevePattistoredEnteredNumber);
    }

    if (SleevePattistoredFinishedNumber) {
      setSleevePattiFinishedNumber(SleevePattistoredFinishedNumber);
    }
  }, []);

  const SleevePattihandleInputChange = (e) => {
    setSleevePattiEnteredNumber(e.target.value);
    setSleevePattiFinishedNumber(null);
    setSleevePattiInitialEnteredNumber(e.target.value);
  };

  const SleevePattihandleFinishedInputChange = (e) => {
    setSleevePattiFinished(e.target.value);
  };

  const SleevePattihandleButtonClick = () => {
    setSleevePattiDisplayedNumber(SleevePattienteredNumber);
    setSleevePattiInitialEnteredNumber(SleevePattienteredNumber);
    setSleevePattiFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("SleevePattienteredNumber", SleevePattienteredNumber);
  };

  const SleevePattihandleButtonClick2 = () => {
    const SleevePattiremaining =
      SleevePattifinishedNumber === null
        ? SleevePattiinitialEnteredNumber - SleevePattifinished
        : SleevePattifinishedNumber - SleevePattifinished;

    setSleevePattiFinishedNumber(SleevePattiremaining);

    localStorage.setItem("SleevePattifinishedNumber", SleevePattiremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Sleeve Patti</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={SleevePattienteredNumber}
            onChange={SleevePattihandleInputChange}
          />
        </label>
        <button onClick={SleevePattihandleButtonClick}>submit</button>
        {SleevePattidisplayedNumber && (
          <p>Total: {SleevePattidisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={SleevePattifinished}
            onChange={SleevePattihandleFinishedInputChange}
          />
          <button onClick={SleevePattihandleButtonClick2}>submit</button>
          {SleevePattifinishedNumber !== null && (
            <p>Remaining: {SleevePattifinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default SleevePatti;

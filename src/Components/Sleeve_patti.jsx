import React, { useEffect, useState } from "react";

function Sleeve_patti() {
  const [Sleeve_pattienteredNumber, setSleeve_pattiEnteredNumber] =
    useState("");
  const [
    Sleeve_pattiinitialEnteredNumber,
    setSleeve_pattiInitialEnteredNumber,
  ] = useState("");
  const [Sleeve_pattifinished, setSleeve_pattiFinished] = useState("");
  const [Sleeve_pattidisplayedNumber, setSleeve_pattiDisplayedNumber] =
    useState(null);
  const [Sleeve_pattifinishedNumber, setSleeve_pattiFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Sleeve_pattistoredEnteredNumber = localStorage.getItem(
      "Sleeve_pattienteredNumber"
    );
    const Sleeve_pattistoredFinishedNumber = localStorage.getItem(
      "Sleeve_pattifinishedNumber"
    );

    if (Sleeve_pattistoredEnteredNumber) {
      setSleeve_pattiDisplayedNumber(Sleeve_pattistoredEnteredNumber);
      setSleeve_pattiInitialEnteredNumber(Sleeve_pattistoredEnteredNumber);
    }

    if (Sleeve_pattistoredFinishedNumber) {
      setSleeve_pattiFinishedNumber(Sleeve_pattistoredFinishedNumber);
    }
  }, []);

  const Sleeve_pattihandleInputChange = (e) => {
    setSleeve_pattiEnteredNumber(e.target.value);
    setSleeve_pattiFinishedNumber(null);
    setSleeve_pattiInitialEnteredNumber(e.target.value);
  };

  const Sleeve_pattihandleFinishedInputChange = (e) => {
    setSleeve_pattiFinished(e.target.value);
  };

  const Sleeve_pattihandleButtonClick = () => {
    setSleeve_pattiDisplayedNumber(Sleeve_pattienteredNumber);
    setSleeve_pattiInitialEnteredNumber(Sleeve_pattienteredNumber);
    setSleeve_pattiFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem(
      "Sleeve_pattienteredNumber",
      Sleeve_pattienteredNumber
    );
  };

  const Sleeve_pattihandleButtonClick2 = () => {
    const Sleeve_pattiremaining =
      Sleeve_pattifinishedNumber === null
        ? Sleeve_pattiinitialEnteredNumber - Sleeve_pattifinished
        : Sleeve_pattifinishedNumber - Sleeve_pattifinished;

    setSleeve_pattiFinishedNumber(Sleeve_pattiremaining);

    localStorage.setItem("Sleeve_pattifinishedNumber", Sleeve_pattiremaining);
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
            value={Sleeve_pattienteredNumber}
            onChange={Sleeve_pattihandleInputChange}
          />
        </label>
        <button onClick={Sleeve_pattihandleButtonClick}>submit</button>
        {Sleeve_pattidisplayedNumber && (
          <p>Total: {Sleeve_pattidisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Sleeve_pattifinished}
            onChange={Sleeve_pattihandleFinishedInputChange}
          />
          <button onClick={Sleeve_pattihandleButtonClick2}>submit</button>
          {Sleeve_pattifinishedNumber !== null && (
            <p>Remaining: {Sleeve_pattifinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Sleeve_patti;

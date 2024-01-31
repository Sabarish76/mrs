import React, { useEffect, useState } from "react";

function Sleeve_only() {
  const [Sleeve_onlyenteredNumber, setSleeve_onlyEnteredNumber] = useState("");
  const [Sleeve_onlyinitialEnteredNumber, setSleeve_onlyInitialEnteredNumber] =
    useState("");
  const [Sleeve_onlyfinished, setSleeve_onlyFinished] = useState("");
  const [Sleeve_onlydisplayedNumber, setSleeve_onlyDisplayedNumber] =
    useState(null);
  const [Sleeve_onlyfinishedNumber, setSleeve_onlyFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Sleeve_onlystoredEnteredNumber = localStorage.getItem(
      "Sleeve_onlyenteredNumber"
    );
    const Sleeve_onlystoredFinishedNumber = localStorage.getItem(
      "Sleeve_onlyfinishedNumber"
    );

    if (Sleeve_onlystoredEnteredNumber) {
      setSleeve_onlyDisplayedNumber(Sleeve_onlystoredEnteredNumber);
      setSleeve_onlyInitialEnteredNumber(Sleeve_onlystoredEnteredNumber);
    }

    if (Sleeve_onlystoredFinishedNumber) {
      setSleeve_onlyFinishedNumber(Sleeve_onlystoredFinishedNumber);
    }
  }, []);

  const Sleeve_onlyhandleInputChange = (e) => {
    setSleeve_onlyEnteredNumber(e.target.value);
    setSleeve_onlyFinishedNumber(null);
    setSleeve_onlyInitialEnteredNumber(e.target.value);
  };

  const Sleeve_onlyhandleFinishedInputChange = (e) => {
    setSleeve_onlyFinished(e.target.value);
  };

  const Sleeve_onlyhandleButtonClick = () => {
    setSleeve_onlyDisplayedNumber(Sleeve_onlyenteredNumber);
    setSleeve_onlyInitialEnteredNumber(Sleeve_onlyenteredNumber);
    setSleeve_onlyFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("Sleeve_onlyenteredNumber", Sleeve_onlyenteredNumber);
  };

  const Sleeve_onlyhandleButtonClick2 = () => {
    const Sleeve_onlyremaining =
      Sleeve_onlyfinishedNumber === null
        ? Sleeve_onlyinitialEnteredNumber - Sleeve_onlyfinished
        : Sleeve_onlyfinishedNumber - Sleeve_onlyfinished;

    setSleeve_onlyFinishedNumber(Sleeve_onlyremaining);

    localStorage.setItem("Sleeve_onlyfinishedNumber", Sleeve_onlyremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Sleeve Only</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={Sleeve_onlyenteredNumber}
            onChange={Sleeve_onlyhandleInputChange}
          />
        </label>
        <button onClick={Sleeve_onlyhandleButtonClick}>submit</button>
        {Sleeve_onlydisplayedNumber && (
          <p>Total: {Sleeve_onlydisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Sleeve_onlyfinished}
            onChange={Sleeve_onlyhandleFinishedInputChange}
          />
          <button onClick={Sleeve_onlyhandleButtonClick2}>submit</button>
          {Sleeve_onlyfinishedNumber !== null && (
            <p>Remaining: {Sleeve_onlyfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Sleeve_only;

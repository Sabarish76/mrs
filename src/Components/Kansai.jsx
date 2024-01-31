import React, { useEffect, useState } from "react";

function Kansai() {
  const [KansaienteredNumber, setKansaiEnteredNumber] = useState("");
  const [KansaiinitialEnteredNumber, setKansaiInitialEnteredNumber] =
    useState("");
  const [Kansaifinished, setKansaiFinished] = useState("");
  const [KansaidisplayedNumber, setKansaiDisplayedNumber] = useState(null);
  const [KansaifinishedNumber, setKansaiFinishedNumber] = useState(null);

  useEffect(() => {
    const KansaistoredEnteredNumber = localStorage.getItem(
      "KansaienteredNumber"
    );
    const KansaistoredFinishedNumber = localStorage.getItem(
      "KansaifinishedNumber"
    );

    if (KansaistoredEnteredNumber) {
      setKansaiDisplayedNumber(KansaistoredEnteredNumber);
      setKansaiInitialEnteredNumber(KansaistoredEnteredNumber);
    }

    if (KansaistoredFinishedNumber) {
      setKansaiFinishedNumber(KansaistoredFinishedNumber);
    }
  }, []);

  const KansaihandleInputChange = (e) => {
    setKansaiEnteredNumber(e.target.value);
    setKansaiFinishedNumber(null);
    setKansaiInitialEnteredNumber(e.target.value);
  };

  const KansaihandleFinishedInputChange = (e) => {
    setKansaiFinished(e.target.value);
  };

  const KansaihandleButtonClick = () => {
    setKansaiDisplayedNumber(KansaienteredNumber);
    setKansaiInitialEnteredNumber(KansaienteredNumber);
    setKansaiFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("KansaienteredNumber", KansaienteredNumber);
  };

  const KansaihandleButtonClick2 = () => {
    const Kansairemaining =
      KansaifinishedNumber === null
        ? KansaiinitialEnteredNumber - Kansaifinished
        : KansaifinishedNumber - Kansaifinished;

    setKansaiFinishedNumber(Kansairemaining);

    localStorage.setItem("KansaifinishedNumber", Kansairemaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Kansai</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={KansaienteredNumber}
            onChange={KansaihandleInputChange}
          />
        </label>
        <button onClick={KansaihandleButtonClick}>submit</button>
        {KansaidisplayedNumber && <p>Total: {KansaidisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={Kansaifinished}
            onChange={KansaihandleFinishedInputChange}
          />
          <button onClick={KansaihandleButtonClick2}>submit</button>
          {KansaifinishedNumber !== null && (
            <p>Remaining: {KansaifinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Kansai;

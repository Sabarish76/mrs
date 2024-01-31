import React, { useEffect, useState } from "react";

function Collar_ready() {
  const [Collar_readyenteredNumber, setCollar_readyEnteredNumber] =
    useState("");
  const [
    Collar_readyinitialEnteredNumber,
    setCollar_readyInitialEnteredNumber,
  ] = useState("");
  const [Collar_readyfinished, setCollar_readyFinished] = useState("");
  const [Collar_readydisplayedNumber, setCollar_readyDisplayedNumber] =
    useState(null);
  const [Collar_readyfinishedNumber, setCollar_readyFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Collar_readystoredEnteredNumber = localStorage.getItem(
      "Collar_readyenteredNumber"
    );
    const Collar_readystoredFinishedNumber = localStorage.getItem(
      "Collar_readyfinishedNumber"
    );

    if (Collar_readystoredEnteredNumber) {
      setCollar_readyDisplayedNumber(Collar_readystoredEnteredNumber);
      setCollar_readyInitialEnteredNumber(Collar_readystoredEnteredNumber);
    }

    if (Collar_readystoredFinishedNumber) {
      setCollar_readyFinishedNumber(Collar_readystoredFinishedNumber);
    }
  }, []);

  const Collar_readyhandleInputChange = (e) => {
    setCollar_readyEnteredNumber(e.target.value);
    setCollar_readyFinishedNumber(null);
    setCollar_readyInitialEnteredNumber(e.target.value);
  };

  const Collar_readyhandleFinishedInputChange = (e) => {
    setCollar_readyFinished(e.target.value);
  };

  const Collar_readyhandleButtonClick = () => {
    setCollar_readyDisplayedNumber(Collar_readyenteredNumber);
    setCollar_readyInitialEnteredNumber(Collar_readyenteredNumber);
    setCollar_readyFinishedNumber(null);

    localStorage.setItem(
      "Collar_readyenteredNumber",
      Collar_readyenteredNumber
    );
  };

  const Collar_readyhandleButtonClick2 = () => {
    const Collar_readyremaining =
      Collar_readyfinishedNumber === null
        ? Collar_readyinitialEnteredNumber - Collar_readyfinished
        : Collar_readyfinishedNumber - Collar_readyfinished;

    setCollar_readyFinishedNumber(Collar_readyremaining);

    localStorage.setItem("Collar_readyfinishedNumber", Collar_readyremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Collar Ready</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={Collar_readyenteredNumber}
            onChange={Collar_readyhandleInputChange}
          />
        </label>
        <button onClick={Collar_readyhandleButtonClick}>submit</button>
        {Collar_readydisplayedNumber && (
          <p>Total: {Collar_readydisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Collar_readyfinished}
            onChange={Collar_readyhandleFinishedInputChange}
          />
          <button onClick={Collar_readyhandleButtonClick2}>submit</button>
          {Collar_readyfinishedNumber !== null && (
            <p>Remaining: {Collar_readyfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Collar_ready;

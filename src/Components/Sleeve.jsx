import React, { useEffect, useState } from "react";

function Sleeve() {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [initialEnteredNumber, setInitialEnteredNumber] = useState("");
  const [finished, setFinished] = useState("");
  const [displayedNumber, setDisplayedNumber] = useState(null);
  const [finishedNumber, setFinishedNumber] = useState(null);

  useEffect(() => {
    const storedEnteredNumber = localStorage.getItem("enteredNumber");
    const storedFinishedNumber = localStorage.getItem("finishedNumber");

    if (storedEnteredNumber) {
      setDisplayedNumber(storedEnteredNumber);
      setInitialEnteredNumber(storedEnteredNumber);
    }

    if (storedFinishedNumber) {
      setFinishedNumber(storedFinishedNumber);
    }
  }, []);

  const handleInputChange = (e) => {
    setEnteredNumber(e.target.value);
    setFinishedNumber(null);
    setInitialEnteredNumber(e.target.value);
  };

  const handleFinishedInputChange = (e) => {
    setFinished(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedNumber(enteredNumber);
    setInitialEnteredNumber(enteredNumber);
    setFinishedNumber(null);

    localStorage.setItem("enteredNumber", enteredNumber);
  };

  const handleButtonClick2 = () => {
    const remaining =
      finishedNumber === null
        ? initialEnteredNumber - finished
        : finishedNumber - finished;

    setFinishedNumber(remaining);

    localStorage.setItem("finishedNumber", remaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Sleeve</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={enteredNumber}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleButtonClick}>submit</button>
        {displayedNumber && <p>Total: {displayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={finished}
            onChange={handleFinishedInputChange}
          />
          <button onClick={handleButtonClick2}>submit</button>
          {finishedNumber !== null && <p>Remaining: {finishedNumber}</p>}
        </label>
      </div>
    </div>
  );
}

export default Sleeve;

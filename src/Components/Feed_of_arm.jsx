import React, { useEffect, useState } from "react";

function Feed_of_arm() {
  const [Feed_of_armenteredNumber, setFeed_of_armEnteredNumber] = useState("");
  const [Feed_of_arminitialEnteredNumber, setFeed_of_armInitialEnteredNumber] =
    useState("");
  const [Feed_of_armfinished, setFeed_of_armFinished] = useState("");
  const [Feed_of_armdisplayedNumber, setFeed_of_armDisplayedNumber] =
    useState(null);
  const [Feed_of_armfinishedNumber, setFeed_of_armFinishedNumber] =
    useState(null);

  useEffect(() => {
    const Feed_of_armstoredEnteredNumber = localStorage.getItem(
      "Feed_of_armenteredNumber"
    );
    const Feed_of_armstoredFinishedNumber = localStorage.getItem(
      "Feed_of_armfinishedNumber"
    );

    if (Feed_of_armstoredEnteredNumber) {
      setFeed_of_armDisplayedNumber(Feed_of_armstoredEnteredNumber);
      setFeed_of_armInitialEnteredNumber(Feed_of_armstoredEnteredNumber);
    }

    if (Feed_of_armstoredFinishedNumber) {
      setFeed_of_armFinishedNumber(Feed_of_armstoredFinishedNumber);
    }
  }, []);

  const Feed_of_armhandleInputChange = (e) => {
    setFeed_of_armEnteredNumber(e.target.value);
    setFeed_of_armFinishedNumber(null);
    setFeed_of_armInitialEnteredNumber(e.target.value);
  };

  const Feed_of_armhandleFinishedInputChange = (e) => {
    setFeed_of_armFinished(e.target.value);
  };

  const Feed_of_armhandleButtonClick = () => {
    setFeed_of_armDisplayedNumber(Feed_of_armenteredNumber);
    setFeed_of_armInitialEnteredNumber(Feed_of_armenteredNumber);
    setFeed_of_armFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("Feed_of_armenteredNumber", Feed_of_armenteredNumber);
  };

  const Feed_of_armhandleButtonClick2 = () => {
    const Feed_of_armremaining =
      Feed_of_armfinishedNumber === null
        ? Feed_of_arminitialEnteredNumber - Feed_of_armfinished
        : Feed_of_armfinishedNumber - Feed_of_armfinished;

    setFeed_of_armFinishedNumber(Feed_of_armremaining);

    localStorage.setItem("Feed_of_armfinishedNumber", Feed_of_armremaining);
  };

  return (
    <div className="Main">
      <div>
        <h1>Feed of Arm</h1>
      </div>
      <div className="field">
        <label>
          Total Item:
          <input
            type="text"
            value={Feed_of_armenteredNumber}
            onChange={Feed_of_armhandleInputChange}
          />
        </label>
        <button onClick={Feed_of_armhandleButtonClick}>submit</button>
        {Feed_of_armdisplayedNumber && (
          <p>Total: {Feed_of_armdisplayedNumber}</p>
        )}
        <label>
          Finished item:
          <input
            type="text"
            value={Feed_of_armfinished}
            onChange={Feed_of_armhandleFinishedInputChange}
          />
          <button onClick={Feed_of_armhandleButtonClick2}>submit</button>
          {Feed_of_armfinishedNumber !== null && (
            <p>Remaining: {Feed_of_armfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default Feed_of_arm;

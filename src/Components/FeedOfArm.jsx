import React, { useEffect, useState } from "react";

function FeedOfArm() {
  const [FeedOfArmenteredNumber, setFeedOfArmEnteredNumber] = useState("");
  const [FeedOfArminitialEnteredNumber, setFeedOfArmInitialEnteredNumber] =
    useState("");
  const [FeedOfArmfinished, setFeedOfArmFinished] = useState("");
  const [FeedOfArmdisplayedNumber, setFeedOfArmDisplayedNumber] =
    useState(null);
  const [FeedOfArmfinishedNumber, setFeedOfArmFinishedNumber] = useState(null);

  useEffect(() => {
    const FeedOfArmstoredEnteredNumber = localStorage.getItem(
      "FeedOfArmenteredNumber"
    );
    const FeedOfArmstoredFinishedNumber = localStorage.getItem(
      "FeedOfArmfinishedNumber"
    );

    if (FeedOfArmstoredEnteredNumber) {
      setFeedOfArmDisplayedNumber(FeedOfArmstoredEnteredNumber);
      setFeedOfArmInitialEnteredNumber(FeedOfArmstoredEnteredNumber);
    }

    if (FeedOfArmstoredFinishedNumber) {
      setFeedOfArmFinishedNumber(FeedOfArmstoredFinishedNumber);
    }
  }, []);

  const FeedOfArmhandleInputChange = (e) => {
    setFeedOfArmEnteredNumber(e.target.value);
    setFeedOfArmFinishedNumber(null);
    setFeedOfArmInitialEnteredNumber(e.target.value);
  };

  const FeedOfArmhandleFinishedInputChange = (e) => {
    setFeedOfArmFinished(e.target.value);
  };

  const FeedOfArmhandleButtonClick = () => {
    setFeedOfArmDisplayedNumber(FeedOfArmenteredNumber);
    setFeedOfArmInitialEnteredNumber(FeedOfArmenteredNumber);
    setFeedOfArmFinishedNumber(null); // Reset finishedNumber when a new number is typed

    localStorage.setItem("FeedOfArmenteredNumber", FeedOfArmenteredNumber);
  };

  const FeedOfArmhandleButtonClick2 = () => {
    const FeedOfArmremaining =
      FeedOfArmfinishedNumber === null
        ? FeedOfArminitialEnteredNumber - FeedOfArmfinished
        : FeedOfArmfinishedNumber - FeedOfArmfinished;

    setFeedOfArmFinishedNumber(FeedOfArmremaining);

    localStorage.setItem("FeedOfArmfinishedNumber", FeedOfArmremaining);
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
            value={FeedOfArmenteredNumber}
            onChange={FeedOfArmhandleInputChange}
          />
        </label>
        <button onClick={FeedOfArmhandleButtonClick}>submit</button>
        {FeedOfArmdisplayedNumber && <p>Total: {FeedOfArmdisplayedNumber}</p>}
        <label>
          Finished item:
          <input
            type="text"
            value={FeedOfArmfinished}
            onChange={FeedOfArmhandleFinishedInputChange}
          />
          <button onClick={FeedOfArmhandleButtonClick2}>submit</button>
          {FeedOfArmfinishedNumber !== null && (
            <p>Remaining: {FeedOfArmfinishedNumber}</p>
          )}
        </label>
      </div>
    </div>
  );
}

export default FeedOfArm;

import React, { useState, useEffect } from "react";

const InputForm = () => {
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  // Load data from local storage on component mount
  useEffect(() => {
    const storedText = localStorage.getItem("submittedText");
    if (storedText) {
      setSubmittedText(storedText);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(inputText);
    // Save submitted text to local storage
    localStorage.setItem("submittedText", inputText);
  };

  return (
    <div className="Headsite">
      <div>
        <h1>LOT</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          TITLE:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedText && (
        <div>
          <h2>Submitted Title:</h2>
          <p>{submittedText}</p>
        </div>
      )}
    </div>
  );
};

export default InputForm;

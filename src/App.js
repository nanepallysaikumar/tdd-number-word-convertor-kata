import React, { useState } from "react";
import { MAX_NUM_LENGTH } from "./constants/applicationConstants";
import { isNumberOverLimit, isNumeric } from "./utility/validator";

function App() {
  const [displayText, setDisplayText] = useState("");
  function handleChangeEvent(event) {
    const inputValue = event.target.value;

    if (isNumberOverLimit(inputValue, MAX_NUM_LENGTH)) {
      setDisplayText("Please enter only digits less than or equal to 5.");
    }

    if (!isNumeric(inputValue)) {
      setDisplayText("Please enter only digits.");
    }
  }

  return (
    <div className="App">
      <input
        aria-label="number-input"
        onChange={handleChangeEvent}
        type="text"
      />
      <p data-testid="info-message">{displayText}</p>
    </div>
  );
}

export default App;

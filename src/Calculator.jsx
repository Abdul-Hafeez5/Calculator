import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clear();
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result);
    } catch (error) {
      setInput("Please enter valid operators");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="input-container">
        <button onClick={() => handleButtonClick("C")} className="clear-button">
          C
        </button>
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
    </div>
  );
}

export default Calculator;

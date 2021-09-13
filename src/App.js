import './App.css';
import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState('Type text here...');
  const [conversionMode, setConversionMode] = useState('lowercase');
  const [textOutput, setTextOutput] = useState('');
  const [colorSelection, setColorSelection] = useState('blue');
  const [textColor, setTextColor] = useState('');

  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  }

  const handleColorChange = e => {
    setColorSelection(e.target.value);
  }

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    conversionMode == 'lowercase' ? setTextOutput(textInput.toLowerCase()) : setTextOutput(textInput.toUpperCase());
    setTextColor(colorSelection);
    setTextInput('Type text here...');
  };

  const fieldsetStyles = { border: 'none' };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
        <form onSubmit={handleSubmit}>
          <div className="form-control form-control__text">
            <label htmlFor="text">Text to be converted:</label>
            <textarea
              id="text"
              onChange={handleTextareaChange}
              value={textInput}
            />
          </div>
          <fieldset style={fieldsetStyles}>
            <legend>Select whether to convert text to uppercase or lowercase:</legend>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="conversion"
                id="conversion-0"
                value="lowercase"
                checked={conversionMode === "lowercase"}
                onChange={handleRadioChange}
              />
              <label htmlFor="conversion-0">Convert text to lowercase</label>
            </div>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="conversion"
                id="conversion-1"
                value="uppercase"
                checked={conversionMode === "uppercase"}
                onChange={handleRadioChange}
              />
              <label htmlFor="conversion-1">Convert text to uppercase</label>
            </div>
          </fieldset>
          <fieldset style={fieldsetStyles}>
            <legend>Select which color you want the text to be:</legend>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="colorSelection"
                id="blue"
                value="blue"
                checked={colorSelection === "blue"}
                onChange={handleColorChange}
              />
              <label htmlFor="blue">Change text color to <span style={{color: 'blue'}}>Blue</span></label>
            </div>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="colorSelection"
                id="purple"
                value="purple"
                checked={colorSelection === "purple"}
                onChange={handleColorChange}
              />
              <label htmlFor="purple">Change text color to <span style={{color: 'purple'}}>Purple</span></label>
            </div>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="colorSelection"
                id="green"
                value="green"
                checked={colorSelection === "green"}
                onChange={handleColorChange}
              />
              <label htmlFor="green">Change text color to <span style={{color: 'green'}}>Green</span></label>
            </div>
          </fieldset>
          <input type="submit" value="Submit" />
          <div className="result-wrapper form-control form-control__text">
            <label htmlFor="result">Converted text:</label>
            <output id="result" style={{color: textColor}}>{textOutput}</output>
          </div>
        </form>
    </div>
  );
}

export default App;

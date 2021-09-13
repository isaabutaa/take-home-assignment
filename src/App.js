import './App.css';
import './fonts.css';
import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState('Type text here...');
  const [conversionMode, setConversionMode] = useState('lowercase');
  const [textOutput, setTextOutput] = useState('');
  const [colorSelection, setColorSelection] = useState('blue');
  const [textColor, setTextColor] = useState('');
  const [fontSelection, setFontSelection] = useState("'Alfa Slab One', cursive");
  const [textFont, setTextFont] = useState('');

  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  };

  const handleColorChange = e => {
    setColorSelection(e.target.value);
  };

  const handleFontChange = e => {
    setFontSelection(e.target.value);
  };

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    conversionMode == 'lowercase' ? setTextOutput(textInput.toLowerCase()) : setTextOutput(textInput.toUpperCase());
    setTextColor(colorSelection);
    setTextFont(fontSelection);
    setTextInput('Type text here...');
  };

  const fieldsetStyles = { border: 'none' };
  const legendStyles = { fontWeight: '500', padding: '2px' };
  const textOutputStyles = { color: textColor, fontFamily: textFont };

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
            <legend style={legendStyles}>Select whether to convert text to uppercase or lowercase:</legend>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="conversion"
                id="lowercase"
                value="lowercase"
                checked={conversionMode === "lowercase"}
                onChange={handleRadioChange}
              />
              <label htmlFor="lowercase">Convert text to lowercase</label>
            </div>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="conversion"
                id="uppercase"
                value="uppercase"
                checked={conversionMode === "uppercase"}
                onChange={handleRadioChange}
              />
              <label htmlFor="uppercase">Convert text to uppercase</label>
            </div>
          </fieldset>
          <fieldset style={fieldsetStyles}>
            <legend style={legendStyles}>Select which color you want the text to be:</legend>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="color selection"
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
                name="color selection"
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
                name="color selection"
                id="green"
                value="green"
                checked={colorSelection === "green"}
                onChange={handleColorChange}
              />
              <label htmlFor="green">Change text color to <span style={{color: 'green'}}>Green</span></label>
            </div>
          </fieldset>
          <fieldset style={fieldsetStyles} name="font selection">
            <legend style={legendStyles}>Select which font you want the text to be:</legend>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="font selection"
                id="alfaSlabOne"
                value="'Alfa Slab One', cursive"
                checked={fontSelection === "'Alfa Slab One', cursive"}
                onChange={handleFontChange}
              />
              <label htmlFor="alfaSlabOne">Change font to <span style={{fontFamily: "'Alfa Slab One', cursive"}}>Alfa Slab One</span></label>
            </div>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="font selection"
                id="righteous"
                value="'Righteous', cursive"
                checked={fontSelection === "'Righteous', cursive"}
                onChange={handleFontChange}
              />
              <label htmlFor="righteous">Change font to <span style={{fontFamily: "'Righteous', cursive"}}>Righteous</span></label>
            </div>
            <div className="form-control form-control__radio">
              <input
                type="radio"
                name="font selection"
                id="spaceMono"
                value="'Space Mono', monospace"
                checked={fontSelection === "'Space Mono', monospace"}
                onChange={handleFontChange}
              />
              <label htmlFor="spaceMono">Change font to <span style={{fontFamily: "'Space Mono', monospace"}}>Space Mono</span></label>
            </div>
          </fieldset>
          <input type="submit" value="Submit" />
          <div className="result-wrapper form-control form-control__text">
            <label htmlFor="result">Converted text:</label>
            <output id="result" style={textOutputStyles}>{textOutput}</output>
          </div>
        </form>
    </div>
  );
}

export default App;

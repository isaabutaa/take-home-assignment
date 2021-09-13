import React, { useState } from "react";
import TextCaseFieldset from './components/TextCaseFieldset';
import ColorFieldset from './components/ColorFieldset';
import FontFieldset from './components/FontFieldset';
import './styles/App.css';
import './styles/fonts.css';

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
          <TextCaseFieldset handleRadioChange={handleRadioChange} conversionMode={conversionMode} />
          <ColorFieldset handleColorChange={handleColorChange} colorSelection={colorSelection} />
          <FontFieldset handleFontChange={handleFontChange} fontSelection={fontSelection} />
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

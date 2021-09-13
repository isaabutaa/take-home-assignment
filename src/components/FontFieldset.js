import React from 'react';

const FontFieldset = (props) => {
  const { fontSelection, handleFontChange } = props;

  return (
    <fieldset name="font selection">
      <legend>Select which font you want the text to be:</legend>
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
  )
};

export default FontFieldset;
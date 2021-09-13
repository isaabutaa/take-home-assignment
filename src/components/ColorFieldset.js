import React from 'react';

const ColorFieldset = (props) => {
  const { handleColorChange, colorSelection } = props;

  return (
    <fieldset>
      <legend>Select which color you want the text to be:</legend>
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
  );
};

export default ColorFieldset;
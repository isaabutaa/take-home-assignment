import React from 'react';

const TextCaseFieldset = (props) => {
  const { handleRadioChange, conversionMode } = props;

  return (
    <fieldset>
      <legend>Select whether to convert text to uppercase or lowercase:</legend>
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
  );
};

export default TextCaseFieldset;
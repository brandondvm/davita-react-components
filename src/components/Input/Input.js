import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  // Props
  const { label = '', placeholder = '', onBlur, innerLabel, selectButtons, errorMessage, name, id, register, accessibiltity, type = 'text', header, characterMax, defaultValue, hideMax } = props;
  // State Hooks
  const [activeButton, setActiveButton] = useState((selectButtons && selectButtons.activeButton) || 'left');  
  const [focusedLabel, setFocusedLabel] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (defaultValue && !value) {
      setValue(defaultValue);
    }
  }, [defaultValue, value])

  const handleButtonClick = (activeButton, callback) => {
    setActiveButton(activeButton);
    callback && callback();
  };  

  const handleFocus = (value, e) => {
    setFocusedLabel(value);
    if (!value) {
      onBlur && onBlur(e.target.value);
    }
  };

  const handleInputChange = e => {
    if (placeholder === 'HH:MM') {
      const inputValue = e.target.value;
      if (inputValue.length > value.length) {
        if (inputValue.length === 2) {
          e.target.value = `${inputValue}:`;
        }
        if (inputValue.length === 3 && !inputValue.includes(':')) {
          e.target.value = `${value}:${inputValue[inputValue.length - 1]}`;
        }
      }
    }
    setValue(e.target.value);
  }

  const focusedLabelColor = errorMessage ? '#CE3616' : '#0069B1';
  const unfocusedLabelColor = errorMessage ? '#CE3616' : '#0d1221';

  return (
    <div className="input-component">      
      { header && (
        <div className="input-component_header">
          <i className={`di ${ header.className }`} />
          <p className="input-component_header_text">{ header.text }</p>
        </div>
      )}
      <div className="input-component_input-area">        
        {label && (
          <label
            htmlFor={id}
            style={{ color: focusedLabel ? focusedLabelColor : unfocusedLabelColor }}>
            {label}
          </label>
        )}
        {!label && (
          <label
            htmlFor={id}
            className={`placeholder${focusedLabel || value ? ' focused' : ''}${!focusedLabel && value ? ' regular' : ''}`}
            style={{ color: focusedLabel && focusedLabelColor }}
          >
            {placeholder}
          </label>
        )}
        <input
          id={id}
          name={name}
          className={`input-component_input ${errorMessage ? 'error-present' : ''} ${innerLabel ? 'inner-label-present' : ''} ${selectButtons ? 'select-buttons-present' : ''}`}
          type={type}
          placeholder={label ? placeholder : ''}
          onFocus={() => handleFocus(true)}
          onBlur={e => handleFocus(false, e)}
          onChange={handleInputChange}
          maxLength={characterMax}
          ref={register}
          aria-label={accessibiltity?.ariaLabel}
          aria-invalid={!!errorMessage}
          inputMode={ type === 'number' || placeholder === "HH:MM" ? 'decimal' : 'text' }
        />
        {
          (innerLabel && !selectButtons) && (
            <div 
              className={`input-component_input-area_unit ${!label ? 'input-component_input-area_unit_no-label' : ''} ${focusedLabel || value ? 'active' : ''}`}>
              {innerLabel}
            </div>
          )
        }
        {
          selectButtons && (
            <div className="input-component_input-area_buttons">
              <button
                type="button"
                className={activeButton === 'left' ? 'active-button' : ''}
                onClick={() => handleButtonClick('left', selectButtons.leftButtonOnClick)}
              >
                {selectButtons.leftButtonLabel}
              </button>
              <button
                type="button"
                className={activeButton === 'right' ? 'active-button' : ''}
                onClick={() => handleButtonClick('right', selectButtons.rightButtonOnClick)}
              >
                {selectButtons.rightButtonLabel}
              </button>
            </div>
          )
        }

      </div>
      <div className="input-component_feedback">
        { characterMax && !hideMax && <span className="input-component_char-counter">{value?.length || 0}/{characterMax}</span>}
        { errorMessage && <span>{ errorMessage }</span> }
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  innerLabel: PropTypes.string,
  errorMessage: PropTypes.string,
  characterMax: PropTypes.string,
  selectButtons: PropTypes.shape({
    leftButtonLabel: PropTypes.string,
    leftButtonOnClick: PropTypes.func,
    rightButtonLabel: PropTypes.string,
    rightButtonOnClick: PropTypes.func,
  }),
  id: PropTypes.string.isRequired,
};

export default Input;

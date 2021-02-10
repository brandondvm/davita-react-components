import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
  // Props
  const { label = '', placeholder = '', onBlur, errorMessage, name, id, register, accessibiltity, characterMax, defaultValue } = props;
  // State Hooks
  const [focusedLabel, setFocusedLabel] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);

  const handleFocus = (value, e) => {
    setFocusedLabel(value);
    if (!value) {
      onBlur && onBlur(e.target.value);
    }
  };

  const focusedLabelColor = errorMessage ? '#CE3616' : '#0069B1';
  const unfocusedLabelColor = errorMessage ? '#CE3616' : '#0d1221';

  return (
    <div className="textarea-component">
      <div className="textarea-component_input-area">        
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
        <textarea
          id={id}
          name={name}
          className={`textarea-component_input ${errorMessage ? 'error-present' : ''}`}
          placeholder={label ? placeholder : ''}
          onFocus={() => handleFocus(true)}
          onBlur={e => handleFocus(false, e)}
          onChange={e => setValue(e.target.value)}
          maxLength={characterMax}
          ref={register}
          aria-label={accessibiltity?.ariaLabel}
          aria-invalid={!!errorMessage}
        />
      </div>
      <div className="textarea-component_feedback">
        { characterMax && <span className="input-component_char-counter">{value?.length || 0}/{characterMax}</span>}
        { errorMessage && <span>Error: { errorMessage }</span> }
      </div>
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  characterMax: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  register: PropTypes.func,
  accessibiltity: PropTypes.object
};

export default Textarea;

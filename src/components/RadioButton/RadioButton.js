import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import idx from 'idx';

const RadioButton = ({ inputLabel, inputName, inputId, inputValue, isInputChecked, onOptionClick, textInput, radioText, errors = [], register = () => {}, validation, watchFields = [], watch = () => {} }) => {
  const error = idx(errors, _ => _[textInput.name]);
  return(
    <div className="radiobutton-component">
      <input
        type="radio"
        id={inputId}
        aria-checked={isInputChecked}
        defaultChecked={isInputChecked}
        value={inputValue}        
        name={inputName}
        aria-label={inputLabel}
        ref={register(validation)}
        className="visually-hidden"
        onChange={onOptionClick}
      />
      <label
        htmlFor={inputId}
        className={`radiobutton-component_label ${
          isInputChecked ? 'is-checked' : ''
        }`}
      >
        {inputLabel}
      </label>
      {watchFields[textInput?.watching] === inputValue && (
        <Input
          id={textInput.id}
          placeholder={textInput.placeholder}
          name={textInput.name}
          innerLabel={textInput.innerLabel}
          type={textInput.type}
          register={register(textInput.validation)}
          errorMessage={error?.type ? error.message : null}
          defaultValue={watch(textInput.name)}
        />
      )}
      {watchFields[radioText?.watching] === inputValue && (
        <p className="radiobutton-component_text">{ radioText.text }</p>
      )}
    </div>
  );
};

RadioButton.propTypes = {
  inputLabel: PropTypes.string,
  inputName: PropTypes.string,
  inputId: PropTypes.string,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  isInputChecked: PropTypes.bool,
  onInputChange: PropTypes.func,
  textInput: PropTypes.object,
  register: PropTypes.func,
};

export default RadioButton;

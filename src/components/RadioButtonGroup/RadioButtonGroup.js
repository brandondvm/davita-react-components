import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton/RadioButton';

const RadioButtonGroup = ({ options = [], label, register, watch, watchFields = [], errors, onRadioButtonChange }) => {
  const [ radioOptions, setRadioOptions] = useState(options);

  const optionClick = radioOption => {
    onRadioButtonChange && onRadioButtonChange(radioOption.name, radioOption.value);
    setRadioOptions(options.map(option => ({
      ...option,
      checked: option.id === radioOption.id
    })));
  }

  return (
    <div className="radiobutton-group-component">
      { label && <p className="radiobutton-group-component_label">{ label }</p> }
      {
        radioOptions.map((option) => {
          const { label, name, id, value, checked, textInput, radioText, validation } = option;          
          return (
            <RadioButton 
              key={ id }
              inputLabel={ label } 
              inputName={ name } 
              inputId={ id }  
              inputValue={ value } 
              isInputChecked={ checked }  
              onOptionClick={() => optionClick(option)}
              register={register}
              validation={validation}
              errors={errors}
              textInput={textInput}
              radioText={radioText}
              watchFields={watchFields}
              watch={watch} />
          );
        })
      }
    </div>
  );
};

RadioButtonGroup.propTypes = {
  options: PropTypes.array,
  register: PropTypes.func,
  watchFields: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default RadioButtonGroup;

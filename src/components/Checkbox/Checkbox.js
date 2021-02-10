import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const Checkbox = ({
  id,
  name,
  label,
  checked,
  textInput,
  register,
  watchFields,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const toggleCheckboxState = () => setIsChecked(!isChecked);

  return (
    <div className="checkbox-component">
      <input
        id={id}
        aria-checked={isChecked}
        defaultChecked={isChecked}
        ref={register}
        name={name}
        aria-label={label}
        className="visually-hidden"
        onChange={toggleCheckboxState}
        type="checkbox"
      />
      <label
        htmlFor={id}
        className={`checkbox-component_label${isChecked ? ' checked' : ''}`}
      >
        {label}
      </label>
      {watchFields && watchFields[textInput?.watching] && (
        <Input
          id={textInput.id}
          placeholder={textInput.placeholder}
          name={textInput.name}
          type={textInput.type}
          register={register(textInput.validation)}
        />
      )}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  textInput: PropTypes.object,
  register: PropTypes.func,
};

export default Checkbox;

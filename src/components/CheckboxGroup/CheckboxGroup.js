import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './_checkboxGroup.scss';
import Checkbox from '../Checkbox/Checkbox';

const CheckboxGroup = ({ options = [], register, watchFields = [] }) => {
  return (
    <div className="checkboxGroup">
      {options.map(({ id, name, label, checked, textInput }) => (
        <Checkbox
          key={id}
          id={id}
          name={name}
          label={label}
          checked={checked}
          register={register}
          textInput={textInput}
          watchFields={watchFields}
        />
      ))}
    </div>
  );
};

CheckboxGroup.propTypes = {
  options: PropTypes.array,
  register: PropTypes.func,
  watchFields: PropTypes.object,
};

export default CheckboxGroup;

import React from 'react';
import PropTypes from 'prop-types';
import idx from 'idx';

import Input from '../Input/Input';

const InputGroup = ({ items,  handlers, register, errors, watch }) => {

  const getInput = item => {
    const { id, name, type, label, selectButtons, placeholder, validation, accessibiltity, innerLabel } = item;
    const error = idx(errors, _ => _[name]);
    const selectButtonsProps = selectButtons ? {
      leftButtonLabel: selectButtons.leftButtonLabel,
      leftButtonOnClick: handlers[selectButtons.leftButtonOnClick],
      rightButtonLabel: selectButtons.rightButtonLabel,
      rightButtonOnClick: handlers[selectButtons.rightButtonOnClick]
    } : null;

    return (
      <Input
        register={register(validation)}
        selectButtons={selectButtonsProps}
        errorMessage={error?.type ? error.message : null}
        placeholder={placeholder}
        type={type}
        label={label}
        id={id}
        innerLabel={innerLabel}
        name={name}
        accessibiltity={accessibiltity}
        defaultValue={watch(name)}
      />
    )
  };

  return (
    <div className="input-group-component">
      { 
        items.map((item) => (
          <React.Fragment key={item.id}>
            { getInput(item) }
            <span className="input-group-component_divider">/</span>
          </React.Fragment>
        ))
      }
    </div>
  );
};

InputGroup.propTypes = {
  items: PropTypes.array,
  handlers: PropTypes.object,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default InputGroup;

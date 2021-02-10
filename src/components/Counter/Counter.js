import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ id, value = 0, name, label = '', labelClass = 'yellow', isReadOnly, register, onCounterChange }) => {
  const [ counter, setCounter] = useState(value);

  function counterIncrement() {
    const newValue = Number(counter) + 1;
    setCounter(newValue);
    onCounterChange && onCounterChange(name, newValue);
  };

  function counterDecrement() {
    const newValue = Number(counter) - 1;
    if (newValue >= 0) {
      setCounter(newValue);
      onCounterChange && onCounterChange(name, newValue);
    }    
  };

  function onValueChange(value) {
    value ? setCounter(Number(value)) : setCounter(value);
  };

  return (
    <div className="counter-component">      
      {
        label && (
          <div className="counter-component_label-wrapper">
            <div className={`counter-component_label_circle ${ labelClass }`}></div>
            <p>{ label }</p>
          </div>
        )        
      }
      {
        isReadOnly ? <input className="counter-component_readonly" type="text" ref={register} name={name} readOnly /> : (
          <div className="counter-component_input-wrapper">
            <div className={`counter-component_btn counter-component_btn-decrement ${counter <= 0 ? 'disabled' : ''}`} onClick={ counterDecrement }></div>
            <input id={id} className="counter-component_input" type="number" min="0" value={!register ? counter : undefined} ref={register} name={ name } onChange={ ({ target }) => onValueChange(target.value) } />
            <div className="counter-component_btn counter-component_btn-increment" onClick={ counterIncrement }></div>
          </div>
        )
      }
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.string,
  isReadOnly: PropTypes.bool,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Counter;

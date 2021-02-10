import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SegmentedController = ({ controllerOptions = [], register }) => {
  const [ options, setOptions] = useState(controllerOptions);  

  const optionClick = selectedOption => () => {
    setOptions(options.map(option => ({
      checked: option.id === selectedOption.id,
      ...option
    })));
  }

  return (
    <div className="segmented-controller-component">      
      {         
        options.map((option, index) => 
        <div key={index} className="segmented-controller-component_item">
          <input defaultChecked={option.checked} className={`segmented-controller-component_input ${option.checked ? 'checked' : ''}`} ref={register} role="button" type="radio" id={option.id} name={option.name} value={option.value} />
          <label role="button" onClick={optionClick(option)} className="segmented-controller-component_item" htmlFor={option.id}>{option.label}</label>
        </div>
          
        )
      }
    </div>
  );
};

SegmentedController.propTypes = {
  controllerOptions: PropTypes.array,
  register: PropTypes.func
};

export default SegmentedController;

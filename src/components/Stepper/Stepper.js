import React from 'react';
import PropTypes from 'prop-types';

const Stepper = ({ steps = 0, activeStep = 0 }) => {
  const stepsArray = [ ...Array(steps).keys() ];
  return (
    <div className="stepper-component">
      <div className="stepper-component_line"></div>
      {
        stepsArray.map((step, index) =>
          <div key={step} className={`stepper-component_step ${(index + 1) <= activeStep ? 'stepper-component_step_active' : ''}`} />
        )
      }      
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.number,
  activeStep: PropTypes.number
};

export default Stepper;

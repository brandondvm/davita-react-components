import enzyme from 'enzyme';
import React from 'react';

import Stepper from './Stepper';

const mockProps = {
  steps: 6,
  activeStep: 3,
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<Stepper { ...updatedProps } />);
}

describe('Stepper Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component should render 6 steps when steps prop is 6', () => {
    const wrapper = setup();
    const activeSteps = wrapper.find('.stepper-component_step');
    expect(activeSteps.length).toEqual(6);
  });

  test('Component should render 3 steps when steps prop is 3', () => {
    const wrapper = setup({ steps: 3 });
    const activeSteps = wrapper.find('.stepper-component_step');
    expect(activeSteps.length).toEqual(3);
  });

  test('Component should has 3 active steps when active step is 3', () => {
    const wrapper = setup();
    const activeSteps = wrapper.find('.stepper-component_step_active');
    expect(activeSteps.length).toEqual(3);
  });

  test('Component should has 0 active steps when is not active step', () => {
    const wrapper = setup({ activeStep: 0 });
    const activeSteps = wrapper.find('.stepper-component_step_active');
    expect(activeSteps.length).toEqual(0);
  });
});

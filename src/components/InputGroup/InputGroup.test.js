import enzyme from 'enzyme';
import React from 'react';

import InputGroup from './InputGroup';

const mockProps = {
  items: [
    {
      id: 'systolic',
      name: 'systolic',
      label: 'Systolic',
      placeholder: 'Systolic',
      componentType: 'input',
      innerLabel: 'mmHg',
      type: 'number',
      validation: {
        required: 'Systolic value is required',
      }
    },
    {
      id: 'diastolic',
      name: 'diastolic',
      label: 'Diastolic',
      placeholder: 'Diastolic',
      componentType: 'input',
      innerLabel: 'mmHg',
      type: 'number',
      validation: {
        required: 'Diastolic value is required',
      }
    },        
  ], 
  handlers: {},
  register: jest.fn(),
  watch: jest.fn(),
  errors: {}
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<InputGroup { ...updatedProps } />);
}

describe('InputGroup Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component should render inputs correctly on DOM', () => {
    const wrapper = setup();
    const inputComponents = wrapper.find('Input');
    expect(inputComponents.length).toEqual(2);
  });
});

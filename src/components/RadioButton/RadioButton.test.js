import enzyme from 'enzyme';
import React from 'react';

import RadioButton from './RadioButton';

const mockProps = {
  inputLabel: 'Option 1', 
  inputName: 'radioName', 
  inputId: 'Option1',  
  inputValue: 1, 
  isInputChecked: true,
  watchFields:[],
  onOptionClick: jest.fn(),
  register: jest.fn(),
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<RadioButton { ...updatedProps } />);
}

describe('RadioButton Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component should render props correctly on DOM', () => {
    const wrapper = setup();
    const inputEl = wrapper.find('input');
    const inputLabelEl = wrapper.find('.radiobutton-component_label');

    expect(inputEl.prop('value')).toEqual(mockProps.inputValue);
    expect(inputEl.prop('name')).toEqual(mockProps.inputName);
    expect(inputEl.prop('id')).toEqual(mockProps.inputId);
    expect(inputLabelEl.text()).toEqual(mockProps.inputLabel);
  });

  test('Component should render correctly input checked', () => {
    const wrapper = setup();
    const inputLabelEl = wrapper.find('.radiobutton-component_label');
    expect(inputLabelEl.hasClass('is-checked')).toBeTruthy();
  });

  test('Component should render correctly input unchecked', () => {
    const wrapper = setup({ isInputChecked: false });
    const inputLabelEl = wrapper.find('.radiobutton-component_label');
    expect(inputLabelEl.hasClass('is-checked')).toBeFalsy();
  });
});

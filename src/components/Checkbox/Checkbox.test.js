import enzyme from 'enzyme';
import React from 'react';

import Checkbox from './Checkbox';

const mockProps = {
  id: "option1",
  label: "option1",
  name: "option1",
  value: "option1",
  checked: false,
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<Checkbox { ...updatedProps } />);
}

describe('Checkbox Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component should render props correctly on DOM', () => {
    const wrapper = setup();
    const checkboxLabel = wrapper.find('.checkbox-component_label');
    expect(checkboxLabel.text()).toEqual(mockProps.label);
  });

  test('Component should render correctly checkbox checked', () => {
    const wrapper = setup({ checked: true });
    const inputLabelEl = wrapper.find('.checkbox-component_label');
    expect(inputLabelEl.hasClass('checked')).toBeTruthy();
  });

  test('Component should render correctly checkbox unchecked', () => {
    const wrapper = setup();
    const inputLabelEl = wrapper.find('.checkbox-component_label');
    expect(inputLabelEl.hasClass('checked')).toBeFalsy();
  });

  test('Component should toggle checkbox status', () => {
    const wrapper = setup();
    let inputLabelEl = wrapper.find('.checkbox-component_label');
    expect(inputLabelEl.hasClass('checked')).toBeFalsy();

    wrapper.find('.visually-hidden').simulate('change');

    inputLabelEl = wrapper.find('.checkbox-component_label');
    expect(inputLabelEl.hasClass('checked')).toBeTruthy();
  });
});

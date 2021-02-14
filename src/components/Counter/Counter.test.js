import enzyme from 'enzyme';
import React from 'react';

import Counter from './Counter';

const mockProps = {
  value: 0,
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<Counter { ...updatedProps } />);
}

describe('Counter Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component renders label value form props correctly', () => {
    const label = 'Checkbox label';
    const wrapper = setup({ label });
    const checkboxLabel = wrapper.find('.counter-component_label-wrapper p');
    expect(checkboxLabel.text()).toEqual(label);
    expect(checkboxLabel).toBeDefined();
  });

  test('Component renders input value form props correctly', () => {
    const wrapper = setup({ value: 5 });
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toEqual(5);
  });

  test('Component renders decrement button as disabled when value is 0', () => {
    const wrapper = setup();
    const buttonDisabled = wrapper.find('.disabled');
    expect(buttonDisabled.length).toEqual(1);
  });

  test('Component renders decrement button as enable when value is bigger than 0', () => {
    const wrapper = setup({ value: 5 });
    const buttonDisabled = wrapper.find('.disabled');
    expect(buttonDisabled.length).toEqual(0);
  });

  test('Component increments state value on plus button clicks', () => {
    const wrapper = setup();
    wrapper.find('.counter-component_btn-increment').simulate('click');
    expect(wrapper.find('input').prop('value')).toBe(1);
  });

  test('Component decrements state value on minus button clicks', () => {
    const wrapper = setup({ value: 5 });
    wrapper.find('.counter-component_btn-decrement').simulate('click');
    expect(wrapper.find('input').prop('value')).toBe(4);
  });

  test('Component does not decrement state value on minus button clicks, when value is 0', () => {
    const wrapper = setup({ value: 0 });
    wrapper.find('.counter-component_btn-decrement').simulate('click');
    expect(wrapper.find('input').prop('value')).toBe(0);
  });
});

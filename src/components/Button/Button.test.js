import enzyme from 'enzyme';
import React from 'react';

import Button from './Button';

const mockProps = {
  disabled: false,
  size: 'small',
  label: 'Small button label',
  fill: 'blue',
  onClick: jest.fn(),
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<Button { ...updatedProps } />);
}

describe('Button Component', () => {
  test('Component renders correctly when disabled prop is set to true', () => {
    const wrapper = setup({ disabled: true });

    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component renders correctly when disabled prop is set to false', () => {
    const wrapper = setup();

    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component registers click events', () => {
    const wrapper = setup();

    wrapper.find('button').simulate('click');
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});

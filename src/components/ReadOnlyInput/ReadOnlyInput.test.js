import enzyme from 'enzyme';
import React from 'react';

import ReadOnlyInput from './ReadOnlyInput';

const mockProps = {
  label: 'test label',
  value: 'test value',
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<ReadOnlyInput { ...updatedProps } />);
}

describe('Input Component', () => {
  test('Component renders correctly simple empty field', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });
});

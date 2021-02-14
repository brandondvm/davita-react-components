import enzyme from 'enzyme';
import React from 'react';

import Input from './Input';

const mockProps = {
  label: '',
  placeholder: '',
  onChange: jest.fn(),
  innerLabel: '',
  selectButtons: undefined,
  errorMessage: undefined,
  characterMax: undefined,
  id: 'input-id',
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<Input { ...updatedProps } />);
}

describe('Input Component', () => {
  test('Component renders correctly simple empty field', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component renders correctly with label', () => {
    const wrapper = setup({ label: 'Label' });

    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component renders correctly with select buttons', () => {
    const wrapper = setup({ selectButtons: {
      leftButtonLabel: 'lbs',
      leftButtonOnClick: jest.fn,
      rightButtonLabel: 'kg',
      rightButtonOnClick: jest.fn,
    } });

    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component renders correctly with error', () => {
    const wrapper = setup({
      label: 'Label',
      errorMessage: 'Error message',
    });

    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component renders correctly with label', () => {
    const wrapper = setup({
      label: 'Label',
      characterMax: '20',
      value: 'Some value'
    });

    expect(wrapper.get(0)).toMatchSnapshot();
  });
});

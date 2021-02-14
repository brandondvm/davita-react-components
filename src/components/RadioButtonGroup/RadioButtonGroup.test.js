import enzyme from 'enzyme';
import React from 'react';

import RadioButtonGroup from './RadioButtonGroup';

const mockProps = {
  options: [
    {
      id: "radiobutton1",
      label: "radiobutton 1",
      name: "radioButtonGroup",
      value: "radiobutton 1",
      checked: false,
    },
    {
      id: "radiobutton2",
      label: "radiobutton 2",
      name: "radioButtonGroup",
      value: "radiobutton 2",
      checked: false,
    },
    {
      id: "radiobutton3",
      label: "radiobutton 3",
      name: "radioButtonGroup",
      value: "radiobutton 3",
      checked: false,
    },
  ],
  onItemClick: jest.fn(),
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<RadioButtonGroup { ...updatedProps } />);
}

describe('RadioButtonGroup Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component should render 3 radio buttons correctly', () => {
    const wrapper = setup();
    const radiobuttonsElements = wrapper.find('RadioButton');
    expect(radiobuttonsElements.length).toEqual(3);
  });
});

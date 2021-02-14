import enzyme from 'enzyme';
import React from 'react';

import SegmentedController from './SegmentedController';

const mockProps = {
  controllerOptions: [
    { id: 'bloodPressureOption1', label: 'Sitting', name: 'bloodPressureState', value: 'Sitting', checked: true },
    { id: 'bloodPressureOption2', label: 'Standing', name: 'bloodPressureState', value: 'Standing', checked: false },
    { id: 'bloodPressureOption3', label: 'Lying', name: 'bloodPressureState', value: 'lying', checked: false }
  ],
  register: jest.fn(),
};

function setup(passedProps = {}) {
  const updatedProps = {
    ...mockProps,
    ...passedProps,
  };

  return enzyme.shallow(<SegmentedController { ...updatedProps } />);
}

describe('Segmented Controller Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });

  test('Component should render 3 items', () => {
    const wrapper = setup();
    const itemsElements = wrapper.find('.segmented-controller-component_input');
    expect(itemsElements.length).toEqual(3);
  });

  test('Component should render 2 items', () => {
    const wrapper = setup({
      controllerOptions: [
        { id: 'bloodPressureOption1', label: 'Sitting', name: 'bloodPressureState', value: 'Sitting', checked: true },
        { id: 'bloodPressureOption2', label: 'Standing', name: 'bloodPressureState', value: 'Standing', checked: false }
      ],
    });
    const itemsElements = wrapper.find('.segmented-controller-component_input');
    expect(itemsElements.length).toEqual(2);
  });

  test('Component should render first item as active', () => {
    const wrapper = setup();
    const itemElement = wrapper.find('.segmented-controller-component_input').first();
    expect(itemElement.hasClass('checked')).toEqual(true);
  });

  test('Component should render last item as active', () => {
    const wrapper = setup({ 
      controllerOptions: [
        { id: 'bloodPressureOption1', label: 'Sitting', name: 'bloodPressureState', value: 'Sitting', checked: false },
        { id: 'bloodPressureOption2', label: 'Standing', name: 'bloodPressureState', value: 'Standing', checked: true },
      ],
     });
    const itemElement = wrapper.find('.segmented-controller-component_input').last();
    expect(itemElement.hasClass('checked')).toEqual(true);
  });
});

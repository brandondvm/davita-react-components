import enzyme from 'enzyme';
import React from 'react';

import App from './App';

function setup() {
  return enzyme.shallow(<App />);
}

describe('App Component', () => {
  test('Component renders correctly', () => {
    const wrapper = setup();
    expect(wrapper.get(0)).toMatchSnapshot();
  });
});

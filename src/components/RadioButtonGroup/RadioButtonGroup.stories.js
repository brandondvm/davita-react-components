import React from 'react';

import RadioButtonGroup from './RadioButtonGroup';

const radioGroupItems = [
  { id: 'radioOption1', label: 'Option 1', name: 'radiobuttongroup', value: 1, checked: false },
  { id: 'radioOption2', label: 'Option 2', name: 'radiobuttongroup', value: 2, checked: false },
];

export default {
  title: 'RadioButton',
  component: RadioButtonGroup,
};

const Template = (args) => <div className="storybook-wrapper"><RadioButtonGroup {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  options: radioGroupItems
};

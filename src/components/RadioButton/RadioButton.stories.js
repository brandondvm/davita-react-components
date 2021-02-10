import React from 'react';

import RadioButton from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    label: 'string'
  },
};

const Template = (args) => <div className="storybook-wrapper"><RadioButton {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  inputId: 'radio1',
  inputName: 'radio1',
  inputLabel: 'Radio Button',
  inputValue: 1,
  isInputChecked: false 
};

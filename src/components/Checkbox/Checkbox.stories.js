import React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    label: 'string'
  },
};

const Template = (args) => <div className="storybook-wrapper"><Checkbox {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  id: 'checkbox1',
  name: 'checkbox1',
  label: "Option 1"   
};

export const Active = Template.bind({});
Active.args = {
  id: 'checkbox1',
  name: 'checkbox1',
  label: "Option 1",
  checked: true
};

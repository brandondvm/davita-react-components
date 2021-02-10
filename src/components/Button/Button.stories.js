import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <div className="storybook-wrapper"><Button {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true
};

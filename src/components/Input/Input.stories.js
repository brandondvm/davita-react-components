import React from 'react';
import Input from './Input';
import ReadOnlyInput from '../ReadOnlyInput/ReadOnlyInput';

export default {
  title: 'Input',
  component: Input,
};

let Template = (args) => <div className="storybook-wrapper"><Input {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  placeholder: 'Default'
};

export const InnerButtons = Template.bind({});
InnerButtons.args = {
  id: 'select-buttons',
  placeholder: 'Inner Buttons',
  label: 'Label',
  selectButtons: {
    leftButtonLabel: 'lbs',
    leftButtonOnClick: () => {},
    rightButtonLabel: 'kg',
    rightButtonOnClick: () => {}
  }
};

export const InnerLabel = Template.bind({})
InnerLabel.args = {
  id: 'inner-label',
  innerLabel: 'Units',
  placeholder: 'Placeholder',
  label: 'Label',
};

export const Max = Template.bind({});
Max.args = {
  id: 'max',
  placeholder: 'Max Characters',
  characterMax: '20'
};

export const Error = Template.bind({})
Error.args = {
  id: 'input-error',
  placeholder: 'Error',
  errorMessage: 'Error message',
};

Template = (args) => <div className="storybook-wrapper"><ReadOnlyInput {...args} /></div>;
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  value: 'Read only text',
  label: 'Read Only',
};

import React from 'react';

import Textarea from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
};

const Template = (args) => <div className="storybook-wrapper"><Textarea {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  id: 'textarea',
  label: 'Textarea',
};

export const Max = Template.bind({});
Max.args = {
  id: 'textarea',
  label: 'Textarea',
  characterMax: '60'
};

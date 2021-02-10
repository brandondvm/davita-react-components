import React from 'react';
import Counter from './Counter';

export default {
  title: 'Counter',
  component: Counter,
};

const Template = (args) => <div className="storybook-wrapper"><Counter {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  label: 'Counter Label',
  value: 0
};

export const NoLabel = Template.bind({});

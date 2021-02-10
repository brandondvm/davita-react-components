import React from 'react';

import Stepper from './Stepper';
import { number } from 'prop-types';

export default {
  title: 'Stepper',
  component: Stepper,
  argTypes: {
    steps: number,
    activeStep: number
  },
};

const Template = (args) => <div className="storybook-wrapper"><Stepper {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  steps: 6,
  activeStep: 0,
};

export const Active = Template.bind({});
Active.args = {
  steps: 6,
  activeStep: 3,
};

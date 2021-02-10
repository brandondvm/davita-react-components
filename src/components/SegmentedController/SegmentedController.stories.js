import React from 'react';

import SegmentedController from './SegmentedController';

const segmentedControllerItems = [
  { id: "option1", label: "option 1", name: "segmentedControllerOption", value: 1, checked: true },
  { id: "option2", label: "option 2", name: "segmentedControllerOption", value: 2, checked: false },
  { id: "option3", label: "option 3", name: "segmentedControllerOption", value: 3, checked: false }
];

export default {
  title: 'Segmented Controller',
  component: SegmentedController,
};

const Template = (args) => <div className="storybook-wrapper"><SegmentedController {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  controllerOptions: segmentedControllerItems,
};

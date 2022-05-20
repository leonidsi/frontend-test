import React, {useState} from "react";

import CardContainer from "./CardContainer";

export default {
  components: CardContainer,
  title: "CardContainer",
  argTypes: {
    hasPopOver: true,
    popOverPlacement: {
      control: 'radio',
      options: ['top', 'right', 'bottom', "left"],
    },
  }
}

const Template = args => <CardContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasPopOver: true,
  cardTitle: "Flood zone 1",
  cardSelected: false,
  popOverTitle: "Popover title",
  popOverContent: "Popover content",
}

export const Checked = Template.bind({});
Checked.args = {
  hasPopOver: true,
  cardTitle: "Flood zone 1",
  cardSelected: true,
  popOverTitle: "Popover title",
  popOverContent: "Popover content",
  popOverPlacement: "right",
}


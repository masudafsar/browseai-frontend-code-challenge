import {Button} from "./component";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {control: 'text'},
    color: {},
    variant: {},
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryText: Story = {
  args: {
    title: "Primary",
    color: 'primary',
    variant:'text'
  },
};

export const PrimaryOutline: Story = {
  args: {
    title: "Primary",
    color: 'primary',
    variant:'outline'
  },
};

export const PrimaryFill: Story = {
  args: {
    title: "Primary",
    color: 'primary',
    variant:'fill'
  },
};

export const SecondaryText: Story = {
  args: {
    title: "Secondary",
    color: 'secondary',
    variant:'text'
  },
};

export const SecondaryOutline: Story = {
  args: {
    title: "Secondary",
    color: 'secondary',
    variant:'outline'
  },
};

export const SecondaryFill: Story = {
  args: {
    title: "Secondary",
    color: 'secondary',
    variant:'fill'
  },
};

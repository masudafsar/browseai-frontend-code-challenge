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
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Primary",
  },
};

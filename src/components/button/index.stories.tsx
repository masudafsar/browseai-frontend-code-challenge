import {Meta, StoryObj} from "@storybook/react";
import {Button} from "./component";
import {PlaceholderIcon} from "../../icons";

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {control: 'text'},
    disabled: {control: 'boolean'},
    color: {},
    variant: {},
    size: {},
    iconLeading:{},
    iconTrailing:{},
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryText: Story = {
  args: {
    title: "Primary",
    color: 'primary',
    variant:'text',
    size: 'md',
    disabled: false,
    iconLeading: <PlaceholderIcon/>,
    iconTrailing: <PlaceholderIcon/>,
  },
};

export const PrimaryOutline: Story = {
  args: {
    title: "Primary",
    color: 'primary',
    variant:'outline',
    size: 'md',
    disabled: false,
    iconLeading: <PlaceholderIcon/>,
    iconTrailing: <PlaceholderIcon/>,
  },
};

export const PrimaryFill: Story = {
  args: {
    title: "Primary",
    color: 'primary',
    variant:'fill',
    size: 'md',
    disabled: false,
    iconLeading: <PlaceholderIcon/>,
    iconTrailing: <PlaceholderIcon/>,
  },
};

export const SecondaryText: Story = {
  args: {
    title: "Secondary",
    color: 'secondary',
    variant:'text',
    size: 'md',
    disabled: false,
  },
};

export const SecondaryOutline: Story = {
  args: {
    title: "Secondary",
    color: 'secondary',
    variant:'outline',
    size: 'md',
    disabled: false,
  },
};

export const SecondaryFill: Story = {
  args: {
    title: "Secondary",
    color: 'secondary',
    variant:'fill',
    size: 'md',
    disabled: false,
  },
};

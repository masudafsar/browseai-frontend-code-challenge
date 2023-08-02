import {Meta, StoryObj} from "@storybook/react";
import {Button, ButtonPropsType} from "./component";
import {PlaceholderIcon} from "../../icons";

const primaryTextButtonProps: ButtonPropsType = {
  title: 'Searching',
  color: 'primary',
  variant: 'text',
  size: "md",
  disabled: false,
  iconLeading: <PlaceholderIcon/>,
  iconTrailing: <PlaceholderIcon/>,
}

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {control: 'text', defaultValue: primaryTextButtonProps.title},
    disabled: {control: 'boolean', defaultValue: primaryTextButtonProps.disabled},
    color: {
      control: 'inline-radio',
      options: ['primary', 'success', 'info', 'warning', 'error'],
      defaultValue: primaryTextButtonProps.color,
    },
    variant: {
      control: 'inline-radio',
      options: ['fill', 'text', 'outline'],
      defaultValue: primaryTextButtonProps.variant,
    },
    size: {control: 'inline-radio', options: ['md'], defaultValue: primaryTextButtonProps.size},
    iconLeading: {control:'object'},
    iconTrailing: {control:'object'},
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryText: Story = {
  args: {...primaryTextButtonProps},
};

export const PrimaryOutline: Story = {
  args: {
    ...primaryTextButtonProps,
    variant: 'outline',
  },
};

export const PrimaryFill: Story = {
  args: {
    ...primaryTextButtonProps,
    variant: 'fill',
  },
};

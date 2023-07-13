import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: {control: 'select'},
    color: {control: 'select'},
    fontColor: { control: 'color'}
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: "normal",
    allCaps: false,
    color: "tertiary"
  }
};

export const AllCaps: Story = {
  args: {
    label: "texto en mayúsculas",
    size: "h1",
    allCaps: true
  }
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "h3",
    color: "secondary"
  }
};

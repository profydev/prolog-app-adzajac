import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const options = [
  { value: "Phoenix Baker", label: "Phoenix Baker" },
  { value: "Olivia Rhye", label: "Olivia Rhye" },
  { value: "Lana Steiner", label: "Lana Steiner" },
  { value: "Demi Wilkinson", label: "Demi Wilkinson" },
  { value: "Candice Wu", label: "Candice Wu" },
  { value: "Natali Craig", label: "Natali Craig" },
];

const meta = {
  component: Select,
  title: "UI/Select",
  args: {
    options: options,
    placeholder: "Select a team member",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "",
    placeholder: "Select a team member",
  },
};

export const Disabled: Story = {
  args: {
    label: "",
    disabled: true,
    placeholder: "Select a team member",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Team member",
    placeholder: "Select a team member",
  },
};

export const WithHint: Story = {
  args: {
    placeholder: "Select a team member",
    hint: "This is a hint text to help user.",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Select a team member",
    iconSrc: "/icons/user.svg",
  },
};

export const WithIconDisabled: Story = {
  args: {
    disabled: true,
    placeholder: "Select a team member",
    iconSrc: "/icons/user.svg",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Select a team member",
    error: "This is an error messaage.",
  },
};

export const ErrorDisabled: Story = {
  args: {
    label: "",
    disabled: true,
    placeholder: "Select a team member",
    error: "This is an error messaage.",
  },
};

export const ErrorWithLabel: Story = {
  args: {
    label: "Team member",
    placeholder: "Select a team member",
    error: "This is an error messaage.",
  },
};

export const ErrorWithHint: Story = {
  args: {
    placeholder: "Select a team member",
    error: "This is an error messaage.",
    hint: "This is a hint text to help user.",
  },
};

export const ErrorWithIcon: Story = {
  args: {
    placeholder: "Select a team member",
    iconSrc: "/icons/user.svg",
    error: "This is an error messaage.",
  },
};

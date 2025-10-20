import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  component: Input,
  title: "UI/Input",
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: "olivia@untitledui.com",
  },
};

export const EmptyWithError: Story = {
  args: {
    placeholder: "olivia@untitledui.com",
    error: "This is an error messaage.",
  },
};

export const EmptyWithIcon: Story = {
  args: {
    placeholder: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
  },
};

export const Filled: Story = {
  args: {
    initialValue: "olivia@untitledui.com",
  },
};

export const FilledWithLabel: Story = {
  args: {
    label: "Email",
    initialValue: "olivia@untitledui.com",
  },
};

export const FilledWithHint: Story = {
  args: {
    initialValue: "olivia@untitledui.com",
    hint: "This is a hint text to help user.",
  },
};

export const FilledWithIcon: Story = {
  args: {
    initialValue: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
  },
};

export const FilledWithError: Story = {
  args: {
    initialValue: "olivia@untitledui.com",
    error: "This is an error messaage.",
  },
};

export const FilledWithIconAndError: Story = {
  args: {
    initialValue: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
    error: "This is an error messaage.",
  },
};

export const FilledWithLabelAndError: Story = {
  args: {
    label: "Email",
    initialValue: "olivia@untitledui.com",
    error: "This is an error messaage.",
  },
};

export const FilledWithHintAndError: Story = {
  args: {
    initialValue: "olivia@untitledui.com",
    error: "This is an error messaage.",
    hint: "This is a hint text to help user.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    initialValue: "olivia@untitledui.com",
  },
};

export const DisabledWithIcon: Story = {
  args: {
    disabled: true,
    initialValue: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
  },
};

export const DisabledWithError: Story = {
  args: {
    disabled: true,
    initialValue: "olivia@untitledui.com",
    error: "This is an error messaage.",
  },
};

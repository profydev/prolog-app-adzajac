import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { useArgs } from "@storybook/preview-api";

const meta = {
  component: Input,
  title: "UI/Input",
  render: function Render(args) {
    const [{ value }, setArgs] = useArgs();
    function onChange(value: string) {
      setArgs({ value });
    }
    return <Input {...args} value={value} onChange={onChange}></Input>;
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: "olivia@untitledui.com",
    value: "",
  },
};

export const EmptyWithError: Story = {
  args: {
    placeholder: "olivia@untitledui.com",
    error: "This is an error messaage.",
    value: "",
  },
};

export const EmptyWithIcon: Story = {
  args: {
    placeholder: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
    value: "",
  },
};

export const Filled: Story = {
  args: {
    value: "olivia@untitledui.com",
  },
};

export const FilledWithLabel: Story = {
  args: {
    label: "Email",
    value: "olivia@untitledui.com",
  },
};

export const FilledWithHint: Story = {
  args: {
    value: "olivia@untitledui.com",
    hint: "This is a hint text to help user.",
  },
};

export const FilledWithIcon: Story = {
  args: {
    value: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
  },
};

export const FilledWithError: Story = {
  args: {
    value: "olivia@untitledui.com",
    error: "This is an error messaage.",
  },
};

export const FilledWithIconAndError: Story = {
  args: {
    value: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
    error: "This is an error messaage.",
  },
};

export const FilledWithLabelAndError: Story = {
  args: {
    label: "Email",
    value: "olivia@untitledui.com",
    error: "This is an error messaage.",
  },
};

export const FilledWithHintAndError: Story = {
  args: {
    value: "olivia@untitledui.com",
    error: "This is an error messaage.",
    hint: "This is a hint text to help user.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "olivia@untitledui.com",
  },
};

export const DisabledWithIcon: Story = {
  args: {
    disabled: true,
    value: "olivia@untitledui.com",
    iconSrc: "/icons/mail.svg",
  },
};

export const DisabledWithError: Story = {
  args: {
    disabled: true,
    value: "olivia@untitledui.com",
    error: "This is an error messaage.",
  },
};

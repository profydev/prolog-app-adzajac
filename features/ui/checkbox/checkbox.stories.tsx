import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Size } from "./checkbox";

const meta = {
  component: Checkbox,
  title: "UI/Checkbox",
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
  },
};

export const Sizes: Story = {
  args: {
    label: "Label",
  },
};

Sizes.decorators = [
  () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Checkbox {...Sizes.args} size={Size.sm} />
        <Checkbox {...Sizes.args} size={Size.md} />
      </div>
    );
  },
];

export const Disabled: Story = {
  args: {
    label: "Label",
  },
};

Disabled.decorators = [
  () => {
    return (
      <div>
        <Checkbox {...Disabled.args} size={Size.sm} disabled={true} />
      </div>
    );
  },
];

export const WithoutLabel: Story = {
  args: {},
};

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, IconPosition } from "./button";

const meta = {
  component: Button,
  title: "UI/Button",
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: ButtonColor.primary,
    text: "Button CTA",
  },
};

export const ColorVariations: Story = {
  args: {
    text: "Button CTA",
  },
};
ColorVariations.decorators = [
  () => {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
        <Button {...ColorVariations.args} color={ButtonColor.primary} />
        <Button {...ColorVariations.args} color={ButtonColor.secondary} />
        <Button {...ColorVariations.args} color={ButtonColor.gray} />
        <Button {...ColorVariations.args} color={ButtonColor.empty} />
        <Button {...ColorVariations.args} color={ButtonColor.emptyGray} />
        <Button {...ColorVariations.args} color={ButtonColor.error} />
        <Button {...ColorVariations.args} color={ButtonColor.emptyError} />
      </div>
    );
  },
];

export const ColorVariationsDisabled: Story = {
  args: {
    text: "Button CTA",
  },
};

ColorVariationsDisabled.decorators = [
  () => {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
        <Button
          {...ColorVariationsDisabled.args}
          disabled
          color={ButtonColor.primary}
        />
        <Button
          {...ColorVariationsDisabled.args}
          disabled
          color={ButtonColor.secondary}
        />
        <Button
          {...ColorVariationsDisabled.args}
          disabled
          color={ButtonColor.gray}
        />
        <Button
          {...ColorVariationsDisabled.args}
          disabled
          color={ButtonColor.empty}
        />
        <Button
          {...ColorVariationsDisabled.args}
          disabled
          color={ButtonColor.emptyGray}
        />
        <Button
          {...ColorVariationsDisabled.args}
          disabled
          color={ButtonColor.error}
        />
        <Button
          {...ColorVariationsDisabled.args}
          disabled
          color={ButtonColor.emptyError}
        />
      </div>
    );
  },
];

export const SizeVariations: Story = {
  args: {
    color: ButtonColor.primary,
    text: "Button CTA",
  },
};
SizeVariations.decorators = [
  () => {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
        <Button {...SizeVariations.args} size={ButtonSize.sm} />
        <Button {...SizeVariations.args} size={ButtonSize.md} />
        <Button {...SizeVariations.args} size={ButtonSize.lg} />
        <Button {...SizeVariations.args} size={ButtonSize.xlg} />
      </div>
    );
  },
];

export const Icons: Story = {
  args: {
    text: "Button CTA",
    size: ButtonSize.md,
    color: ButtonColor.primary,
    iconSrc: "/icons/circle.svg",
  },
};
Icons.decorators = [
  () => {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
        <Button {...Icons.args} icon={IconPosition.false} />
        <Button {...Icons.args} icon={IconPosition.leading} />
        <Button {...Icons.args} icon={IconPosition.trailing} />
        <Button {...Icons.args} icon={IconPosition.only} />
      </div>
    );
  },
];

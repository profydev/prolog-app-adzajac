/* eslint-disable @next/next/no-img-element */
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
}
export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xlg = "xlg",
}
export enum IconPosition {
  leading = "leading",
  trailing = "trailing",
  only = "iconOnly",
  false = "false",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  iconSrc?: string;
  icon?: IconPosition;
}

export function Button({
  text = "",
  size = ButtonSize.sm,
  color = ButtonColor.primary,
  icon = IconPosition.false,
  iconSrc,
  ...props
}: ButtonProps) {
  const showText = icon !== IconPosition.only;
  const showIcon = icon !== IconPosition.false && iconSrc;
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[icon],
        props.className,
      )}
    >
      {showText && text}
      {showIcon && (
        <img src={iconSrc} alt={`${text} icon`} className={styles.iconImg} />
      )}
    </button>
  );
}

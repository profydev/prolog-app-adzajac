/* eslint-disable @next/next/no-img-element */
import styles from "./input.module.scss";
import { ChangeEvent } from "react";
import classNames from "classnames";

export interface InputProps {
  label?: string;
  iconSrc?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange: (s: string) => void;
}

export function Input({
  label = "",
  hint = "",
  error = "",
  iconSrc = "",
  placeholder = "",
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.inputWrapper}>
        {iconSrc && <img src={iconSrc} alt="" className={styles.icon} />}
        <input
          className={classNames([
            styles.input,
            error && styles.hasError,
            iconSrc && styles.hasIcon,
          ])}
          placeholder={placeholder}
          value={value || ""} // if the value is undefined pass an empty string instead so the input isn't uncontrolled
          disabled={disabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.currentTarget.value);
          }}
        ></input>
        {error && (
          <img
            src="/icons/alert-circle.svg"
            alt=""
            className={styles.errorIcon}
          />
        )}
      </div>
      {!error && hint && <div className={styles.hint}>{hint}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

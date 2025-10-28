/* eslint-disable @next/next/no-img-element */
import styles from "./input.module.scss";
import { useState } from "react";
import classNames from "classnames";
interface InputProps {
  label?: string;
  iconSrc?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  initialValue?: string;
}

export function Input({
  label = "",
  hint = "",
  error = "",
  iconSrc = "",
  placeholder = "",
  disabled = false,
  initialValue = "",
}: InputProps) {
  const [value, setValue] = useState(initialValue);
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
          value={value}
          disabled={disabled}
          onChange={(e) => {
            setValue(e.target.value);
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

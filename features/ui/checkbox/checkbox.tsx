/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState, InputHTMLAttributes } from "react";

import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum Size {
  sm = "sm",
  md = "md",
}

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: Size;
  initialChecked?: boolean;
  indeterminate?: boolean;
}

export function Checkbox({
  label = "",
  size = Size.sm,
  initialChecked = false,
  indeterminate = false,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label className={classNames(styles.checkbox, styles[size])}>
      <input
        {...props}
        ref={ref}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      ></input>
      <div className={styles.wrapper}>
        <img
          src="/icons/checkbox-check.svg"
          alt="alert"
          className={styles.iconCheck}
        ></img>
        <img
          src="/icons/checkbox-minus.svg"
          alt="alert"
          className={styles.iconIndeterminate}
        ></img>
      </div>
      {label && <div className={styles.label}>{label}</div>}
    </label>
  );
}

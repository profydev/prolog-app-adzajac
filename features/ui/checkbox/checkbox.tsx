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
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.iconCheck}
        >
          <path
            d="M10.7,3l-6.4,6.4-2.9-2.9"
            stroke="#7F56D9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.iconIndeterminate}
        >
          <path
            d="M2.91675 7H11.0834"
            stroke="#7F56D9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {label && <div className={styles.label}>{label}</div>}
    </label>
  );
}

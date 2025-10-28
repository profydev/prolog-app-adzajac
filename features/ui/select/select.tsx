/* eslint-disable @next/next/no-img-element */
import ReactSelect, {
  components,
  OptionProps,
  SingleValueProps,
  PlaceholderProps,
  DropdownIndicatorProps,
} from "react-select";
import classNames from "classnames";
import styles from "./select.module.scss";

type Option = {
  label: string;
  value: string;
};

type SelectParams = {
  label?: string;
  options: Option[];
  iconSrc?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
};

export function Select({
  label = "",
  hint = "",
  error = "",
  iconSrc = "",
  placeholder = "Select...",
  disabled = false,
  options,
}: SelectParams) {
  const Option = (props: OptionProps<Option>) => {
    return (
      <components.Option {...props}>
        {iconSrc && <img src={iconSrc} alt=""></img>}
        <span>{props.label}</span>
        {props.isSelected && <img src={"/icons/tick.svg"} alt=""></img>}
      </components.Option>
    );
  };
  const SingleValue = (props: SingleValueProps<Option>) => {
    return (
      <components.SingleValue {...props}>
        {iconSrc && <img src={iconSrc} alt=""></img>}
        {props.data.label}
      </components.SingleValue>
    );
  };
  const Placeholder = (props: PlaceholderProps<Option>) => {
    return (
      <components.Placeholder {...props}>
        {iconSrc && <img src={iconSrc} alt=""></img>}
        {props.selectProps.placeholder}
      </components.Placeholder>
    );
  };
  const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src="/icons/chevron-down.svg" alt=""></img>
      </components.DropdownIndicator>
    );
  };

  return (
    <div>
      {label && <div className={styles.label}>{label}</div>}
      <ReactSelect
        isDisabled={disabled}
        options={options}
        placeholder={placeholder}
        unstyled={true}
        components={{ Option, Placeholder, SingleValue, DropdownIndicator }}
        classNames={{
          control: ({ isFocused, menuIsOpen, isDisabled }) =>
            classNames(
              styles.control,
              isFocused && styles.focused,
              menuIsOpen && styles.menuOpened,
              isDisabled && styles.disabled,
              error && styles.hasError,
            ),
          menu: () => classNames(styles.menu),
          placeholder: () => classNames(styles.placeholder),
          singleValue: () => classNames(styles.singleValue),
          indicatorSeparator: () => classNames(styles.indicatorSeparator),
          indicatorsContainer: () => classNames(styles.indicatorsContainer),
          option: ({ isSelected, isFocused }) =>
            classNames(
              styles.option,
              isSelected && styles.selected,
              isFocused && styles.focused,
            ),
        }}
      ></ReactSelect>
      {!error && hint && <div className={styles.hint}>{hint}</div>}
      {!disabled && error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

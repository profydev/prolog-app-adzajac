/* eslint-disable @next/next/no-img-element */
import ReactSelect, {
  components,
  OptionProps,
  SingleValue,
  SingleValueProps,
  PlaceholderProps,
  DropdownIndicatorProps,
  MultiValue,
} from "react-select";
import classNames from "classnames";
import styles from "./select.module.scss";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectParams = {
  label?: string;
  options: SelectOption[];
  iconSrc?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  value: SelectOption | undefined;
  isClearable?: boolean;
  onChange: (o: SelectOption | undefined) => void;
};

const CustomDropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption>,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src="/icons/chevron-down.svg" alt=""></img>
    </components.DropdownIndicator>
  );
};

const CustomOption = (props: OptionProps<SelectOption>) => {
  return (
    <components.Option {...props}>
      {props.selectProps.iconSrc && (
        <img src={props.selectProps.iconSrc} alt=""></img>
      )}
      <span>{props.label}</span>
      {props.isSelected && <img src={"/icons/tick.svg"} alt=""></img>}
    </components.Option>
  );
};

const CustomSingleValue = (props: SingleValueProps<SelectOption>) => {
  return (
    <components.SingleValue {...props}>
      {props.selectProps.iconSrc && (
        <img src={props.selectProps.iconSrc} alt=""></img>
      )}
      {props.data.label}
    </components.SingleValue>
  );
};

const CustomPlaceholder = (props: PlaceholderProps<SelectOption>) => {
  return (
    <components.Placeholder {...props}>
      {props.selectProps.iconSrc && (
        <img src={props.selectProps.iconSrc} alt=""></img>
      )}
      {props.selectProps.placeholder}
    </components.Placeholder>
  );
};

export function Select({
  label = "",
  hint = "",
  error = "",
  iconSrc = "",
  placeholder = "Select...",
  disabled = false,
  options,
  value = undefined,
  isClearable = false,
  onChange,
}: SelectParams) {
  // add an empty option when the select component needs to be clearable
  const selectOptions = isClearable
    ? [{ value: "", label: "" }, ...options]
    : options;

  const onSelectChange = (
    selected: SingleValue<SelectOption> | MultiValue<SelectOption>,
  ) => {
    if ((selected as SelectOption).value === "") {
      onChange(undefined);
    } else {
      onChange(selected as SelectOption);
    }
  };

  return (
    <div>
      {label && <div className={styles.label}>{label}</div>}
      <ReactSelect
        value={value || null} // only null resets the react-select already selected option
        isDisabled={disabled}
        options={selectOptions}
        placeholder={placeholder}
        unstyled={true}
        components={{
          Option: CustomOption,
          Placeholder: CustomPlaceholder,
          SingleValue: CustomSingleValue,
          DropdownIndicator: CustomDropdownIndicator,
        }}
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
        iconSrc={iconSrc}
        onChange={onSelectChange}
      ></ReactSelect>
      {!error && hint && <div className={styles.hint}>{hint}</div>}
      {!disabled && error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

import styles from "./issue-filter-bar.module.scss";
import { Input, Select, SelectOption } from "@features/ui";
import { useState, useRef } from "react";

const statusOptions: SelectOption[] = [
  { label: "Unresolved", value: "open" },
  { label: "Resolved", value: "resolved" },
];

const levelOptions: SelectOption[] = [
  { label: "Error", value: "error" },
  { label: "Warning", value: "warning" },
  { label: "Info", value: "info" },
];

interface IssueFilterBarProps {
  data: {
    level?: string;
    project?: string;
    status?: string;
  };
  onChange: (filter: {
    level?: string;
    project?: string;
    status?: string;
  }) => void;
}

function IssueFilterBar({ onChange, data }: IssueFilterBarProps) {
  const status = statusOptions.find((item) => {
    return item.value === data.status;
  });

  const level = levelOptions.find((item) => {
    return item.value === data.level;
  });

  const [project, setProject] = useState(data.project);

  const debounceTimeoutId = useRef(0);

  function onChangeHandler(
    option: { [key: string]: string | undefined },
    debounce = false,
  ) {
    const filterOptions = {
      status: status?.value,
      level: level?.value,
      project: project,
    };
    if (debounce) {
      clearTimeout(debounceTimeoutId.current);
      debounceTimeoutId.current = window.setTimeout(
        () => onChange({ ...filterOptions, ...option }),
        1000,
      );
    } else {
      onChange({ ...filterOptions, ...option });
    }
  }

  return (
    <div className={styles.issueFilter}>
      <div className={styles.statusSelectWrapper}>
        <Select
          placeholder="Status"
          isClearable={true}
          value={status}
          onChange={(option) => {
            onChangeHandler({ status: option?.value });
          }}
          options={statusOptions}
        />
      </div>
      <div className={styles.levelSelectWrapper}>
        <Select
          placeholder="Level"
          isClearable={true}
          value={level}
          onChange={(option) => {
            onChangeHandler({ level: option?.value });
          }}
          options={levelOptions}
        />
      </div>
      <div className={styles.projectNameInputWrapper}>
        <Input
          placeholder="Project Name"
          iconSrc="/icons/search.svg"
          value={project}
          onChange={(value) => {
            setProject(value);
            onChangeHandler({ project: value }, true);
          }}
        />
      </div>
    </div>
  );
}

export default IssueFilterBar;

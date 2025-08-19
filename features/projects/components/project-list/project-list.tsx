import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { Spinner } from "@features/ui";
import { UnstyledButton } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <div className={styles.errorBox} data-testid="error-box">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/alert-circle.svg"
          alt="alert"
          className={styles.errorIcon}
        ></img>
        There was a problem while loading the project data
        <UnstyledButton onClick={() => refetch()} className={styles.button}>
          Try again
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/arrow-right.svg" alt="arrow"></img>
        </UnstyledButton>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

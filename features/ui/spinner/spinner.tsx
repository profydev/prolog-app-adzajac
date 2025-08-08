import styles from "./spinner.module.scss";

export function Spinner({ size = 64 }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/spinner.svg"
        alt="loading"
        width={size}
        height={size}
        data-testid="spinner"
        className={styles.spinner}
      />
    </>
  );
}

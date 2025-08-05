import styles from "./footer.module.scss";
import packageJson from "../../../package.json";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.version}>Version: {packageJson.version}</div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-small.svg" alt="logo" className={styles.logo} />

      <div className={styles.links}>
        <a href="#">Docs</a>
        <a href="#">API</a>
        <a href="#">Help</a>
        <a href="#">Community</a>
      </div>
    </footer>
  );
}

import styles from "src/components/Sidebar/Sidebar.module.css";

export function Sidebar() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.js</code>
        </p>
      </div>
    </main>
  );
}

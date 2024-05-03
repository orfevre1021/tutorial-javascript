import Head from "next/head";
import styles from "src/components/Header/Header.module.css";

export function Header() {
  return (
    <Head>
      <title>Skills.View</title>
      <meta
        className={styles.description}
        name="description"
        content="Employee skill viewing site."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />;
    </Head>
  );
}

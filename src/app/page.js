import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Main
      </main>
      <footer className={styles.footer}>
        <Link href="/test">Test page</Link>
        <Link href="/dashboard">Dashboard page</Link>
        <Link href="/code-editor">
          Code editor
        </Link>
        <Link href="/home">
          Home page
        </Link>
      </footer>
    </div>
  );
}

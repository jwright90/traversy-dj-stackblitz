import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>

      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events.</p>
      <p>Version: 1.0.0</p>
    </div>
  );
}

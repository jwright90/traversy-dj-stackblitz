import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function EventPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Event</title>
      </Head>

      <h1>My Event</h1>
    </div>
  );
}

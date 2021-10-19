import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function EventsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events</title>
      </Head>

      <h1>My Events</h1>
    </div>
  );
}

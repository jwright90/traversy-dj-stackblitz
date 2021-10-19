import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function EventsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Add Event</title>
      </Head>

      <h1>Add New Event</h1>
    </div>
  );
}

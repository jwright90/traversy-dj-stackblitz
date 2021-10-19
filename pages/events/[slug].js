import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

export default function EventPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>My Event</title>
      </Head>

      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Go Home</button>
    </div>
  );
}

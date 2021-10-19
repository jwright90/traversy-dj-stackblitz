import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function EventPage() {
  const router = useRouter();

  return (
    <Layout title="My Event" className={styles.container}>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Go Home</button>
    </Layout>
  );
}

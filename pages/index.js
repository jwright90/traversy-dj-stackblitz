import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link href="/about">About</Link>
    </Layout>
  );
}

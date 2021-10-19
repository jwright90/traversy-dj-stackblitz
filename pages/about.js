import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout title="About | DJ Events">
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events.</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}

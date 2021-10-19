import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div>
        <h1>Home Page</h1>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

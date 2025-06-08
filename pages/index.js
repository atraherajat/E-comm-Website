import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to ShopEasy</title>
      </Head>
      <h1>ShopEasy</h1>
      <nav>
        <Link href="/products">Products</Link> | <Link href="/cart">Cart</Link>
      </nav>
      <p>Your one stop shop for all your needs.</p>
    </div>
  );
}

import Head from 'next/head';
import Link from 'next/link';

export default function Cart() {
  return (
    <div>
      <Head>
        <title>Cart - ShopEasy</title>
      </Head>
      <h1>Your Cart</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/products">Products</Link>
      </nav>
      <p>Your cart is currently empty.</p>
    </div>
  );
}

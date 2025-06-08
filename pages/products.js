import Head from 'next/head';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Sample Product 1', price: 20 },
  { id: 2, name: 'Sample Product 2', price: 50 },
  { id: 3, name: 'Sample Product 3', price: 75 },
];

export default function Products() {
  return (
    <div>
      <Head>
        <title>Products - ShopEasy</title>
      </Head>
      <h1>Products</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/cart">Cart</Link>
      </nav>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

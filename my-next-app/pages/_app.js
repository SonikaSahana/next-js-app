// pages/_app.js
import Link from 'next/link';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/news">News</Link> |{" "}
        <Link href="/aboutus">About Us</Link>
      </nav>
      <hr />
      <Component {...pageProps} />
    </>
  );
}

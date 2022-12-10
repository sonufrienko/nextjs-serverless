import '../styles/globals.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>Demo Next.js app with SSR on AWS Lambda</header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/post/near-blockchain">NEAR Blockchain</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <footer>Made with Love to Tech</footer>
    </>
  );
}

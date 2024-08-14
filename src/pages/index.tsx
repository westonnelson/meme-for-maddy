import Head from 'next/head';
import ConnectWallet from '../components/ConnectWallet';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Meme for Maddy</title>
        <meta name="description" content="Join the movement and support Maddy's journey." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tokenomics">Tokenomics</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/how-to-buy">How to Buy</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/whitepaper">Whitepaper</Link>
          <Link href="/audit">Audit</Link>
          <Link href="/staking">Staking</Link>
        </nav>
        <div className="wallet-container">
          <ConnectWallet />
        </div>
      </header>

      <div className="title-container">
        <h1 className="title">
          <span className="highlight">Meme for Maddy</span>
        </h1>
      </div>

      <main className="main">
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Meme for Maddy. All Rights Reserved.</p>
        <div className="footerLinks">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
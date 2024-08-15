import Head from 'next/head';
import ConnectWallet from '../components/ConnectWallet';
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Meme for Maddy</title>
        <meta name="description" content="Join the movement and support Maddy's journey." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="nav">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/tokenomics" className="nav-link">Tokenomics</Link>
          <Link href="/roadmap" className="nav-link">Roadmap</Link>
          <Link href="/how-to-buy" className="nav-link">How to Buy</Link>
          <Link href="/faq" className="nav-link">FAQ</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/whitepaper" className="nav-link">Whitepaper</Link>
          <Link href="/staking" className="nav-link">Staking</Link>
        </nav>
        <div className="wallet-container">
          <ConnectWallet />
        </div>
      </header>

      <main className="main">
        <Image 
          src="/Banner_MemeMaddy.png" 
          alt="Meme for Maddy" 
          width={500}  
          height={500} 
          className="centered-image"
        />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Meme for Maddy. All Rights Reserved.</p>
        <div className="footerLinks">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
          <Link href="/terms" className="footer-link">Terms & Conditions</Link>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
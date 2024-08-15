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
          <Link href="/about" passHref><a className="nav-link">About</a></Link>
          <Link href="/tokenomics" passHref><a className="nav-link">Tokenomics</a></Link>
          <Link href="/roadmap" passHref><a className="nav-link">Roadmap</a></Link>
          <Link href="/how-to-buy" passHref><a className="nav-link">How to Buy</a></Link>
          <Link href="/faq" passHref><a className="nav-link">FAQ</a></Link>
          <Link href="/contact" passHref><a className="nav-link">Contact</a></Link>
          <Link href="/whitepaper" passHref><a className="nav-link">Whitepaper</a></Link>
          <Link href="/staking" passHref><a className="nav-link">Staking</a></Link>
        </nav>
        <div className="wallet-container">
          <ConnectWallet />
        </div>
      </header>

      <main className="main">
        <Image 
          src="/maddy-logo.png" 
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
          <Link href="/terms" passHref><a>Terms & Conditions</a></Link>
          <Link href="/privacy" passHref><a>Privacy Policy</a></Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
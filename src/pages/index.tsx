import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DexChart from '../components/DexChart';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/tokenomics" className={styles.navLink}>Tokenomics</Link>
          <Link href="/roadmap" className={styles.navLink}>Roadmap</Link>
          <Link href="/how-to-buy" className={styles.navLink}>How to Buy</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/whitepaper" className={styles.navLink}>Whitepaper</Link>
          <Link href="/staking" className={styles.navLink}>Staking</Link>
        </nav>
        <div className={styles.walletContainer}>
          <button className={styles.walletButton}>Connect Wallet</button>
        </div>
      </header>

      <main className={styles.mainContent}>
        <h1>Meme for Maddy</h1>
        <h2>Token Symbol: MADDY</h2>
        <p>Contract Address: 4ybmwLtryzuoZtozW7KiJkhtGsuUbkNidXNP3bsF1a49</p>
        <div className={styles.divider}></div>
        <Image
          src="/Banner_Maddy_1500x500.png"
          alt="Meme for Maddy"
          width={750}
          height={250}
          className={styles.bannerImage}
        />
        <div className={styles.divider}></div>
        <DexChart />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Meme for Maddy. All Rights Reserved.</p>
        <div className={styles.footerLinks}>
          <a
            href="https://solscan.io/token/4ybmwLtryzuoZtozW7KiJkhtGsuUbkNidXNP3bsF1a49"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            View MADDY on Solscan
          </a>
          <Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
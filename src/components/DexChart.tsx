import React from 'react';

const DexChart: React.FC = () => {
  return (
    <div>
      <style jsx>{`
        #dexscreener-embed {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          max-width: 600px; /* Set a maximum width */
          width: 100%; /* Ensure it scales with the parent container */
          margin: 0 auto; /* Center the chart */
          background: #000;
        }
        #dexscreener-embed iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border: 0;
        }
        .buy-button {
          display: inline-block;
          margin: 20px 0;
          padding: 10px 20px;
          background-color: #FF69B4;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 1.2rem;
          border-radius: 5px;
          text-align: center;
          transition: background-color 0.3s ease;
        }
        .buy-button:hover {
          background-color: #FF85C1;
        }
      `}</style>

      <div id="dexscreener-embed">
        <iframe 
          src="https://dexscreener.com/solana/ABW34Z7Cp1t6AqKWXGDXohwXffJpQKFdyv42XuVTuDAZ?embed=1&theme=dark&trades=0&info=0"
          allowFullScreen
        ></iframe>
      </div>

      <a 
        href="https://dexscreener.com/solana/4ybmwLtryzuoZtozW7KiJkhtGsuUbkNidXNP3bsF1a49" 
        className="buy-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Buy MADDY
      </a>
    </div>
  );
}

export default DexChart;
import React from 'react';

const DexChart: React.FC = () => {
  return (
    <div>
      <style jsx>{`
        #dexscreener-embed {
          position: relative;
          width: 100%;
          padding-bottom: 125%;
        }
        @media (min-width: 1400px) {
          #dexscreener-embed {
            padding-bottom: 65%;
          }
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
          src="https://dexscreener.com/solana/FYJEgXFy1RkDTxNrX3dW1gxpE7YrzcHDhnv9xMb2N4H2?embed=1&theme=dark&trades=0&info=0"
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
const Staking: React.FC = () => {
    return (
      <div className="container">
        <main className="main">
          <h1>Staking</h1>
          <p>
            Staking your MADDY tokens allows you to earn rewards while supporting the network. By locking up your tokens, you contribute to the security and stability of the project.
          </p>
          <h2>How to Stake</h2>
          <ul>
            <li>Connect your wallet using the Connect Wallet button.</li>
            <li>Select the amount of MADDY tokens you wish to stake.</li>
            <li>Confirm the transaction in your wallet.</li>
            <li>Earn rewards based on the duration and amount of your stake.</li>
          </ul>
          <p>
            Staking rewards are distributed regularly, and you can monitor your earnings and manage your stake through our staking dashboard.
          </p>
        </main>
      </div>
    );
  }
  
  export default Staking;
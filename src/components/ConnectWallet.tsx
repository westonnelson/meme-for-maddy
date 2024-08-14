import { useWallet } from '@solana/wallet-adapter-react';
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';

const ConnectWallet = () => {
    const { connected } = useWallet();

    return (
        <div>
            {connected ? (
                <WalletModalButton>Connected</WalletModalButton>
            ) : (
                <WalletModalButton>Connect Wallet</WalletModalButton>
            )}
        </div>
    );
};

export default ConnectWallet;
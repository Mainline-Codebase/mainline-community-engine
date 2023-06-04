'use client';

import { useAccount, useEnsName, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import PrimaryButton from '../PrimaryButton';
import { shortenWalletAddress } from '../../app/utils';

function WalletButton() {
  const { address, isConnected } = useAccount();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: ensName } = useEnsName({ address });

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return isConnected ? (
    <div className="flex items-center">
      <div className="flex-none rounded-full p-1 text-green-400 bg-green-400/10 mr-2">
        <div className="h-2 w-2 rounded-full bg-current" />
      </div>
      <span className="text-white">{ensName || shortenWalletAddress(address)}</span>
    </div>
  ) : (
    <PrimaryButton text="Connect Wallet" onClick={() => connect()} />
  );
}

export default WalletButton;

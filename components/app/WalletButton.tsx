'use client';

import { useAccount, useEnsName, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import PrimaryButton from '../PrimaryButton';

function WalletButton() {
  const { address, isConnected } = useAccount();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: ensName } = useEnsName({ address });

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return isConnected ? (
    null
  ) : (
    <PrimaryButton text="Connect Wallet" onClick={() => connect()} />
  );
}

export default WalletButton;

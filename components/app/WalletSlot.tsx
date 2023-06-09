'use client';

import { useAccount, useDisconnect } from 'wagmi';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { shortenWalletAddress } from '../../utils';

function WalletSlot() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return isConnected ? (
    <div className="flex items-center">
      <div className="flex-none rounded-full p-1 text-green-400 bg-green-400/10 mr-2">
        <div className="h-2 w-2 rounded-full bg-current" />
      </div>
      <span className="text-white">{shortenWalletAddress(address || '')}</span>
      <ArrowRightOnRectangleIcon className="h-6 w-6 text-white ml-4 cursor-pointer hover:opacity-90" onClick={() => disconnect()} />
    </div>
  ) : (
    null
  );
}

export default WalletSlot;

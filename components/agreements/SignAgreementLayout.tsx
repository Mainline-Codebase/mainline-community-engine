'use client';

import {
  sepolia,
  useAccount, useContractWrite, useNetwork, useWaitForTransaction,
} from 'wagmi';
import { useState } from 'react';
import { MCE_CONTRACT_ADDRESS } from '../../constants';
import { communityEngineABI } from '../../contracts/generated';
import { useProjects } from '../../contexts/ProjectContext';
import YellowButton from '../buttons/YellowButton';
import { useActivity } from '../../contexts/ActivityContext';

interface Props {
  projectName: string
  projectOwner: string
}

function SignAgreementLayout({
  projectName, projectOwner,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { refetch } = useProjects();
  const { activity, setActivity } = useActivity();

  const {
    data,
    write,
  } = useContractWrite({
    address: MCE_CONTRACT_ADDRESS,
    abi: communityEngineABI,
    chainId: 11155111,
    functionName: 'signAgreement',
    account: address,
    // @ts-ignore
    args: [projectOwner, projectName],
    onError: () => {
      setIsLoading(false);
      refetch();
    },
  });

  useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
    onSuccess: () => {
      setIsLoading(false);
      refetch();

      setActivity([
        {
          role: 'kol',
          event: 'Agreement Signed',
          txHash: data?.hash || '',
          project: projectName,
          timestamp: new Date().getTime(),
          walletAddress: address,
        },
        ...activity]);
    },
  });

  return !isConnected ? null : (
    <YellowButton
      text={isLoading ? 'Signing...' : 'Sign Agreement'}
      onClick={() => {
        setIsLoading(true);
        write?.();
      }}
      disabled={chain?.id !== sepolia.id}
      loading={isLoading}
    />
  );
}

export default SignAgreementLayout;

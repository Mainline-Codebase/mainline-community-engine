'use client';

import { useState } from 'react';
import { sepolia, useAccount, useNetwork } from 'wagmi';
import SecondaryButton from '../buttons/SecondaryButton';
import executeRequest from '../../systems/request/request';
import { useProjects } from '../../contexts/ProjectContext';
import { useActivity } from '../../contexts/ActivityContext';

interface Props {
  project: any
}

function VerifyAgreementLayout({ project }: Props) {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useProjects();
  const { activity, setActivity } = useActivity();

  const performRequest = async () => {
    setIsLoading(true);

    setActivity([
      {
        role: 'po',
        event: 'Chainlink Initiated',
        project: project.name,
        txHash: '',
        timestamp: new Date().getTime(),
        walletAddress: project.owner,
      },
      ...activity]);

    const res = await executeRequest(
      [project.owner, project.name, project.kolTwitterHandle, project.tweetKeywords.join()],
      'sepolia',
      null,
    );

    if (res.error) {
      console.log('ERROR: ', res.result);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const isKnownError = res.result.toString().includes('transaction failed');
      // isKnownError ? 'This subscription might be out of LINK.' : ''
      setIsLoading(false);
      refetch();
    } else {
      console.log(res);

      setIsLoading(false);
      refetch();

      setActivity([
        {
          role: 'po',
          event: 'Project Completed',
          metadata: Number(res.result) === 0 ? 'Payment Returned' : 'Payment Sent',
          project: project.name,
          txHash: res.txHash,
          timestamp: new Date().getTime(),
          walletAddress: project.owner,
        },
        ...activity]);
    }
  };

  return !isConnected ? null : (
    <SecondaryButton
      text={isLoading ? 'Verifying...' : 'Verify'}
      onClick={performRequest}
      disabled={chain?.id !== sepolia.id}
      loading={isLoading}
    />
  );
}

export default VerifyAgreementLayout;

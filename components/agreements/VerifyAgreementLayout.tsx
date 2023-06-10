'use client';

import { useState } from 'react';
import { sepolia, useAccount, useNetwork } from 'wagmi';
import SecondaryButton from '../buttons/SecondaryButton';
import executeRequest from '../../systems/request/request';
import { useProjects } from '../../contexts/ProjectContext';

interface Props {
  project: any
}

function VerifyAgreementLayout({ project }: Props) {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useProjects();

  // const updateNotification = (message: any) => {
  //   if (notification.current) {
  //     toast.update(notification.current, {
  //       render: message,
  //       type: 'info',
  //       isLoading: true,
  //       autoClose: false,
  //     });
  //   }
  // };

  const performRequest = async () => {
    // @ts-ignore
    // notification.current = toast.loading('Initiating request...');
    setIsLoading(true);

    const res = await executeRequest(
      [project.owner, project.name, project.kolTwitterHandle, project.tweetKeywords.join()],
      'sepolia',
      null, // updateNotification,
    );

    if (res.error) {
      console.log('ERROR: ', res.result);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const isKnownError = res.result.toString().includes('transaction failed');

      // @ts-ignore
      // toast.update(notification.current, {
      //   render: `Request failed. ${isKnownError ? 'This subscription might be out of LINK.' : ''}`,
      //   type: 'error',
      //   isLoading: false,
      //   autoClose: 5000,
      // });
    } else {
      // @ts-ignore
      // toast.update(notification.current, {
      //   render: 'Request successful.',
      //   type: 'success',
      //   isLoading: false,
      //   autoClose: 5000,
      // });

      console.log(res);
    }
    setIsLoading(false);
    refetch();
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

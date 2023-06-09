'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import SecondaryButton from '../../SecondaryButton';
import executeRequest from '../../../systems/request/request';

interface Props {
  project: any
}

function VerifyAgreementLayout({ project }: Props) {
  const { isConnected, address } = useAccount();
  const [isRequesting, setIsRequesting] = useState(false);
  const notification = useRef(null);
  console.log(project);

  const updateNotification = (message: any) => {
    if (notification.current) {
      // toast.update(notification.current, {
      //   render: message,
      //   type: 'info',
      //   isLoading: true,
      //   autoClose: false,
      // });
    }
  };

  const performRequest = async () => {
    // @ts-ignore
    notification.current = toast.loading('Initiating request...');
    setIsRequesting(true);

    const res = await executeRequest(
      [project.owner, project.name, project.kolTwitterHandle, project.tweetKeywords.join()],
      'sepolia',
      updateNotification,
    );

    if (res.error) {
      console.log('ERROR: ', res.result);
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

    notification.current = null;
    setIsRequesting(false);
  };

  return !isConnected ? null : (
    <SecondaryButton text="Verify" onClick={performRequest} /* disabled={isRequesting} */ />
  );
}

export default VerifyAgreementLayout;

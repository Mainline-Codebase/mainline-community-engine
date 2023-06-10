'use client';

import {
  sepolia,
  useAccount, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction,
} from 'wagmi';
import PrimaryButton from '../buttons/PrimaryButton';
import { MCE_CONTRACT_ADDRESS } from '../../constants';
import { communityEngineABI } from '../../contracts/generated';

interface Props {
  projectName: string
  projectOwner: string
}

function SignAgreementLayout({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectName, projectOwner,
}: Props) {
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();

  const { config } = usePrepareContractWrite({
    address: MCE_CONTRACT_ADDRESS,
    abi: communityEngineABI,
    chainId: 11155111,
    functionName: 'signAgreement',
    account: address,
    // @ts-ignore
    args: [projectOwner, projectName],
  });

  const {
    data,
    write,
  } = useContractWrite(config);

  useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return !isConnected ? null : (
    <PrimaryButton
      text="Sign Agreement"
      onClick={() => write?.()}
      disabled={chain?.id !== sepolia.id}
    />
  );
}

export default SignAgreementLayout;

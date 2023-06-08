'use client';

import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import PrimaryButton from '../../PrimaryButton';
import { MCE_CONTRACT_ADDRESS } from '../../../types';
import { communityEngineABI } from '../../../contracts/generated';

interface Props {
  project: any
}

function SignAgreementLayout({ project }: Props) {
  const { isConnected, address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: MCE_CONTRACT_ADDRESS,
    abi: communityEngineABI,
    chainId: 11155111,
    functionName: 'signAgreement',
    account: address,
    // @ts-ignore
    args: [project.owner, project.name],
    enabled: !!address,
  });

  const {
    write,
  } = useContractWrite(config);

  return !isConnected ? null : (
    <PrimaryButton text="Sign Agreement" onClick={() => write?.()} />
  );
}

export default SignAgreementLayout;

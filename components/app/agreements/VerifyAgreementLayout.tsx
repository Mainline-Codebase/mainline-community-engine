'use client';

import { useAccount } from 'wagmi';
import SecondaryButton from '../../SecondaryButton';

interface Props {
  project: any
}

function VerifyAgreementLayout({ project }: Props) {
  const { isConnected } = useAccount();
  console.log(project);

  //   const { config } = usePrepareContractWrite({
  //     address: MCE_CONTRACT_ADDRESS,
  //     abi: communityEngineABI,
  //     chainId: 11155111,
  //     functionName: 'signAgreement',
  //     account: address,
  //     // @ts-ignore
  //     args: [project.owner, project.name],
  //     enabled: !!address,
  //   });

  //   const {
  //     write,
  //   } = useContractWrite(config);

  return !isConnected ? null : (
    <SecondaryButton text="Verify" onClick={console.log} />
  );
}

export default VerifyAgreementLayout;

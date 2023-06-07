'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import PrimaryButton from '../../PrimaryButton';
import NewContractSlideover from './NewContractSlideover';

function NewContractLayout() {
  const [slideoverOpen, setSlideoverOpen] = useState<boolean>(false);
  const { isConnected } = useAccount();

  return !isConnected ? null : (
    <>
      <PrimaryButton text="New Contract" onClick={() => setSlideoverOpen(true)} />
      <NewContractSlideover open={slideoverOpen} setOpen={setSlideoverOpen} />
    </>
  );
}

export default NewContractLayout;

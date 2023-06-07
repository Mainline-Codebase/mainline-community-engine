'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import NewContractSlideover from './NewContractSlideover';
import PrimaryButton from '../../PrimaryButton';

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

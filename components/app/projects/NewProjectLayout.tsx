'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import PrimaryButton from '../../PrimaryButton';
import NewContractSlideover from './NewProjectSlideover';

function NewContractLayout() {
  const [slideoverOpen, setSlideoverOpen] = useState<boolean>(false);
  const { isConnected } = useAccount();

  return !isConnected ? null : (
    <>
      <PrimaryButton text="New Project" onClick={() => setSlideoverOpen(true)} />
      <NewContractSlideover open={slideoverOpen} setOpen={setSlideoverOpen} />
    </>
  );
}

export default NewContractLayout;

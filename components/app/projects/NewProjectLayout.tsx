'use client';

import { useState } from 'react';
import { sepolia, useAccount, useNetwork } from 'wagmi';
import PrimaryButton from '../../PrimaryButton';
import NewContractSlideover from './NewProjectSlideover';
import { useRole } from '../../../contexts/RoleContext';

function NewContractLayout() {
  const [slideoverOpen, setSlideoverOpen] = useState<boolean>(false);
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { role } = useRole();

  return !isConnected ? null : (
    <>
      {role === 'po' && (
        <PrimaryButton
          text="New Project"
          onClick={() => setSlideoverOpen(true)}
          disabled={chain?.id !== sepolia.id}
        />
      )}
      <NewContractSlideover open={slideoverOpen} setOpen={setSlideoverOpen} />
    </>
  );
}

export default NewContractLayout;

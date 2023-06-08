'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import PrimaryButton from '../../PrimaryButton';
import NewContractSlideover from './NewProjectSlideover';
import { useRole } from '../../../contexts/RoleContext';

function NewContractLayout() {
  const [slideoverOpen, setSlideoverOpen] = useState<boolean>(false);
  const { isConnected } = useAccount();
  const { role } = useRole();

  return !isConnected ? null : (
    <>
      {role === 'po' && <PrimaryButton text="New Project" onClick={() => setSlideoverOpen(true)} />}
      <NewContractSlideover open={slideoverOpen} setOpen={setSlideoverOpen} />
    </>
  );
}

export default NewContractLayout;

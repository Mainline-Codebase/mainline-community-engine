import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import { abi } from './contracts/abi';

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'communityEngine',
      abi,
    },
  ],
  plugins: [
    react({
      usePrepareContractWrite: true,
      useContractWrite: true,
      useContractRead: true,
    }),
  ],
});

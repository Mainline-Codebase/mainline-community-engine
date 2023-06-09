// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from '@wagmi/cli';
// eslint-disable-next-line import/no-extraneous-dependencies
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

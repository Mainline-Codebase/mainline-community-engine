// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from '@wagmi/cli';
// eslint-disable-next-line import/no-extraneous-dependencies
import { react } from '@wagmi/cli/plugins';
import functionsConsumerAbi from "./systems/constants/abi/FunctionsConsumer.json"

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'communityEngine',
      functionsConsumerAbi,
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

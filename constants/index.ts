export const MCE_CONTRACT_ADDRESS = '0xbcDFA5aE396D926d2ECCbC1BE97c4b534a6cB778';
export const USDC_CONTRACT_ADDRESS = '0x6f14c02fc1f78322cfd7d707ab90f18bad3b54f5';
export const SEPOLIA_ETHERSCAN_URL = 'https://sepolia.etherscan.io';

export interface ActivityEvent {
  role: string;
  event: string;
  txHash?: string;
  metadata?: string;
  project: string;
  timestamp: number;
  walletAddress: string;
}

'use client';

import { Inter } from 'next/font/google';
import { publicProvider } from 'wagmi/providers/public';
import {
  configureChains, sepolia, createConfig, WagmiConfig,
} from 'wagmi';
import { classNames } from '../utils';
import './globals.css';
import RoleProvider from '../contexts/RoleContext';

const inter = Inter({ subsets: ['latin'] });

const { publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>Mainline Community Engine</title>
      </head>
      <body className={classNames(inter.className, 'h-full')}>
        <WagmiConfig config={config}>
          <RoleProvider>{children}</RoleProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}

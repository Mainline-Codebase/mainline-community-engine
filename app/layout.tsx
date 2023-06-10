'use client';

import { Inter } from 'next/font/google';
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura';
import {
  configureChains, sepolia, createConfig, WagmiConfig,
} from 'wagmi';
import { classNames } from '../utils';
import './globals.css';
import RoleProvider from '../contexts/RoleContext';
import ProjectProvider from '../contexts/ProjectContext';

const inter = Inter({ subsets: ['latin'] });

const { publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY as string }),
    publicProvider(),
  ],
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
    <html lang="en" className="h-full bg-primary-bg">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>Mainline Community Engine</title>
      </head>
      <body className={classNames(inter.className, 'h-full')}>
        <WagmiConfig config={config}>
          <RoleProvider>
            <ProjectProvider>
              {children}
            </ProjectProvider>
          </RoleProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}

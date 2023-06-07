'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import {
  WagmiConfig, configureChains, createConfig, sepolia,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { classNames, navigation, teams } from './utils';
import DesktopSidebar from '../components/DesktopSidebar';
import MobileSidebar from '../components/MobileSidebar';
import WalletButton from '../components/app/WalletButton';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode,
}

const { publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className="h-full bg-primary-bg">
      <body className={classNames(inter.className, 'h-full')}>
        <WagmiConfig config={config}>
          <MobileSidebar
            navigation={navigation}
            teams={teams}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <DesktopSidebar navigation={navigation} teams={teams} />
          <div className="xl:pl-72">
            {/* Sticky search header */}
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-primary-bg px-4 shadow-sm sm:px-6 lg:px-8">
              <button type="button" className="-m-2.5 p-2.5 text-white xl:hidden" onClick={() => setSidebarOpen(true)}>
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-end">
                <WalletButton />
              </div>
            </div>
            <main className="lg:pr-96">
              {children}
            </main>
          </div>
        </WagmiConfig>
      </body>
    </html>
  );
}

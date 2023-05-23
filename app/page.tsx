'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import {
  WagmiConfig, configureChains, createConfig, mainnet,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import ActivityFeed from '../components/app/ActivityFeed';
import DeploymentList from '../components/app/DeploymentList';
import SortDropdown from '../components/app/SortDropdown';
import DesktopSidebar from '../components/DesktopSidebar';
import MobileSidebar from '../components/MobileSidebar';
import { navigation, teams } from './utils';
import WalletButton from '../components/app/WalletButton';

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

function RootPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
          <button type="button" className="-m-2.5 p-2.5 text-white xl:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-end">
            <WalletButton />
          </div>
        </div>
        <main className="lg:pr-96">
          <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <h1 className="text-base font-semibold leading-7 text-white">Deployments</h1>
            <SortDropdown />
          </header>
          <DeploymentList />
          <ActivityFeed />
        </main>
      </div>
    </WagmiConfig>
  );
}

export default RootPage;

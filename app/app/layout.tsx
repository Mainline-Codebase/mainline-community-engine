'use client';

import '../globals.css';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { navigation, teams } from '../../utils';
import DesktopSidebar from '../../components/DesktopSidebar';
import MobileSidebar from '../../components/MobileSidebar';
import WalletSlot from '../../components/app/WalletSlot';
import { useRole } from '../../contexts/RoleContext';

interface Props {
  children: React.ReactNode,
}

export default function RootLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { role, setRole } = useRole();

  return (
    <>
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
          <div className="text-white">
            <div>
              <select
                id="role"
                name="role"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-indigo-600 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-primary-bg text-white"
                defaultValue={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="po">Project Owner</option>
                <option value="kol">Key Opinion Leader</option>
              </select>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <WalletSlot />
          </div>
        </div>
        <main className="lg:pr-96">
          {children}
        </main>
      </div>
    </>
  );
}

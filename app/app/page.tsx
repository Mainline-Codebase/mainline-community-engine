'use client';

import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ActivityFeed from '../../components/ActivityFeed';
import ProjectList from '../../components/projects/ProjectList';
import NewContractLayout from '../../components/projects/NewProjectLayout';

function RootPage() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push('/');
    }
  }, [isConnected, router]);

  return (
    <>
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <h1 className="text-base font-semibold leading-7 text-white">Community Engine Dashboard</h1>
        <NewContractLayout />
      </header>
      <ProjectList />
      <ActivityFeed />
    </>
  );
}

export default RootPage;

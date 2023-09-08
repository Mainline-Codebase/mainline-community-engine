'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { sepolia, useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondaryButton from '../components/buttons/SecondaryButton';
import { useRole } from '../contexts/RoleContext';

function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoadingPO, setIsLoadingPO] = useState(false);
  const [isLoadingKOL, setIsLoadingKOL] = useState(false);
  const { setRole } = useRole();
  const router = useRouter();
  const { isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: sepolia.id,
    onError: () => {
      setIsLoadingPO(false);
      setIsLoadingKOL(false);
    },
    onSuccess: () => {
      setIsLoadingPO(false);
      setIsLoadingKOL(false);

      router.push('/app');
    },
  });

  return (
    <div className="bg-gray-900 h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Mainline</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-8 w-auto"
                src="https://getmainline.io/public/img/logo.png"
                alt=""
              />
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Mainline</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-8 w-auto"
                  src="https://getmainline.io/public/img/logo.png"
                  alt=""
                />
              </Link>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14 h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-button to-primary-bg opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-56 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing the Mainline Community Engine |
              {' '}
              <a href="https://www.getmainline.io/community-engine-dapp" target="_blank" className="font-semibold text-white" rel="noreferrer">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more
                {' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Community Engine
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Projects get the traction they need.
            </p>
            <p className="mt-0 text-lg leading-8 text-gray-300">KOLs get paid and remain anonymous.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PrimaryButton
                text="Project Owner Login"
                loading={isLoadingPO}
                disabled={isLoadingKOL}
                onClick={() => {
                  if (!isConnected) {
                    setIsLoadingPO(true);
                  }

                  connect();
                  setRole('po');
                }}
              />
              <SecondaryButton
                text="Key Opinion Leader Login"
                loading={isLoadingKOL}
                disabled={isLoadingPO}
                onClick={() => {
                  if (!isConnected) {
                    setIsLoadingKOL(true);
                  }

                  connect();
                  setRole('kol');
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-button to-primary-bg opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;

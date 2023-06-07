'use client';

import { Fragment } from 'react';
import {
  useAccount, useContractWrite, usePrepareContractWrite, erc20ABI,
} from 'wagmi';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

import { communityEngineABI } from '../../../contract/generated';

interface Props {
  open: boolean,
  setOpen: (open: boolean) => void,
}

function NewContractSlideover({ open, setOpen }: Props) {
  const { address } = useAccount();

  const { config: configERC20 } = usePrepareContractWrite({
    address: '0x6f14c02fc1f78322cfd7d707ab90f18bad3b54f5',
    abi: erc20ABI,
    chainId: 11155111,
    functionName: 'approve',
    account: address,
    args: ['0x454ba1eca1a4fb7148526aa47cf228613b9eec1a', BigInt(1000000)],
    enabled: true,
  });

  const { config } = usePrepareContractWrite({
    address: '0x07d17D72C629b8b4a6B0dAF78c730C9b56dc39B8',
    abi: communityEngineABI,
    chainId: 11155111,
    functionName: 'addProject',
    account: address,
    args: ['Test', '0x454ba1eca1a4fb7148526aa47cf228613b9eec1a', '0x6f14c02fc1f78322cfd7d707ab90f18bad3b54f5', BigInt(1)],
    enabled: false,
  });

  console.log(config);

  const {
    data, isLoading, isSuccess, write,
  } = useContractWrite(config);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-lg">
                  <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto bg-primary-bg/10">
                      <div className="bg-primary-bg/90 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            New Contract
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-gray-300">
                            Get started with a new contract by completing the necessary steps in the form below.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-primary-bg/90 px-4 sm:px-6">
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="token-address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Token Address
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="token-address"
                                  id="token-address"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                                />
                              </div>
                            </div>
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="tweet-url"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Tweet URL
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="tweet-url"
                                  id="tweet-url"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="https://twitter.com/naval/status/1594921414640926721"
                                />
                              </div>
                            </div>
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="token-payout-amount"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Token Payout Amount
                              </label>
                              <div className="mt-2">
                                <input
                                  type="number"
                                  min="10"
                                  max="100000"
                                  name="token-payout-amount"
                                  id="token-payout-amount"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="1000"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="pb-6 pt-2">
                            <div className="mt-2 flex text-sm">
                              <Link href="https://getmainline.io" target="_blank" className="group inline-flex items-center text-gray-900 hover:text-gray-900">
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-gray-900 group-hover:text-gray-900"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 hover:underline">Learn more about Mainline contracts</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4 bg-primary-bg/90">
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="ml-4 inline-flex justify-center rounded-md bg-primary-button px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-button/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        onClick={() => write?.()}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default NewContractSlideover;

'use client';

import { Fragment, useState } from 'react';
import {
  useAccount, useContractWrite, erc20ABI,
} from 'wagmi';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { communityEngineABI } from '../../../contracts/generated';
import PrimaryButton from '../../PrimaryButton';
import { classNames } from '../../../utils';
import { MCE_CONTRACT_ADDRESS, USDC_CONTRACT_ADDRESS } from '../../../types';

interface Props {
  open: boolean,
  setOpen: (open: boolean) => void,
}

function NewContractSlideover({ open, setOpen }: Props) {
  const { address } = useAccount();

  const [projectName, setProjectName] = useState<string>('');
  const [kolAddress, setKolAddress] = useState<string>('');
  const [kolTwitterHandle, setKolTwitterHandle] = useState<string>('');
  const [keywords, setKeywords] = useState<string>('');
  const [tokenAmount, setTokenAmount] = useState<number>(1);

  const {
    write: writeERC20,
  } = useContractWrite({
    address: USDC_CONTRACT_ADDRESS,
    abi: erc20ABI,
    chainId: 11155111,
    functionName: 'approve',
    account: address,
    args: [MCE_CONTRACT_ADDRESS, BigInt(tokenAmount || 1000)],
  });

  const {
    write: writeAddProject,
  } = useContractWrite({
    address: MCE_CONTRACT_ADDRESS,
    abi: communityEngineABI,
    chainId: 11155111,
    functionName: 'addProject',
    account: address,
    args: [
      projectName,
      // @ts-ignore
      kolAddress,
      USDC_CONTRACT_ADDRESS,
      BigInt(tokenAmount),
      kolTwitterHandle,
      keywords.split(',').map((keyword) => keyword.trim()),
    ],
    onSuccess: () => setOpen(false),
  });

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
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                  <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-2xl shadow-primary-overlay">
                    <div className="h-0 flex-1 overflow-y-auto bg-primary-bg/10">
                      <div className="bg-primary-bg px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            New Project
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
                            Get started with a new project by completing the necessary steps in the form below.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-primary-bg/90 px-4 sm:px-6">
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="project-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                1) Project Name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="project-name"
                                  id="project-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="Project ABC"
                                  onChange={(e) => setProjectName(e.target.value)}
                                />
                              </div>
                            </div>
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="kol-address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                2) KOL Wallet Address
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="kol-address"
                                  id="kol-address"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="0x7cd4d5CF4B677292481fC05c6906c95d7996C573"
                                  onChange={(e) => setKolAddress(e.target.value)}
                                />
                              </div>
                            </div>
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="kol-twitter-handle"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                3) KOL Twitter Handle
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="kol-twitter-handle"
                                  id="kol-twitter-handle"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="@naval"
                                  onChange={(e) => setKolTwitterHandle(e.target.value)}
                                />
                              </div>
                            </div>
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="token-payout-amount"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                4) Token Payout Amount (USDC)
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
                                  onChange={(e) => setTokenAmount(Number(e.target.value))}
                                />
                              </div>
                            </div>
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="keywords"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                5) Keywords (comma separated)
                              </label>
                              <div className="mt-2">
                                <textarea
                                  name="keywords"
                                  id="keywords"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="web3, blockchain, Chainlink"
                                  onChange={(e) => setKeywords(e.target.value)}
                                />
                              </div>
                            </div>
                            <div>
                              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                              <label
                                htmlFor="token-payout-amount"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                6) Approve USDC Spending
                              </label>
                              <div className="mt-2">
                                <PrimaryButton text="Approve" onClick={() => writeERC20?.()} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4 bg-primary-bg">
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className={classNames('ml-4 inline-flex justify-center rounded-md bg-primary-button px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-button/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', (!projectName || !kolAddress || !kolTwitterHandle || !tokenAmount || !keywords) && 'opacity-50 cursor-not-allowed')}
                        onClick={() => writeAddProject?.()}
                        disabled={!projectName || !kolAddress || !kolTwitterHandle || !tokenAmount || !keywords}
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

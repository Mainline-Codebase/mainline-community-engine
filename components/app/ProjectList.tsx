'use client';

import { useAccount, useContractRead } from 'wagmi';
import Link from 'next/link';
import { classNames, shortenWalletAddress } from '../../app/app/utils';
import { communityEngineABI } from '../../contracts/generated';
import { MCE_CONTRACT_ADDRESS } from '../../types';
import { useRole } from '../../contexts/RoleContext';
import SignAgreementLayout from './agreements/SignAgreementLayout';

const isComplete = {
  true: 'text-green-400 bg-green-400/10',
  false: 'text-yellow-400 bg-yellow-400/10',
};

const kolHasAgreed = {
  true: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
  false: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
};

function ProjectList() {
  const { address } = useAccount();
  const { role } = useRole();

  const { data: projects } = useContractRead({
    address: MCE_CONTRACT_ADDRESS,
    abi: communityEngineABI,
    functionName: role === 'po' ? 'getProjectOwnerProjects' : 'getKOLProjects',
    account: address,
    // @ts-ignore
    args: [address],
    enabled: !!address,
    staleTime: 2500,
    watch: true,
  });

  console.log(projects);

  return (
    <ul className="divide-y divide-white/5">
      {
        projects?.map((project) => (
          <li key={Math.random()} className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
            <div className="min-w-0 flex-auto">
              <div className="flex items-center gap-x-3">
                {/* @ts-ignore */}
                <div className={classNames(isComplete[String(project.isComplete)], 'flex-none rounded-full p-1')}>
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>
                <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                  <div className="flex gap-x-2">
                    <span className="truncate">{project.name}</span>
                    <span className="text-gray-400">/</span>
                    <span className="whitespace-nowrap">
                      Token Payout:
                      {' '}
                      <b>{Number(project.numTokensToPayout)}</b>
                      {' '}
                      USDC
                    </span>
                    {/* <span className="absolute inset-0" /> */}
                    <div
                      className={classNames(
                        // @ts-ignore
                        kolHasAgreed[String(project.kolHasAgreed)],
                        'rounded-full flex-none py-1 px-2 ml-2 text-xs font-medium ring-1 ring-inset',
                      )}
                    >
                      {(role === 'po' && project.kolHasAgreed) && 'Ready to Verify'}
                      {(role === 'po' && !project.kolHasAgreed) && 'Pending KOL Agreement'}
                      {(role === 'kol' && project.kolHasAgreed) && 'Signed Agreement'}
                      {(role === 'kol' && !project.kolHasAgreed) && 'Pending Agreement'}
                    </div>
                  </div>
                </h2>
              </div>
              <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                <p className="truncate">
                  {role === 'po' ? 'KOL Address:' : 'PO Address:'}
                  {' '}
                  <Link href={`https://sepolia.etherscan.io/address/${role === 'po' ? project.kol : project.owner}`} target="_blank" className="hover:underline">
                    {shortenWalletAddress(role === 'po' ? project.kol : project.owner)}
                  </Link>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                {role === 'po' && (
                  <>
                    <p>
                      <span>
                        KOL Handle:
                        {' '}
                        <Link href={`https://twitter.com/${project.kolTwitterHandle}`} target="_blank" className="hover:underline">{project.kolTwitterHandle}</Link>
                      </span>
                    </p>
                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </>
                )}
                <p className="whitespace-nowrap">
                  Tweet Keywords:
                  {' '}
                  {project.tweetKeywords.map((keyword) => (
                    <span key={Math.random()} className="px-2 py-0.5 rounded-full text-green-400 bg-green-400/10">
                      {keyword}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            {role === 'kol' && !project.isComplete && !project.kolHasAgreed && (
              <SignAgreementLayout project={project} />
            )}
          </li>
        ))
      }
    </ul>
  );
}

export default ProjectList;

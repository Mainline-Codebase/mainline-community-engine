import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { classNames, shortenWalletAddress } from '../../../utils';
import SignAgreementLayout from '../agreements/SignAgreementLayout';
import VerifyAgreementLayout from '../agreements/VerifyAgreementLayout';
import { useRole } from '../../../contexts/RoleContext';

interface Props {
  project: any
}

function ProjectCard({ project }: Props) {
  const { role } = useRole();

  return (
    <li key={Math.random()} className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
      <div className="min-w-0 flex-auto">
        <div className="flex items-center gap-x-3">
          {/* @ts-ignore */}
          <div className={classNames(
            (!project.isComplete && project.kolHasAgreed) && 'text-indigo-400 bg-indigo-400/10',
            (!project.isComplete && !project.kolHasAgreed) && 'text-yellow-400 bg-yellow-400/10',
            (project.isComplete) && 'text-blue-400 bg-blue-400/10',
            'flex-none rounded-full p-1',
          )}
          >
            <div className="h-2 w-2 rounded-full bg-current" />
          </div>
          <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
            <div className="flex gap-x-2">
              <span className="truncate">{project.name}</span>
              <span className="text-gray-400">/</span>
              <span className="whitespace-nowrap">
                <b>{Number(project.numTokensToPayout) / 10 ** 18}</b>
                {' '}
                USDC Payout
              </span>
              {/* <span className="absolute inset-0" /> */}
              <div
                className={classNames(
                  // @ts-ignore
                  (project.kolHasAgreed && !project.isComplete) && 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
                  (!project.kolHasAgreed && !project.isComplete) && 'text-yellow-400 bg-yellow-400/10 ring-yellow-400/20',
                  project.isComplete && 'text-blue-400 bg-blue-400/10 ring-blue-400/30',
                  'rounded-full flex-none py-1 px-2 ml-2 text-xs font-medium ring-1 ring-inset',
                )}
              >
                {(role === 'po' && project.kolHasAgreed && !project.isComplete) && 'Ready to Verify'}
                {(role === 'po' && !project.kolHasAgreed && !project.isComplete) && 'Pending KOL Agreement'}
                {(role === 'kol' && project.kolHasAgreed && !project.isComplete) && 'Signed Agreement'}
                {(role === 'kol' && !project.kolHasAgreed && !project.isComplete) && 'Pending Agreement'}
                {project.isComplete && 'Completed'}
              </div>
            </div>
          </h2>
        </div>
        <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
          <div className="truncate">
            <Link href={`https://sepolia.etherscan.io/address/${role === 'po' ? project.kol : project.owner}`} target="_blank" className="hover:underline inline-flex justify-center items-center">
              <UserIcon className="h-3 w-3 text-white mr-1" />
              {' '}
              {shortenWalletAddress(role === 'po' ? project.kol : project.owner)}
            </Link>
          </div>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
            <circle cx={1} cy={1} r={1} />
          </svg>
          {role === 'po' && (
          <>
            <Link href={`https://twitter.com/${project.kolTwitterHandle}`} target="_blank">
              <span className="inline-flex justify-center items-center space-x-1 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 1231.051 1000"><path fill="#1DA1F2" d="M1231.051 118.453q-51.422 76.487-126.173 130.403q.738 14.46.738 32.687q0 101.273-29.53 202.791q-29.53 101.519-90.215 194.343q-60.685 92.824-144.574 164.468q-83.889 71.644-201.677 114.25q-117.788 42.606-252.474 42.606q-210.2 0-387.147-113.493q31.406 3.495 60.242 3.495q175.605 0 313.687-108.177q-81.877-1.501-146.654-50.409q-64.777-48.907-89.156-124.988q24.097 4.59 47.566 4.59q33.782 0 66.482-8.812q-87.378-17.5-144.975-87.04q-57.595-69.539-57.595-160.523v-3.126q53.633 29.696 114.416 31.592q-51.762-34.508-82.079-89.999q-30.319-55.491-30.319-120.102q0-68.143 34.151-126.908q95.022 116.607 230.278 186.392q135.258 69.786 290.212 77.514q-6.609-27.543-6.621-57.485q0-104.546 73.994-178.534Q747.623 0 852.169 0q109.456 0 184.392 79.711q85.618-16.959 160.333-61.349q-28.785 90.59-110.933 139.768q75.502-8.972 145.088-39.677z" /></svg>
                {' '}
                <span>{project.kolTwitterHandle}</span>
              </span>
            </Link>
            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
              <circle cx={1} cy={1} r={1} />
            </svg>
          </>
          )}
          <p className="whitespace-nowrap">
            {project.tweetKeywords.map((keyword: string) => (
              <span key={Math.random()} className="px-2 py-0.5 rounded-full text-green-400 bg-green-400/10">
                {keyword}
              </span>
            ))}
          </p>
        </div>
      </div>
      {role === 'po' && !project.isComplete && project.kolHasAgreed && (
      <VerifyAgreementLayout
        project={project}
      />
      )}
      {role === 'kol' && !project.isComplete && !project.kolHasAgreed && (
        <SignAgreementLayout
          projectName={project.name}
          projectOwner={project.owner}
        />
      )}
    </li>
  );
}

export default ProjectCard;

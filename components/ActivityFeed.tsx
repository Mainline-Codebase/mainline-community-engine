import { SignalIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import dayjs from 'dayjs';
import { useActivity } from '../contexts/ActivityContext';
import { shortenWalletAddress } from '../utils';
import { SEPOLIA_ETHERSCAN_URL } from '../constants';

function ActivityFeed() {
  const { activity } = useActivity();

  return (
    <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-white">Activity Feed</h2>
      </header>
      <ul className="divide-y divide-white/5">
        {activity?.length === 0 && (
          <li className="px-4 py-4 sm:px-6 lg:px-8 mt-10 flex-col items-center justify-center">
            <SignalIcon className="mx-auto h-12 w-12 text-gray-400 animate-pulse" />
            <h3 className="mt-2 text-sm font-semibold text-white text-center">Awaiting Events</h3>
          </li>
        )}
        {activity?.map((item) => (
          <li key={item.timestamp} className="px-4 py-4 sm:px-6 lg:px-8 space-y-1 animate-fadeIn">
            <div className="flex justify-between items-center">
              <div className="flex-auto truncate text-sm leading-6 text-indigo-500 italic">{item.event}</div>
              <time dateTime={dayjs(item.timestamp).format('h:mm:ss A | M/DD/YY')} className="flex-none text-xs text-gray-400">
                {dayjs(item.timestamp).format('h:mm:ss A • M/DD/YY')}
              </time>
            </div>
            <div className="truncate text-sm font-normal flex items-center gap-x-3">
              <span className="text-white flex-auto font-semibold">{item.project}</span>
              {item?.txHash ? (
                <span className="text-white flex-none underline">
                  <Link href={`${SEPOLIA_ETHERSCAN_URL}/tx/${item.txHash}`} target="_blank">
                    {shortenWalletAddress(item.txHash)}
                  </Link>
                </span>
              ) : (
                <span className="text-white flex-none">{item.metadata}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ActivityFeed;

import { SignalIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const activityItems: any[] = [];

function ActivityFeed() {
  return (
    <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-white">Activity Feed</h2>
        <Link href="/app" className="text-sm font-semibold leading-6 text-indigo-500">
          View all
        </Link>
      </header>
      <ul className="divide-y divide-white/5">
        {activityItems.length === 0 && (
          <li className="px-4 py-4 sm:px-6 lg:px-8 mt-10 flex-col items-center justify-center">
            <SignalIcon className="mx-auto h-12 w-12 text-gray-400 animate-pulse" />
            <h3 className="mt-2 text-sm font-semibold text-white text-center">Coming Soon</h3>
          </li>
        )}
        {activityItems?.map((item) => (
          <li key={item.commit} className="px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-800" />
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">{item.user.name}</h3>
              <time dateTime={item.dateTime} className="flex-none text-xs text-gray-600">
                {item.date}
              </time>
            </div>
            <p className="mt-3 truncate text-sm text-gray-500">
              Pushed to
              {' '}
              <span className="text-gray-400">{item.projectName}</span>
              {' '}
              (
              <span className="font-mono text-gray-400">{item.commit}</span>
              {' '}
              on
              {' '}
              <span className="text-gray-400">{item.branch}</span>
              )
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ActivityFeed;

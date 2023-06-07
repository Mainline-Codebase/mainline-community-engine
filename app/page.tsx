import ActivityFeed from '../components/app/ActivityFeed';
import DeploymentList from '../components/app/DeploymentList';
import NewContractLayout from '../components/app/contracts/NewContractLayout';

export const metadata = {
  title: 'Mainline Community Engine',
  description: 'mce.vercel.app',
};

function RootPage() {
  return (
    <>
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <h1 className="text-base font-semibold leading-7 text-white">Community Engine Dashboard</h1>
        <NewContractLayout />
      </header>
      <DeploymentList />
      <ActivityFeed />
    </>
  );
}

export default RootPage;

import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { sepolia, useAccount, useNetwork } from 'wagmi';
import { useRole } from './RoleContext';
import { ActivityEvent } from '../constants';

interface ActivityContextProps {
  activity: ActivityEvent[];
  setActivity: (activity: any[]) => void;
}

const ActivityContext = createContext({} as ActivityContextProps);

interface Props {
  children: React.ReactNode;
}

export default function ActivityProvider({ children }: Props) {
  const { role } = useRole();
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const [activity, setActivity] = useState<ActivityEvent[]>([]);

  useEffect(() => {
    if (!isConnected || chain?.id !== sepolia.id) {
      setActivity([]);
    }
  }, [chain?.id, isConnected]);

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ActivityContext.Provider value={{
      activity: activity
        .filter((event) => event.role === role)
        .filter((event) => event.walletAddress === address),
      setActivity,
    }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (context === undefined) {
    throw new Error('useActivity must be used within a ActivityProvider');
  }
  return context;
};

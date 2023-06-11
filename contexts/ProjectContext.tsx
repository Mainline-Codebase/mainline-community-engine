import { createContext, useContext } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import { MCE_CONTRACT_ADDRESS } from '../constants';
import { communityEngineABI } from '../contracts/generated';
import { useRole } from './RoleContext';

interface ProjectContextProps {
  projects: any[] | any;
  refetch: () => void;
}

const ProjectContext = createContext({} as ProjectContextProps);

interface Props {
  children: React.ReactNode;
}

export default function ProjectProvider({ children }: Props) {
  const { role } = useRole();
  const { address } = useAccount();

  const { data: projects, refetch } = useContractRead({
    address: MCE_CONTRACT_ADDRESS,
    abi: communityEngineABI,
    functionName: role === 'po' ? 'getProjectOwnerProjects' : 'getKOLProjects',
    account: address,
    enabled: !!address,
    // @ts-ignore
    args: [address],
    watch: false,
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ProjectContext.Provider value={{ projects, refetch }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a ProjectProvider');
  }
  return context;
};

import { createContext, useContext, useState } from 'react';

interface RoleContextProps {
  role: string;
  setRole: (role: string) => void;
}

const RoleContext = createContext({} as RoleContextProps);

interface Props {
  children: React.ReactNode;
}

export default function RoleProvider({ children }: Props) {
  const [role, setRole] = useState('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

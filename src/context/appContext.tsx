// React
import { createContext, useState } from 'react';

type AppContextType = {
  mobileNavIsOpen: boolean;
  setMobileNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextType);

type AppContextProiderProps = {
  children: React.ReactNode;
};

export default function AppContextProvider({
  children,
}: AppContextProiderProps) {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        mobileNavIsOpen,
        setMobileNavIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// React
import { createContext, useState } from 'react';

// Data
import { toastDefault, toastType } from '../data/toastDefault';

type AppContextType = {
  mobileNavIsOpen: boolean;
  setMobileNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toast: toastType;
  setToast: React.Dispatch<React.SetStateAction<toastType>>;
};

export const AppContext = createContext({} as AppContextType);

type AppContextProiderProps = {
  children: React.ReactNode;
};

export default function AppContextProvider({
  children,
}: AppContextProiderProps) {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toast, setToast] = useState(toastDefault);

  return (
    <AppContext.Provider
      value={{
        mobileNavIsOpen,
        setMobileNavIsOpen,
        modalIsOpen,
        setModalIsOpen,
        toast,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

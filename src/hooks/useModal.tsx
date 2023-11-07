// React
import { useContext } from 'react';

// Context
import { AppContext } from '../context/appContext';

export default function useModal() {
  const { modalIsOpen, setModalIsOpen } = useContext(AppContext);

  const downloadCV = () => {
    setModalIsOpen(true);
  };

  return { modalIsOpen, setModalIsOpen, downloadCV };
}

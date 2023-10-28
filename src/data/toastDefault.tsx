import { MdOutlineError } from 'react-icons/md';
import { VscPassFilled } from 'react-icons/vsc';

export type toastType = {
  message: string;
  status: string;
  success_icon: React.ReactElement;
  error_icon: React.ReactElement;
};

export const toastDefault = {
  message: '',
  status: '',
  success_icon: <VscPassFilled />,
  error_icon: <MdOutlineError />,
};

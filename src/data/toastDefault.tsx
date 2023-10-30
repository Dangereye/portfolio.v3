// Icons
import { MdOutlineError } from 'react-icons/md';
import { VscPassFilled } from 'react-icons/vsc';

export type statusType = 'success' | 'error';

export type toastType = {
  message: string;
  status: statusType;
  success_icon: React.ReactElement;
  error_icon: React.ReactElement;
};

export const toastDefault = {
  message: '',
  status: 'success' as statusType,
  success_icon: <VscPassFilled />,
  error_icon: <MdOutlineError />,
};

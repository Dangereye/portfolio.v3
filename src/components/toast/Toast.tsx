// React
import { useContext } from 'react';

// Context
import { AppContext } from '../../context/appContext';

// Compoents
import Button from '../buttons/Button';

// Icons
import { MdClose } from 'react-icons/md';

export function Toast() {
  const { toast, setToast } = useContext(AppContext);
  const closeToast = () => {
    setToast({ ...toast, message: '', status: 'success', is_active: false });
  };

  return (
    <div className={`toast ${toast.status} ${toast.is_active ? '' : 'closed'}`}>
      <div className='container'>
        <div className='toast__message'>
          <div className='toast__icon'>
            {toast.status === 'success' ? toast.success_icon : toast.error_icon}
          </div>
          <div className='toast__text'>{toast.message}</div>
        </div>

        <Button ariaLabel='close' variant='btn--toast' fnc={closeToast}>
          <MdClose />
        </Button>
      </div>
    </div>
  );
}

// React
import { useContext } from 'react';

// Context
import { AppContext } from '../../../context/appContext';

export default function MobileIcon() {
  const { mobileNavIsOpen, setMobileNavIsOpen } = useContext(AppContext);

  return (
    <div
      onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
      className={mobileNavIsOpen ? 'mobile-nav ' : 'mobile-nav closed'}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

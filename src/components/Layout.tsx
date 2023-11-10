// Hooks
import usePageScroll from '../hooks/usePageScroll';

// React router
import { Route, Routes } from 'react-router-dom';

// Components
import MobileNavigation from './mobile_navigation/MobileNavigation';
import Modal from './modal/Modal';
import Navbar from './navbar/Navbar';
import Toast from './toast/Toast';
import Main from './main/Main';
import Footer from './footer/Footer';

export default function Layout() {
  usePageScroll();
  return (
    <div className='layout'>
      <Navbar />
      <Modal />
      <Toast />
      <MobileNavigation />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context
import AppContextProvider from './context/appContext';

// Components
import Navbar from './components/navbar/Navbar';
import MobileNavigation from './components/mobile_navigation/MobileNavigation';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppContextProvider>
          <Navbar />
          <Modal />
          <MobileNavigation />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
          <Footer />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

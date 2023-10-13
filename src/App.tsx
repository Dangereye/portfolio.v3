// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context
import AppContextProvider from './context/appContext';

// Components
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landing_page/LandingPage';
import MobileNavigation from './components/mobile_navigation/MobileNavigation';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppContextProvider>
          <Navbar />
          <MobileNavigation />
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

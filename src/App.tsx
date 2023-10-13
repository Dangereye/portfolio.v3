// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landing_page/LandingPage';
import AppContextProvider from './context/appContext';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

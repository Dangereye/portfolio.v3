// React router
import { BrowserRouter } from 'react-router-dom';

// Context
import AppContextProvider from './context/appContext';

// Components
import Layout from './components/Layout';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppContextProvider>
          <Layout />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

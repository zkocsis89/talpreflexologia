import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LanguageProvider } from './context/LanguageContext';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PricesPage } from './pages/PricesPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/arak" element={<PricesPage />} />
              <Route path="/kapcsolat" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

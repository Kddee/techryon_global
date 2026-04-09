import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Conferences from './pages/Conferences';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // Dynamic theme switcher based on route
  useEffect(() => {
    if (location.pathname.startsWith('/conferences')) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/conferences" element={<Conferences />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

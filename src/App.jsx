import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/services"          element={<Services />} />
        <Route path="/services/:id"      element={<ServiceDetail />} />
        <Route path="/about"             element={<About />} />
        <Route path="/contact"           element={<Contact />} />
        <Route path="/events"            element={<Events />} />
        <Route path="/events/:id"        element={<EventDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;

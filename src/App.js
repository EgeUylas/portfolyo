import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Component
import Layout from './components/layout/Layout';

// Page Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/contact/form" element={<Contact />} />
          <Route path="/contact/name" element={<Contact />} />
          <Route path="/contact/mail" element={<Contact />} />
          <Route path="/contact/content" element={<Contact />} />
          <Route path="/contact/send" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

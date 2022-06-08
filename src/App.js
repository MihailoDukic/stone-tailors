import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages 
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import Legacy from './pages/Legacy';
import Stones from './pages/Stones';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// Components 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/stones" element={<Stones />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

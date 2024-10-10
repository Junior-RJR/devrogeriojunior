import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RJR from './js/RJR';
import Dashboard from './js/Dashboard';
import PoliticaPrivacidade from './js/PoliticaPrivacidade';
import SiteVazio from './js/SiteVazio';
import './global.css'

function App() {
    return (
        // <div>
        //     <RJR />
        // </div>
        <Router>
        <Routes>
          <Route path="/" element={<RJR />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/site-vazio" element={<SiteVazio />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </Router>
    );
}

export default App;
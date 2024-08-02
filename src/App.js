import React from 'react';
import RJR from './js/RJR';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './js/Dashboard';
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
        </Routes>
      </Router>
    );
}

export default App;
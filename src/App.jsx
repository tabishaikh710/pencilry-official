import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

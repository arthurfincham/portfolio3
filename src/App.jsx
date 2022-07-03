import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GARoutes from './GARoutes';

function App() {
  return (
    <Router>
      <GARoutes />
    </Router>
  );
}

export default App;

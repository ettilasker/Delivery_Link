import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation'; 
import AppRoutes from './Routes';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
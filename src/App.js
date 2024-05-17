import './App.css';
import HomePage from './Components/pages/HomePage';
import MyRoutes from "./routes";

import React from 'react';


function App() {
  return (
    <MyRoutes>
         <HomePage/>      
    </MyRoutes>
  );
}

export default App;

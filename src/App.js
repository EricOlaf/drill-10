import React from 'react';
import logo from './logo.svg';
import './App.css';

import router from "./router"

function App() {
  return (
    <div className="App">
     <h1>My Cool Store</h1>
     {router}
    </div>
  );
}

export default App;

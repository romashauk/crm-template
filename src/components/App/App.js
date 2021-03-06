import React from 'react';
import './App.scss';
import Sidebar from '../Sidebar';
import Routes from './Routes';

function App(props) {
  return (
    <div className="App">
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;

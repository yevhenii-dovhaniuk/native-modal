import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <header>
        <Navigation/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;

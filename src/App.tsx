import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { AppLoadingIndicator } from './AppLoadingIndicator/AppLoadingIndicator';

function App() {
  return (
    <div className="app">
      <header>
        <Navigation/>
        <AppLoadingIndicator />
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;

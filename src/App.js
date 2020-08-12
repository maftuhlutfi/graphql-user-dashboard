import React from 'react';
import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='contents'>
        <Profile />
        <div className='content' />
        <div className='content' />
      </div>
    </div>
  );
}

export default App;

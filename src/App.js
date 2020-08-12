import React from 'react';
import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';
import ContentBox from './components/ContentBox';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='contents'>
        <Profile />
        <ContentBox />
        <div className='content' />
      </div>
    </div>
  );
}

export default App;

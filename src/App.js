import React from 'react';
import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';
import ContentBox from './components/ContentBox';
import FriendContainer from './components/FriendContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='contents'>
        <Profile />
        <ContentBox />
        <FriendContainer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Header from './components/Header';
import {default as Profile} from './components/Profile';
import ContentBox from './components/ContentBox';
import FriendContainer from './components/FriendContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/dashboard/user/1' />
        <Route exact path='/dashboard/user/:id'>
          <div className="App">
            <Header />
            <div className='contents'>
              <Profile />
              <ContentBox />
              <FriendContainer />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

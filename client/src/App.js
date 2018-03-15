import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
// import Notes from './components/Notes';
// import NoteView from './components/NoteView';
import FetchNotes from './components/FetchNotes';
import NoMatch from './components/NoMatch';
import Friends from './components/Friends';
// import FriendView from './components/FriendView';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/notes" component={FetchNotes} />
    {/* <Route exact path="/notes/:id" component={NoteView} /> */}
    <Route exact path="/friends" component={Friends} />
    {/* <Route exact path="/friends/:id" component={FriendView} /> */}
    <Route component={NoMatch} />
  </Switch>
)

export default App;

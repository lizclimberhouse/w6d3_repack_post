import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
// import Notes from './components/Notes';
// import NoteView from './components/NoteView';
import FetchNotes from './components/FetchNotes';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/notes" component={FetchNotes} />
    {/* <Route exact path="/notes/:id" component={NoteView} /> */}
    <Route component={NoMatch} />
  </Switch>
)

export default App;

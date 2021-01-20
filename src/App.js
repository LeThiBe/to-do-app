import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './page/home/HomePage';
import AboutPage from './page/about/AboutPage';
import ContactPage from './page/contact/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

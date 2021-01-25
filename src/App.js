import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import configureStore from "./configureStore";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={(props) => (<About number={1}  {...props}/>)} />)}
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;

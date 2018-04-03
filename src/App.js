import { Route } from 'mirrorx';
import React from 'react';
import About from './components/About';

import Header from './components/Header';
import Home from './components/Home';

import Topics from './containers/Topics';


const App = () => (
  <div>
    <Header />
    <hr />
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </div>
);

export default App;

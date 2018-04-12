import React from 'react';
import App from './App';
import mirror, { render, Router } from './components/kx-mirrorx';
import registerServiceWorker from './registerServiceWorker';

mirror.defaults({
  historyMode: 'browser',
});

render(
  <Router basename="/">
    <App />
  </Router>
  , document.getElementById('root'),
);


registerServiceWorker();

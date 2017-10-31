import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();

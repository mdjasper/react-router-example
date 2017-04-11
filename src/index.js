import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Person from './Person';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="person/:id" component={App} />
    </Route>
  </Router>,
  document.getElementById('root')
);

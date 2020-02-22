import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './containers/Login'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();

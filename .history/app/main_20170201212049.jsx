import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import { Router, Route, browserHistory } from 'react-router';


// ReactDOM.render(<App/>,document.getElementById('app'));
ReactDOM.render(<Router history={hashHistory}>
   <Route path="/" component={App}></Route>
</Router>,
document.getElementById('app'));


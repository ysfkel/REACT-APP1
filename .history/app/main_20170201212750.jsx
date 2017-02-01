import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import Home from './'
import { Router, Route, browserHistory } from 'react-router';



ReactDOM.render(
 <Router history={browserHistory}>
   <Route path="/" component={App}>
       <Route path="home" component={Home}/>
   </Route>
</Router>,
document.getElementById('app'));


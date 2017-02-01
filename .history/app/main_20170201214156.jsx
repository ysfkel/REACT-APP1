import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import Home from './components/home/home.jsx'
import { Router,IndexRoute, Route, browserHistory } from 'react-router';



ReactDOM.render(
 <Router history={browserHistory}>
   <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="home" component={Home}/>
      <Route path=""></Route>
   </Route>
</Router>,
document.getElementById('app'));


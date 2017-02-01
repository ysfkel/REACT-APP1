import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import Home from './components/home/home.jsx'
import List from './components/list/list.jsx'
import Layout from './components/shared/layout/layout.jsx';
import { Router,IndexRoute, Route, browserHistory } from 'react-router';



ReactDOM.render(
 <Router history={browserHistory}>
   <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="home" component={Home}/>
      <Route path="list" component={List}></Route>
      <Route path=""></Route>
   </Route>
</Router>,
document.getElementById('app'));


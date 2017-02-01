import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import { Router, Route, hashHistory } from 'react-router';


// ReactDOM.render(<App/>,document.getElementById('app'));
ReactDOM.render(<Router history="{hashHistory}"></Router>,
document.getElementById('app'));


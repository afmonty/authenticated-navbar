import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './home';
import Login from './login';
import Dashboard from './dashboard';
import Register from './register';
import $ from 'jquery';

 

const router = (
 <Router history={hashHistory}>
   <Route path="/" component={Home}/>
   <Route path="login" component={Login}/>
   <Route path="register" component={Register}/>
   <Route path="dashboard" component={Dashboard}/>
 </Router>  
);
export default router;

//   
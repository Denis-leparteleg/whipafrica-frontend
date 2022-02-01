import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import Login from './components/LoginComponent'
import Signup from './components/SignupComponent'
import Dashboard from './components/DashboardComponent'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route path = "/signup"element={<App />} />
      <Route path = "/login" element={<App />} />
      <Route path = "/dashboard" element = {<Dashboard/>} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

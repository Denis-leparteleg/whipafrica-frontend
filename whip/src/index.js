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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route path = "/signup"element={<Signup />} />
      <Route path = "/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

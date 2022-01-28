import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupComponent from "./components/SignupComponent";
import LoginComponent from "./components/LoginComponent";
// import Login from "./components/LoginComponent";


import Main from './components/MainComponent'


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
         <Main/> 
        </Route>
        <Route path='/signup'>
          <SignupComponent/> 
        </Route>
        <Route path='/login'>
          <LoginComponent/> 
        </Route>
      </Switch>
      </Router>

    // <div className="App">
    //   <Main/>
    //   <ToastContainer hideProgressBar={true} newestOnTop={true} />
    // </div>
  );
}

export default App;



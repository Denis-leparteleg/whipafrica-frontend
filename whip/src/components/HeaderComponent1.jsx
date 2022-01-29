import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Login from './LoginComponent';
import { useNavigate } from 'react-router-dom';


function Header1(){
    const navigate = useNavigate();

    const home = () => {
        navigate("/");
    }
      return(
          <div>
            <div class = "container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="../images/logo2.jpeg" width="45" height="40" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ml-auto" >
                    <li class="nav-item active">
                        <a class="nav-link " id="home" onClick={home}  href="">HOME<span class="sr-only"></span></a>
                    </li>
                    </ul>
                </div>
            </nav>
            
            </div>
          </div>
      )
}
export default Header1;
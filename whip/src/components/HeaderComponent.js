import React from 'react';

function Header(){
      return(
          <div>
            <div class = "container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="../images/logo2.jpeg" width="45" height="40" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ml-auto" >
                    <li class="nav-item active">
                        <a class="nav-link" id="home" href="#">HOME<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" id="art" href="#">ARTIST DASHBOARD</a>
                    </li>
                    </ul>
                </div>
            </nav>
            </div>
          </div>
      )
}
export default Header;
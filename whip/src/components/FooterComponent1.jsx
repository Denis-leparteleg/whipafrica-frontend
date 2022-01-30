import React, {useState} from 'react';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import { useNavigate } from "react-router-dom";

const Footer1 = ()=>{
    const navigate = useNavigate();

    const signUp = () => {
        navigate("/signup");
    }


      return(
          <div class="footer">
            <div class = "container">
                <div class="card-group">
                    <div class="card">
                         <img src="../images/karun.jpg" class="card-img-top" alt="..." height = "250px"></img>
                    </div>
                    <div class="card">
                        <img src="../images/phy.jpeg" class="card-img-top" alt="..." height = "250px"></img>
                    </div>
                    <div class="card">
                        <img src="../images/migos.jpeg" class="card-img-top" alt="..."height = "250px"></img>
                    </div>
                    <div class="card">
                        <img src="../images/bien.jpg" class="card-img-top" alt="..."height = "250px"></img>
                    </div>
                    <div class="card">
                        <div class = "card"><img src="../images/wahu.jpeg" class="card-img-top" alt="..."height = "120px"></img></div>
                        <div class = "card"><img src="../images/stromae.jpeg" class="card-img-top" alt="..."height = "120px"></img></div>
                    </div>
                </div>
            </div>
            <div class = "row" id="row">
                    <div class = "col-md-12 text-center footerend">
                        <p>Are you a - <span>Manager</span>- <span>Music label</span> - <span>Agent</span> - <span>Promoter</span> or an <span>Artist</span>?</p>
                        <p><span>DISCOVER. </span> <span>ACCESS. </span> <span>EVALUATE DATA. </span></p>
                        {/* <button class = "btn mt-4 btn-light btn-lg rounded-pill" type="submit" onClick={signUp} >SIGN UP</button> */}
                        <p> &copy; COPYRIGHT 2022 WHIP AFRICA MUSIC</p>
                    </div>
            </div>
        </div>
      ) 
}

 
export default Footer1;
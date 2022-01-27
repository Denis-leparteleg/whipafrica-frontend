import React, {useState} from 'react';
// import bien from '../images/bien.jpeg';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './LoginComponent';
import Signup from './SignupComponent';


function submit(){
    console.log("Sign up has been clicked");
}

function Footer(){
    const [page, setPage] = useState(0);

    function nav(n){
        console.log(n)
        setPage(n);
    }
      return(
          <div class="footer">
            <div class = "container">
                <div class="card-group">
                    <div class="card">
                        {/* <img src={require('../images/bien.jpeg').default} width="100" height="50" />
                         {/* <img src={bien} class="card-img-top" alt="..."></img> */}
                         {/* <img src={process.env.PUBLIC_URL + "/images/bien.jpg"} /> */}
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
                        {/* <Router> */}
                            {/* <Link to={"/sign-in"}> */}
                                {/* <button class="btn mt-4 btn-light btn-lg rounded-pill" type="submit"onClick = {()=>{submit()}}>SIGN UP</button> */}
                            {/* </Link> */}
                                {/* <Route path="/sign-in" element={<Login/>} /> */}
                        {/* </Router> */}
                        {/* <button class = "btn mt-4 btn-light btn-lg rounded-pill" type="submit" onClick={()=>{nav(1)}}>SIGN UP</button>
                        <p>Already a user??</p> */}
                        <button class = "btn mt-4 btn-light btn-lg rounded-pill" type="submit" onClick={()=>{nav(2)}}>SIGN IN</button>
                        <p> &copy; COPYRIGHT 2022 WHIP AFRICA MUSIC</p>
                    </div>
            </div>
            <Switch n={page}/>
        </div>
      ) 
}

const Switch=({n})=>{
    if (n == 2){
        return (
            <div><Login/></div>
        )
    }
    return null;
} 
export default Footer;
import React, {useState} from "react";
import Login from "./LoginComponent";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate();

    const logIn = () => {
        navigate("/login");
    }

    return(
        <div class = "container">
            <div class = "row">
            <div class = "col-md-3"></div>
            <div class = "col-md-6">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? 
                    <br></br>
                    <span><button class = "btn mt-4 btn-primary btn-lg rounded-pill" type="submit" onClick={logIn}>SIGN IN</button></span>
                </p>
            </form>
            </div>
            <div class= "col-md-3"></div>
            </div>
        </div>
    )
}
export default Signup;

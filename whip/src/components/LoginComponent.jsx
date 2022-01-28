import React ,{useState} from "react";
import Signup from "./SignupComponent";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    const signUp = () => {
        navigate("/signup");
    }
    return(
        <div class = "container">
        <div class = "row">
        <div class = "col-md-3"></div>
        <div class = "col-md-6">
           <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p>
                    Already a member?
                
                </p>
                <span>
                <button class = "btn mt-4 btn-primary btn-lg rounded-pill" type="submit" onClick={signUp}>SIGN UP</button>
                </span>
            </form>
            </div>x
            <div class = "col-md-3"></div>
        </div>
        </div>
    );
};


export default Login;
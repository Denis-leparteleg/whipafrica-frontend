import React, {useState} from "react";
import Login from "./LoginComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup(){
    const navigate = useNavigate();

    const logIn = () => {
        navigate("/login");}


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

        const axios = require('axios');

        async function handleSubmit(e) {
        e.preventDefault();

        let payload = { username, password};

        let res = await axios.post('http://127.0.0.1:8000/api/register/', payload);

        let data = res.data;
        console.log(data);
        }

        handleSubmit();
// if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

    return(
        <div class = "container">
            <div class = "row">
            <div class = "col-md-3"></div>
            <div class = "col-md-6">
            <form  >
                <h3>Sign Up</h3>

                {/* <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div> */}

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={username}  onChange={({ target }) => setUsername(target.value)} className="form-control" placeholder="Enter your username" />
                </div>

                {/* <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div> */}

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={({ target }) => setPassword(target.value)}  className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign Up</button>
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

import React, {useState} from "react";
import Login from "./LoginComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer1 from "./FooterComponent1";
import Header1 from "./HeaderComponent1";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';

function Signup(){
    const navigate = useNavigate();

    const logIn = () => {
        navigate("/login");}


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [errors, setError] = useState({});
    const [user, setUser] = useState()
    const [modalShow, setModalShow] = React.useState(false);
    const [nameErr, setNameErr] = useState({});


        const axios = require('axios');

        async function handleSubmit(e) {
        e.preventDefault();

        const isValid = formValidation();

        let payload = { email,name, password};

        axios.post('http://127.0.0.1:8000/api/register/', payload)
        .then(function (response) {
            let data = response.data;
            console.log(data);

            if (data){
                logIn();
            }
          })
        .catch(function (error) {
        if (error.response) {
            setError(error.response.data)
        }});
        handleSubmit();
       };


        const formValidation = () => {
            const nameErr = {};
            let isValid = true;

            if(name.trim().length < 2){
               nameErr.nameShort = "name is short"; 
               isValid = false;
            }
            if(name.trim().length > 10){
                nameErr.nameLong = "name is too Long"; 
                isValid = false;
             }
             setNameErr(nameErr);
             return isValid;
        }
// if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

    return(
        <div>
            {/* <div class = "row container"> */}
            {/* <div class = "col-md-4"></div> */}
            {/* <div class = "col-md-6"> */}
            <form  >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name}  onChange={({ target }) => setName(target.value)} className="form-control" placeholder="Enter your name" />
                    {
                        Object.keys(errors).map((key)=>
                        <div style={{color:'red'}}>{errors[key]}</div>
                        )
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email}  onChange={({ target }) => setEmail(target.value)} className="form-control" placeholder="Enter your email" />
                    {
                        Object.keys(errors).map((key)=>
                        <div style={{color:'red'}}>{errors[key]}</div>
                        )
                    }
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={({ target }) => setPassword(target.value)}  className="form-control" placeholder="Create a password" />
                </div>
                <br></br>

                <button type="submit" className="btn btn-primary btn-sm btn-block D-block rounded-pill" onClick={handleSubmit}>SIGN UP</button>
                
                <br></br>

                <p className="forgot-password text-right">
                    {/* Already registered? <a href= "#" onClick={() => setModalShow(true)}>Login</a> */}
                    Already registered? <Link to="/login">Login</Link>
                    {/* <span><button class = "btn mt-4 btn-primary btn-lg rounded-pill" type="submit" onClick={logIn}>SIGN IN</button></span> */}
                </p>
            </form>
            {/* </div> */}
            {/* <div class= "col-md-2"></div> */}
            {/* </div> */}
            {/* <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    /> */}
        </div>
    )
}
export default Signup;

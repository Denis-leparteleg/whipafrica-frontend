import React, {useState} from "react";
import Login from "./LoginComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer1 from "./FooterComponent1";
import Header1 from "./HeaderComponent1";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <Login/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Signup(){
    const navigate = useNavigate();

    const logIn = () => {
        navigate("/login");}


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState({});
    const [user, setUser] = useState()
    const [modalShow, setModalShow] = React.useState(false);

    const [usernameErr, setUsernameErr] = useState({});


        const axios = require('axios');

        async function handleSubmit(e) {
        e.preventDefault();

        const isValid = formValidation();

        let payload = { username, password};

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
       };

        handleSubmit();

        const formValidation = () => {
            const usernameErr = {};
            let isValid = true;

            if(username.trim().length < 5){
               usernameErr.usernameShort = "Username is short"; 
               isValid = false;
            }
            if(username.trim().length > 10){
                usernameErr.usernameLong = "Username is too Long"; 
                isValid = false;
             }
             setUsernameErr(usernameErr);
             return isValid;
        }
// if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

    return(
        <div>
            {/* <Header1/> */}
            <div class = "row container">
            <div class = "col-md-4"></div>
            <div class = "col-md-6">
            <form  >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={username}  onChange={({ target }) => setUsername(target.value)} className="form-control" placeholder="Enter your username" />
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

                <button type="submit" className="btn btn-primary btn-block btn-lg rounded-pill" onClick={handleSubmit}>SIGN UP</button>
                <br></br>

                <p className="forgot-password text-right">

                    Already registered? <a href= "#" onClick={() => setModalShow(true)}>Login</a>
                    {/* <Link to="/login">Login</Link> */}
                    {/* <span><button class = "btn mt-4 btn-primary btn-lg rounded-pill" type="submit" onClick={logIn}>SIGN IN</button></span> */}

                </p>
            </form>
            </div>
            <div class= "col-md-2"></div>
            </div>
            <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
            {/* <Footer1/> */}
        </div>
    )
}
export default Signup;

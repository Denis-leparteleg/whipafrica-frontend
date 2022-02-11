import React ,{useState} from "react";
import Signup from "./SignupComponent";
import { useNavigate } from "react-router-dom";
import Footer1 from "./FooterComponent1";
import Header1 from "./HeaderComponent1";
import { Link } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";

function Login(){
    const navigate = useNavigate();
    const artistlist = ()=>{
        navigate("/artistlist")
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState({});
    const [user, setUser] = useState()

    // const [NameErr, setNameErr] = useState({});


    const axios = require('axios');

    async function handleSubmit(e) {
        e.preventDefault();

        // const isValid = formValidation();

        let payload = { email, password};

        axios.post('https://whipmusicafrica-backend.herokuapp.com/api/login/', payload)

        .then(function (response) {
            let data = response.data;
            console.log(data);

            if (data){
                artistlist()
            }
          })
        .catch(function (error) {
        if (error.response) {
            setError(error.response.data)
        }});
            
    }

    var a = new Array();
    var up1 = new Object();
    up1={
        email:email,
        password:password
       };
    a.push(up1);
    localStorage.setItem('all_users',JSON.stringify(a));

    handleSubmit();
    // const formValidation = () => {
    //     const NameErr = {};
    //     let isValid = true;

    //     if(username != username){
    //         usernameErr.usernameNotEqual = "Username does not exists"; 
    //         isValid = false;
    //      }

    //     setUsernameErr(usernameErr);
    //     return isValid;
    // }

    return(
        <div>
            {/* <Header1/> */}
        {/* <div class = "row container"> */}
        {/* <div class = "col-md-3"></div> */}
        {/* <div class = "col-md-6"> */}
           <form>
                <h3>Sign In</h3>

                {/* <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div> */}

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email}  onChange={({ target }) => setEmail(target.value)} className="form-control" placeholder="Enter your email" id= "uemail" />
                    {
                        Object.keys(errors).map((key)=>
                        <div style={{color:'red'}}>{errors[key]}</div>
                        )
                    }
                    {/* {Object.keys(usernameErr).map((key)=>{
                        return <div style={{color:'red'}}>{usernameErr[key]}</div>
                    })} */}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={({ target }) => setPassword(target.value)}  className="form-control" placeholder="Enter password" id = "psw" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-sm rounded-pill">SIGN IN</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p>
                    Not a member? <Link to="/signup">Signup</Link>
                </p>
            </form>
            {/* </div> */}
            <div class = "col-md-3"></div>
        {/* </div> */}
        {/* <Footer1></Footer1> */}
        </div>
    );
};


export default Login;
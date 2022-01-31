import React ,{useState} from "react";
import Signup from "./SignupComponent";
import { useNavigate } from "react-router-dom";
import Footer1 from "./FooterComponent1";
import Header1 from "./HeaderComponent1";
import { Link } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";

function Login(){
    const navigate = useNavigate();

    const dashboard = () => {
        navigate("/dashboard");
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    const axios = require('axios');

async function handleSubmit(e) {
    e.preventDefault();

  let payload = { username, password};

  let res = await axios.post('http://127.0.0.1:8000/api/login/', payload);

    let data = res.data;
    console.log(data);

    if (data){
        dashboard()
    }
}

handleSubmit();

    return(
        <div>
            {/* <Header1/> */}
        <div class = "row container">
        <div class = "col-md-3"></div>
        <div class = "col-md-6">
           <form>
                <h3>Sign In</h3>

                {/* <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div> */}

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={username}  onChange={({ target }) => setUsername(target.value)} className="form-control" placeholder="Enter your username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={({ target }) => setPassword(target.value)}  className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg rounded-pill">SIGN IN</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p>
                    Already a member? <Link to="/signup">Signup</Link>
                </p>
            </form>
            </div>
            <div class = "col-md-3"></div>
        </div>
        {/* <Footer1></Footer1> */}
        </div>
    );
};


export default Login;
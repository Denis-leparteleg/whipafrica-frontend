import React from "react";

function Signup(){
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
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
            <div class= "col-md-3"></div>
            </div>
        </div>
    )
}

export default Signup;

// import React, { useContext } from "react";
// import {
//   BoldLink,
//   BoxContainer,
//   FormContainer,
//   Input,
//   MutedLink,
//   SubmitButton,
// } from "./common";
// import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";
// ​
// export function Signup(props) {
//   const { switchToSignin } = useContext(AccountContext);
// ​
//   return (
//     <BoxContainer>
//       <FormContainer>
//         <Input type="text" placeholder="Full Name" />
//         <Input type="email" placeholder="Email" />
//         <Input type="password" placeholder="Password" />
//         <Input type="password" placeholder="Confirm Password" />
//       </FormContainer>
//       <Marginer direction="vertical" margin={10} />
//       <SubmitButton type="submit">Signup</SubmitButton>
//       <Marginer direction="vertical" margin="1em" />
//       <MutedLink href="#">
//         Already have an account?
//         <BoldLink href="#" onClick={switchToSignin}>
//           Signin
//         </BoldLink>
//       </MutedLink>
//     </BoxContainer>
//   );
// }
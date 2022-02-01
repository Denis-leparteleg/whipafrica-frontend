import React, {useState} from 'react';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import { useNavigate } from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    // const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div className="modal-body">
            <div className="modal-wrapper">
            <div className="left-modal">
            </div>
            <div className="right-modal">
              { props.isSignup ? <Signup /> : <Login/> }  
            </div>
            </div>  
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

const Footer = ()=>{
    const navigate = useNavigate();

    const signUp = () => {
        navigate("/signup");
    }
    const [modalShow, setModalShow] = React.useState(false);
    // const [isSignup, setisSignup] = React.useState(true);

    

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
                        <Button className="btn mt-4 btn-light btn-lg rounded-pill" type="submit" variant="primary" onClick={() => setModalShow(true)} >SIGN UP
                         </Button>
                        {/* <button class = "btn mt-4 btn-light btn-lg rounded-pill" type="submit" onClick={signUp} >SIGN UP</button> */}
                        <p> &copy; COPYRIGHT 2022 WHIP AFRICA MUSIC</p>
                    </div>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      isSignup={true}
                    //   isSignup={() => setisSignup(true)}
                    />
            </div>
        </div>
      ) 
}

 
export default Footer;
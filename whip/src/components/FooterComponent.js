import React from 'react';
// import bien from '../images/bien.jpeg';


function Footer(){
      return(
          <div>
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
            <div class = "row">
                    <div class = "col-md-12 text-center">
                        <p>Are you a - <span>Manager</span>- <span>Music label</span> - <span>Agent</span> - <span>Promoter</span> or an <span>Artist</span>?</p>
                        <p><span>DISCOVER. </span> <span>ACCESS. </span> <span>EVALUATE DATA. </span></p>
                        <button class="btn mt-4 btn-light btn-lg rounded-pill" type="submit" >SIGN UP</button>
                        <p> &copy; COPYRIGHT 2022 WHIP AFRICA MUSIC</p>
                    </div>
            </div>
        </div>
      ) 
}
export default Footer;
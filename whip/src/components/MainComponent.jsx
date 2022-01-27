import React from 'react'
import bensoul from "../assets/bensoul.jpeg";
import nviiri from "../assets/nviiri.jpeg";
import wahu from "../assets/wahu.jpeg";
import art3 from "../assets/art3.jpeg";
import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpeg";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Login from './LoginComponent';
import Signup from './SignupComponent';



const MainComponent = () => {

  return (
      <div>
      <Header/>
         <div className='cont-wrapper'>
           <div className='cont'>
              <span className='art'>Evaluate Any <b>ARTISTS</b> Potential using <b>WHIP DATA.</b><br/>
                Discover breaking through <b>MUSICIANS</b> across <b>AFRICA</b>.
              </span>
              <div className='left-cont'>
                <img className='img-1' src={art1}/>
                <img className='img-2' src={wahu}/>
                <img className='img-3' src={nviiri}/>
                <img className='img-4' src={art2}/>
                <img className='img-5' src={art3}/>
              </div> 
              <div className='soul'>
                      <p>Bensoul<span className='p-tag'>Plays:8,788,789</span></p>
                      <h4>
                        <span className='dot-line'>--------------------------------------------------------------</span>
                      <br/>
                      <b className='disc'>Discover, Explore top music & Artists from
                      your<br /> favourite Musician today. Track Streams, 
                      social<br /><span className='media'> media charts and Playlist Data.</span></b>
                  </h4>
              </div>
            <button className='btn btn-1 btn-sm'><strong className='search'>Search Artist</strong></button>  
            </div>
            <div className='img-wrapper'>
              <img className='img-cont' src={bensoul}/>
            </div>
         </div>
         

         <Footer/>
         {/* <Login/>
         <Signup/> */}
    </div>
    
  )
}

export default MainComponent
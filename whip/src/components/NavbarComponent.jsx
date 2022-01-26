import React, { Component } from 'react';
import './../index.css';
import  whip from '../assets/singin.jpeg';

class Dashnav extends React.Component {
    render() { 
        return( 
            <div class="row" id="dash">
                <div class="col">
                    <h4>Fresh Talent <span>Dashboard</span></h4>
                
                    <p>whipafrica.com freshtalent</p>
                    
                </div>
                <div class="col"></div>
                <div class="col">
                <button  class="fresh">Fresh Talent List</button>
                </div>
                <img class="singin" src={whip} width="45" height="40" alt=""/>

                <p>Esian Arafat</p>
                

            </div>
        );
    }
}
 
export default Dashnav;
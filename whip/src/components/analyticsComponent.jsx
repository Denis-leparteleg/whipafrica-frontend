import React, { Component } from 'react';
import './../index.css';

class Analytics extends React.Component {
    render() { 
        return (
            <div id="analytics">

                <div class="row mb-3">
                    <div class="col-xl-2 col-sm-6 py-2">
                        <div class="card text-white h-100">
                            <div class="card-body">
                                <div class="rotate">
                                    <i class="fa fa-user fa-4x"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-6 py-2">
                        <div class="card  text-white h-100">
                            <div class="card-body ">
                                <div class="rotate">
                                    <i class="fa fa-user fa-4x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-6 py-2">
                        <div class="card text-white  h-100">
                            <div class="card-body">
                                <div class="rotate">
                                    <i class="fa fa-list fa-4x"></i>
                                </div>
                                <p class="text-uppercase">Average Stream Per month</p>
                                <p class="display-4">3.4M</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-6 py-2">
                        <div class="card text-white  h-100">
                            <div class="card-body btn-dark">
                                <div class="rotate">
                                    <i class="fa fa-twitter fa-4x"></i>
                                </div>
                                <h6 class="text-uppercase">Stream Growth Rate</h6>
                                <h1 class="display-4">31.8</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-sm-6 py-2">
                        <div class="card text-white  h-100">
                            <div class="card-body">
                                <div class="rotate">
                                    <i class="fa fa-share fa-4x"></i>
                                </div>
                                <h6 class="text-uppercase">Social Media Following</h6>
                                <h6 class="display-4">12.5</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Analytics;
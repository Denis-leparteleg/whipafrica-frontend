import React from "react";

const DashboardContent = ()=>{
    return(
        <div>
            <div class = "row">
                <div class = "col-md-5 top-right">
                    <p>Fresh Talent <span>Dashboard</span></p>
                    <p>whipafrica.com/freshtalent</p>
                </div>
                <div class = "col-md-2"></div>
                <div class = "col-md-5 top-left">
                    <div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg rounded-pill">Fresh Talent List</button>
                    </div>
                    <div class = "top-left-left">
                         <div><img src="../images/bensoul.jpeg" class="card-img-top" alt="..." height = "40px" width="40px"></img></div>
                         <div>
                         <p>Easin Arafat <i class="fa fa-fw fa-chevron-down"></i></p>
                         <p>A$R Scout</p>
                         </div>
                    </div>
                </div>
            </div>
            <div class="row">
        <div class="col-md-2 offset-md-1">
        <div class="card">
            <img src="../images/bensoul.jpeg" class="card-img-top" alt="..." height = "250px"></img>
        </div>
        </div>
        <div class="col-md-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>
        <div class="col-md-2 ">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
};

export default DashboardContent;
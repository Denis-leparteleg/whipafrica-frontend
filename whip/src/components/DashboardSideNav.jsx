import React from "react";
import DashboardContent from "./DashboardContent";


const DashboardSideNav= ()=>{
    return(
        <div>
            <div class = "dashboardside">
            {/* The sidebar  */}
            <div class="sidebar">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="../images/logo2.jpeg" width="45" height="40" alt=""/><br></br>
                    <span>whip.</span>
                </a>
                <a class="active" href="#home"><i class="fa fa-fw fa-home"></i> Metrics</a>
                <a href="#news">Music</a>
                <a href="#contact">Demographics</a>
            </div>

            {/* Page content */}
            <div class="content">
                <DashboardContent/>
            </div>
            </div>
        </div>
    )
};

export default DashboardSideNav;
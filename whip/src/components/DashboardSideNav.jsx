import React from "react";
import DashboardContent from "./DashboardContent";


const DashboardSideNav= ()=>{
    return(
        <div>
            <div class = "dashboardside">
            {/* The sidebar  */}
            <div class="sidebar">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="../images/logo2.jpeg" height = "50px" width = "50px" alt=""/><br></br>
                    <span>whip.</span>
                </a>
                <a class="active" href="#home"><i class="fa fa-fw fa-home"></i> Fresh talent</a>
                <a href="#news">FAQs</a>
                <a href="#contact">Settings</a>
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
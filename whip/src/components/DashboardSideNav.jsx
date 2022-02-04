import React from "react";
import DashboardContent from "./DashboardContent";
import { useNavigate } from 'react-router-dom';


const DashboardSideNav= ()=>{
    const navigate = useNavigate();

    const home = () => {
        navigate("/");}

    return(
        <div>
            <div class = "dashboardside">
            {/* The sidebar  */}
            <div class="sidebar">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="../images/logo2.jpeg" height = "50px" width = "50px" alt=""/><br></br>
                    <h3>whip.</h3>
                </a>
                <a class="active" href="#home"><i class="fa fa-fw fa-home"></i> Fresh talent</a>
                <a href="#news"> <i class="fa fa-fw fa-cogs"></i>FAQs</a>
                <a href="#contact"><i class="fa fa-fw fa-cog"></i>Settings</a>
                <button type="button" onClick={home} className="btn btn-primary btn-sm rounded-pill">Log out</button>
                
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
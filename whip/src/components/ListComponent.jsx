import React from "react";

const ListComponent = ()=>{
    return(
        <div>
            <h3 className="upcoming"><b>Leading Upcoming Artists in Bongo</b></h3>
                <div className="list-cont text-center">
                    <h3 className="pt-5"><b>1</b></h3>
                    <img src="../images/bensoul.jpeg" alt="..." height = "120px" width="140px"/>
                    <h3><b>Bensoul</b></h3>
                    <h3><b>34K</b><br/><br/>
                    <span className="span-list">Average Streams per month</span></h3>
                    <h3 className=""><b>61%</b><br/><br/>
                    <span className="span-list">Streams Growth Rate</span></h3>
                    <h3><b>46K</b><br/><br/>
                    <span className="span-list">Social Media Following</span></h3>
                    <a href="#">Artist Deep Dive</a>
                </div>
                <hr />
                <div className="list-cont text-center">
                    <h3 className="pt-5"><b>2</b></h3>
                    <img src="../images/wahu.jpeg" alt="..." height = "120px" width="140px"/>
                    <h3><b>Wahu</b></h3>
                    <h3><b>18K</b><br/><br/>
                    <span className="span-list">Average Streams per month</span></h3>
                    <h3 className=""><b>46%</b><br/><br/>
                    <span className="span-list">Streams Growth Rate</span></h3>
                    <h3><b>12.3K</b><br/><br/>
                    <span className="span-list">Social Media Following</span></h3>
                    <a href="#">Artist Deep Dive</a>
                </div>
                <hr />
        </div>
    )
};

export default ListComponent;
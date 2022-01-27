import React from 'react';
import './../index.css';

class Sidenav extends React.Component {
    render() { 
        return( 
            <div class="hip">
                <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation">
                    <h4 class="whip">Whip.</h4>
                    <ul class="nav flex-column sticky-top pl-0 pt-5 mt-3">
                        <li class="nav-item"><i class="fa fa-windows" aria-hidden="true"></i><a class="nav-link" href="#">Fresh Talent</a></li>
                        <li class="nav-item"><i class="fa fa-tint" aria-hidden="true"></i><a class="nav-link" href="#">FAQs</a></li>
                        <li class="nav-item"><i class="fa fa-cogs" aria-hidden="true"></i><a class="nav-link" href="#">Settings</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Sidenav;
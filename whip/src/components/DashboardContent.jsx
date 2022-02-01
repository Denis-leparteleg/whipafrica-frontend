import React, {useState, useEffect } from "react";
import axios from "axios";

const DashboardContent = ()=>{
    const [artists, setArtist] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    useEffect(() => {
        handleSubmit();
      }, []);

    var axios = require("axios").default;

    async function handleSubmit(e) {
    e.preventDefault();

    var options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: searchTerm, locale: 'en-US', offset: '0', limit: '5'},
        headers: {
        }
        };
    axios.request(options).then(function (response) {
        console.log(response);
        console.log(response.data.artists.hits);
        setArtist(response?.data?.artists?.hits);

    }).catch( (error) =>{
        console.log(error)
        console.error(error.response.data);
    });
    axios(options);
    handleSubmit();      
    } 
    
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

                    {/* <div class="search-container">
                        <form method="get">
                            <label for="song"></label>
                            <input type="text" name="keyword" id="keyword" placeholder="   Search for a song or artist"/>

                            <button class="btn btn-primary search-btn" type="submit"><span>Search for spotify id </span></button>
                        </form>

                    </div> */}

                    <div class="search-container">
                        <form method="get">
                            <label for="song"></label>
                            <input type="text" value={searchTerm}  onChange={({ target }) => setSearchTerm(target.value)} className="form-control" placeholder="Search for a song or artist" />
                            <button class="btn btn-primary search-btn" type="submit" onClick={handleSubmit}><span>Search for artist</span></button>

                        </form>

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
    {artists.map((artist) => (
            <div key={artist.id} className='card'>
                <img src={artist.artist.avatar} alt='' />
            </div>
            ))}

        </div>
    )

}

export default DashboardContent;
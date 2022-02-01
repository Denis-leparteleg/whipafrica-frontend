import React, {useState, useEffect } from "react";
import axios from "axios";

const DashboardContent = ()=>{
    const [artists, setArtist] = useState([]);
    const [tracks, setTracks] = useState([]);
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
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key': '5627f8a25bmshea5cb0a9f785954p10c77djsndd9e06d038b6'
        }
        };
    axios.request(options).then(function (response) {
        // console.log(response);
        console.log(response.data);
        // console.log(response.data.artists.hits);
        console.log(response.data.tracks.hits);
        setArtist(response?.data?.artists?.hits);
        setTracks(response?.data?.tracks?.hits);



    }).catch( (error) =>{
        console.log(error)
        console.error(error.response.data);
    });
    axios(options);
    handleSubmit();      
    } 

    // var options2 = {
    //     method: 'GET',
    //     url: 'https://shazam.p.rapidapi.com/charts/track',
    //     params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
    //     headers: {
    //       'x-rapidapi-host': 'shazam.p.rapidapi.com',
    //       'x-rapidapi-key': '5627f8a25bmshea5cb0a9f785954p10c77djsndd9e06d038b6'
    //     }
    //   };
      
    //   axios.request(options2).then(function (response) {
    //     console.log(response);
    //       console.log(response.data);
    //   }).catch(function (error) {
    //       console.error(error);
    //   });
    
    return(
        <div>
            <div class = "row">
                <div class = "col-md-4 top-right">
                    <p>Fresh Talent <span>Dashboard</span></p>
                    <p>whipafrica.com/freshtalent</p>
                </div>
                {/* <div class = "col-md-2"></div> */}
                <div class = "col-md-8 top-left">
                    {/* <div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg rounded-pill">Fresh Talent List</button>
                    </div> */}

                    <div className="search-container">
                        <form method="get" className="d-flex justify-content-between p-2">
                            <label for="song"></label>
                            <input type="text" value={searchTerm}  onChange={({ target }) => setSearchTerm(target.value)} className="form-control" placeholder="Search for an artist" />
                            <button className="btn btn-primary search-btn mx-1" type="submit" onClick={handleSubmit}><span>SEARCH</span></button>
                        </form>
                    </div>

                    <div class = "top-left-left">
                         <div>
                             {/* <img src="../images/bensoul.jpeg" class="card-img-top" alt="..." height = "40px" width="40px"></img> */}
                             {artists.map((artist) => (
                                <div key={artist.id} className='card cd-img'>
                                    <img src={artist.artist.avatar} alt="..." height = "60px" width="60px"/>
                                </div>

                                ))}
                             </div>
                         
                         <div>
                         <p>{artists.map((artist) => (
                                <div key={artist.id}>
                                    <p>{artist.artist.name}</p>
                                </div>

                                ))}
                             {/* <i class="fa fa-fw fa-chevron-down"></i> */}
                             </p>
                         {/* <p>A$R Scout</p> */}
                         </div>
                    </div>
                </div>
            </div>
            <div class="row">
        <div class="col-md-2 offset-md-1">
        <div class="card">
            {/* <img src="../images/bensoul.jpeg" class="card-img-top" alt="..." height = "250px"></img> */}
            {artists.map((artist) => (
            <div key={artist.id} className='card cd-img'>
                <img src={artist.artist.avatar} className="card-img-top" alt="..." height = "250px" />
            </div>
            ))}

        </div>
        </div>
        {/* <div class="col-md-2">
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
        </div> */}
    </div>
                <ul>
                {tracks.map((track) => (
                    <li key={track.id} className='card cd-img'>
                        <h1>{track.track.title} </h1>
                        <h1>{track.track.url} </h1>
                    </li>
                    ))} 
                </ul>

                {/* <ul>
                {tracks.map((track) => (
                    <li key={track.id} className='card cd-img'>
                        <h1>{track.track.title} </h1>
                    </li>
                    ))} 
                </ul> */}
                
                {/* {tracks.map((track) => (
                    <div key={track.id} className='card cd-img'>
                        <h1>{track.track.title} </h1>
                    </div>

                    ))} */}

        </div>
    )

}

export default DashboardContent;
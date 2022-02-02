import React, {useState, useEffect } from "react";
import axios from "axios";

const DashboardContent = ()=>{
    const [artists, setArtist] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const [songstats, setSongstats] = useState([]);

    useEffect(() => {
        console.log(songstats)
      }, [songstats]);

      useEffect(()=>{
        handleSubmit();
      })

    async function handleSubmit(e) {
    e.preventDefault();

    const fetchData = async () => {
    let res = await axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/stats/",
    });
    setSongstats(objectArray(res.data))
    };
    
    fetchData(); 
    handleSubmit();   
    };
     function objectArray(docs){
         let arr = []
         docs.forEach((doc)=>{
            arr.push(JSON.parse(doc));
            // console.log(JSON.parse(doc));
            console.log(typeof doc)
         })
       return arr  
     }
    return(
        <div>
            <div class = "row">
                <div class = "col-md-4 top-right">
                    <h3>Fresh Talent <span>Dashboard</span></h3>
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
                            <button className="btn btn-primary search-btn mx-1" onClick={handleSubmit} type="submit"><span>SEARCH</span></button>
                        </form>
                    </div>

                    <div class = "top-left-left">
                         <div>
                             <img src="../images/bensoul.jpeg" class="card-img-top" alt="..." height = "40px" width="40px"></img>
                             {/* {artists.map((artist) => (
                                <div key={artist.id} className='card cd-img'>
                                    <img src={artist.artist.avatar} alt="..." height = "60px" width="60px"/>
                                </div>

                                ))} */}
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
            <div className="row col-row text-center">
        <div class="col-md-1">
        <div class="card">
            <img src="../images/bensoul.jpeg" class="card-img-top" alt="..." height = "200px" width = "40px"></img>
            {/* {artists.map((artist) => (
            <div key={artist.id} className='card cd-img'>
                <img src={artist.artist.avatar} className="card-img-top" alt="..." height = "250px" />
            </div>
            ))} */}

        </div>
        </div>
        <div className="col-md-2">
            <div className="">
                <div className="card-body">
                    <h3 className="card-title text-center">AFIA</h3>
                    <p className="text-center">Genre: R&B<br/>
                    <span>Location:Abuja</span></p>
                    <div className="text-center">
                    <button className="rounded-pill btn-sm">Contact Artist</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div class="card btn-r">
                <div class="card-body">
                    <div className="text-center">
                    <button className="p-3 btn-r"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></button>
                    </div>
                    <p class="card-title card-center">Average Streams Per Month<br/>
                    <span className="text-span">3.4M</span></p>
                </div>
            </div>
        </div>
        <div class="col-md-3 ">
            <div class="card btn-r">
                <div class="card-body">
                <div className="text-center">
                <button  className="p-3 btn-r"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></button>
                </div>
                <p class="card-title card-center">Streams Growth Rate<br/>
                    <span className="text-span">31.58</span></p>
                </div>
            </div>
        </div>
        <div class="col-md-3 ">
            <div class="card btn-r">
                <div class="card-body">
                <div className="text-center">
                <button className="p-3 btn-r"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></button>
                </div>
                <p class="card-title card-center">Social Media Following<br/>
                    <span className="text-span">12.9</span></p>
                </div>
            </div>
        </div>
    </div>
    <div className="grid-container">
        <div className="grid-item item1 p-5">
            <h5>Streams over the last 1 year</h5>
            <img src="../images/chart2.png" class="card-img-top" alt="..."></img>
        </div>
        <div className="grid-item item2">
        <img src="../images/chart1.jpeg" class="card-img-top" alt="..."></img>
        </div>
        <div className="grid-item item3">
        <div class="w3-container">
  
  <table class="w3-table w3-bordered w3-centered">
    <tr>
      <th>Other Key Stats</th>
      <th>Current</th>
      <th>Last Month</th>
      <th>Average Growth Rate (6 months)</th>
    </tr>
    <tr>
      <td>Most popular song</td>
      <td>6</td>
      <td>135k</td>
      <td>1.87%</td>
    </tr>
    <tr>
      <td>Most popular YouTube video</td>
      <td>1</td>
      <td>33k</td>
      <td>7.35%</td>
    </tr>
    <tr>
      <td>Followers on leading social network</td>
      <td>1</td>
      <td>74k</td>
      <td>16.44%</td>
    </tr>
    <tr>
      <td>Engagement Rate</td>
      <td>1</td>
      <td>74k</td>
      <td>16.44%</td>
    </tr>
    <br></br>
  </table>
</div>
        </div>
        <div className="grid-item item4 p-3">
            <h4 className="prob">Probability of Profitability ...</h4>
        </div>
    </div>
                {/* <ul>
                {tracks.map((track) => (
                    <li key={track.id} className='card card-wr cd-img mb-2'>
                        <img src={track.track.images.background} className="card-img-top" alt="..." height = "250px" />
                        <h4>{track.track.title} <a><span className="text-primary">{track.track.url}</span></a></h4>
                    </li>
                    ))} 
                </ul> */}

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
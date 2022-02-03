import React, {useState, useEffect } from "react";
import axios from "axios";

const DashboardContent = ()=>{
    const [artists, setArtist] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    const [songstats, setSongstats] = useState([]);

    useEffect(() => {
        console.log(songstats)
      }, [songstats]);

   

    async function handleSubmit() {
        await fetchData();
    }
    const fetchData = async () => {
        let res = await axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/stats/",
        });
        var stats = res.data.toString()
        var statsElement = stats.split('source')
        console.log(statsElement)


        // var statsArr = stats.split(':')
        // console.log('Start')
        // console.log(stats)
        // console.log('Start')
        // console.log(statsArr)
        // console.log('Start')
        // console.log(statsElement)
        // console.log('End')
        // setSongstats(objectArray(res.data))
        // console.log(res.data)
        // console.log(typeof res.data)
        }; 

    function objectArray(docs){
        let arr = []
        docs.forEach((doc)=>{
            // console.log('Start')
            // console.log(doc)
            // console.log('End')
        //    console.log(JSON.parse(doc))
           // console.log(JSON.parse(doc));
        //    console.log(typeof doc)
        })
      return arr
    };
    let arr = [
        '{"result":"success","message":"Data Retrieved.","stats":[{"',
        '":"spotify","data":{"streams_total":2505441223,"mo…ities_total":39,"charted_countries_total":69}},{"',
        '":"apple_music","data":{"playlists_curr,ent":513,"cks_total":57,"ch,arted_countries_total":115}},{"',
        '":"amazon","data":{"playlists_current":198,"playli…d_tracks_current":4,"charted_tracks_total":7}},{"',
        '":"deezer","data":{"followers_total":186705,"playl…_tracks_current":3,"charted_tracks_total":30}},{"',
        '":"youtube","data":{"video_views_total":430458951,…_tracks_current":1,,"charted_tracks_total":3}},{"',
        '":"tiktok","data":{"videos_total":7225215,"views_t…tal":240249,"creator_reach_total":2943739502}},{"',
        '":"shazam","d,ata":{"shazams_total":35010946,"char…ies_total":1368,"charted_countries_total":55}},{"',
        '":"tracklist","data":{"total_support_total":6729,"…_tracks_current":0,"charted_tracks_total":24}},{"',
        '":"beatport","data":,{"dj_charts_total":745,"chart…:7,"overall_top_100_charted_tracks_total":12}},{"',
        ',":"trax',
        '","data":{"dj_charts_total":27,"charted_tracks_tot…:5,"overall_top_100_charted_tracks_,total":2}},{"',
        '":"itunes","data":{"charts_current":26,"charts_tot…acks_total":,52,"charted_countries_total":94}},{"',
        '":"tidal","data":{"playlists_current":25,"playlist…d_tracks_current":0,"charted_tracks_total":4}},{"',
        '":"soundcloud","data":{"streams_total":59736210,"f…"https://songstats.com/artist/vxk62ige/meduza"},"',
        '_ids":"all"}',
      ];
      
      const getCleanArr = () => {
        let Arr = [];
        for (let i = 1; i < arr.length; i++) {
        //   console.log(getSourceName(arr[i]));
          Arr.push({
            name: getSourceName(arr[i]),
            data: getObject(arr[i]),
          });
        }
      
        //console.log(Arr);
        return Arr;
      };
      
      const getSourceName = (str) => {
        let newStr = "";
        for (let i = 2; i < str.length; i++) {
          if (str[i] != '"' && str[i] != ":") {
            newStr = newStr + str[i];
          }
          if (i > 0 && str[i] == ",") {
            return newStr.slice(0, -1);
          }
        }
      
        return newStr;
      };
      
      const getObject = (str) => {
        let foundOpenBracket = false;
        let foundCloseBracket = false;
        let newStr = "";
      
        for (let i = 0; i < str.length; i++) {
          if (foundCloseBracket) {
            break;
          }
          if (str[i] == "{") {
            foundOpenBracket = true;
          }
          if (foundOpenBracket) {
            newStr = newStr + str[i];
          }
          if (str[i] == "}") {
            foundCloseBracket = true;
          }
        }
        try {
          if (newStr == "") return false;
          return JSON.parse(newStr);
        } catch (e) {
          return false;
        }
      };
      
    //   getObject(
    //     '":"spotify","data":{"streams_total":2505441223,"mo…ities_total":39,"charted_countries_total":69}},{"'
    //   );
      
      getCleanArr();
      console.log(getCleanArr())
      console.log("This is another array")
      
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

                    {/* <div className="search-container">
                        <form method="get" className="d-flex justify-content-between p-2">
                            <label for="song"></label>
                            <input type="text" value={searchTerm}  onChange={({ target }) => setSearchTerm(target.value)} className="form-control" placeholder="Search for an artist" />
                            <button className="btn btn-primary search-btn mx-1" onClick={()=>handleSubmit()} type="submit"><span>SEARCH</span></button>
                        </form>
                    </div> */}
                    <div className="d-flex justify-content-between p-2">
                            <label for="song"></label>
                            <input type="text" value={searchTerm}  onChange={({ target }) => setSearchTerm(target.value)} className="form-control" placeholder="Search for an artist" />
                            <button className="btn btn-primary search-btn mx-1" onClick={()=>handleSubmit()} type="submit"><span>SEARCH</span></button>
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
                    <h4 className="card-title text-center">BENSOUL</h4>
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
        <div className="grid-item item4 px-5 py-4">
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
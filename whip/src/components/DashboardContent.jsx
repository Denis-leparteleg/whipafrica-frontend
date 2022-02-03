import React, {useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./Chart";
import DoughnutChart from "./Charts/DoughnutChart";

const DashboardContent = ()=>{
    const [artists, setArtist] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    const [songstats, setSongstats] = useState([]);
    const [testcases, settestcases] = useState([]);

    useEffect(() => {
        // console.log(songstats)
      }, [songstats]);

    //   useEffect(() => {
    //     console.log(testcases)
    //   }, [testcases]);

    async function handleSubmit() {
        await fetchData();
    }

    const getObject = (str) => {
      let foundOpenBracket = false;
      let foundCloseBracket = false;
      let newStr = "";
    
      for (let i = 0; i < str?.length; i++) {
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

    const getCleanArr = (arr) => {
      let Arr = [];
      for (let i = 1; i < arr.length; i++) {
        console.log(getSourceName(arr[i]));
        Arr.push({
          name: getSourceName(arr[i]),
          data: getObject(arr[i]),
        });
      }
    
      //console.log(Arr);
      settestcases(Arr);
      return Arr;
    }
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
    const fetchData = async () => {
        let res = await axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/stats/",
        });
        var stats = res.data.toString()
        var statsElement = stats.split('source')
        console.log(statsElement)

       let arr = statsElement;
       console.log(arr)
       getCleanArr(arr);

      // useEffect(() => {
      //   settestcases(getCleanArr());
      //   alert('working')
      // }, [])
      // getObject(
      //   '":"spotify","data":{"streams_total":2505441223,"mo…ities_total":39,"charted_countries_total":69}},{"'
      // );
        }; 
  
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
                    <p class="card-title card-center">Total Streams Per Month<br/>
                    <span className="text-span"> <h3>{testcases.find(val => val.name == 'spotify')?.data.streams_total}</h3></span></p>
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
                    <span className="text-span"><h3>{testcases.find(val => val.name == 'amazon')?.data.playlists_current}</h3></span></p>
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
                    <span className="text-span"><h3>{testcases.find(val => val.name == 'tiktok')?.data.videos_total}</h3></span></p>
                </div>
            </div>
        </div>
    </div>
    <div className="grid-container">
        <div className="grid-item item1 p-5">
            <h5>Streams over the last 1 year</h5>
            {/* <img src="../images/chart2.png" class="card-img-top" alt="..."></img> */}
            <BarChart/>
        </div>
        <div className="grid-item item2">
        {/* <img src="../images/chart1.jpeg" class="card-img-top" alt="..."></img> */}
        <DoughnutChart/>
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

            
            {/* <div className='card'>
                <h1>{testcases[0]?.data.streams_total}</h1>
            </div> */}

        </div>
    )

}

export default DashboardContent;
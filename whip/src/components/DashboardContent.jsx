import React, {useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Chart as ChartJS, ArcElement,BarElement,CategoryScale,LinearScale,Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import BarChart from "./Chart";
import DoughnutChart from "./Charts/DoughnutChart";
import ArtistData from "./ArtistData";

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
)


const DashboardContent = ()=>{
    const [artists, setArtist] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    const [songstats, setSongstats] = useState([]);
    const [testcases, settestcases] = useState([]);

    const navigate = useNavigate();
    const value = useContext(ArtistData);
    console.log(value)
    useEffect(() => {
      if(value.artistName === "" || value.artisName === null ){
        navigate("/artistlist")
      }
     },[value.artistName]);

    const data = {
      labels: [
        'TikTok',
        'YouTube',
        'Spotify'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [
          testcases.find(val => val.name == 'apple_music')?.data.playlists_current, 
          testcases.find(val => val.name == 'apple_music')?.data.playlists_total, 
          testcases.find(val => val.name == 'apple_music')?.data.charts_total
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
  };

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
            url: "https://whipmusicafrica-backend.herokuapp.com/api/stats/",
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
        <div class = "dashboardcontent">
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
                  <form className="d-flex justify-content-between p-2">
                      <label for="song"></label>
                      <input type="text" value={searchTerm}  onChange={({ target }) => setSearchTerm(target.value)} className="form-control" placeholder="Search for an artist" />
                      <button className="btn btn-primary search-btn mx-1" onClick={()=>handleSubmit()} type="submit"><span>SEARCH</span></button>
                  </form>
              </div> */}
              <div className="d-flex justify-content-between p-2">
                      <label for="song"></label>
                      <input type="text" value={searchTerm}  onChange={({ target }) => setSearchTerm(target.value)} className="form-control search-artist" placeholder="Search for an artist" />
                      <button className="btn btn-primary btn-sm" onClick={()=>handleSubmit()} type="submit"><span>SEARCH</span></button>
              </div>

              <div class = "top-left-left">
                   <div>
                       <img src={value.theArtist.image} class="card-img-top" alt="..." height = "40px" width="40px"></img>
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
      <img src={value.theArtist.image} class="card-img-top" alt="..." height = "160px" width = "150px"></img>
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
      <h5 className="text-white">Streams over the last 1 year</h5>
      {/* <img src="../images/chart2.png" class="card-img-top" alt="..."></img> */}
      <BarChart/>
  </div>
  <div className="grid-item pt-5 text-light item2">
  {/* <img src="../images/chart1.jpeg" class="card-img-top" alt="..."></img> */}
  <DoughnutChart/>
  {/* <Doughnut data={data}/> */}
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
      
  </div>  
    )

}


export default DashboardContent;
import React, {useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ArtistList = ()=>{
  const [testcases, settestcases] = useState([]);
  useEffect(() => {
    fetchData();
  }, [testcases.length]);
 
const fetchData = async () => {
  let res = await axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/popular/",
  });
  // console.log('Start')
  // console.log(res.data.stats)
  // console.log('end')

  var stats = JSON.parse(res.data)
  console.log(stats)
  
  let artisits = []
  stats.forEach(el => {
    let artist = el.fields
    console.log(artist.stats)
    artist.stats = JSON.parse(artist.stats.replaceAll("'", '"').replaceAll('None', '""'))
    artisits.push(artist)
  })
  console.log(artisits)
  settestcases(artisits)
  };

  function sortArray(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }
  
  console.log(sortArray([testcases]));

    return (
        <div>
          <h3 className="upcoming"><b>Leading Upcoming Artists in Bongo</b></h3>
              {testcases.map(testcase => (
                <div>
                  <div className="list-cont text-center">
                      <h3 className="pt-5"><b></b></h3>
                      <img src={testcase.image} alt="..." height = "120px" width="140px"/>
                      <h3><b>{testcase.name}</b></h3>

                      <h3><b>{testcase.stats.find(val => val.source == 'spotify')?.data.streams_total}</b><br/><br/>

                      <span className="span-list">Average Streams per month</span></h3>
                      {/* <h3 className=""><b>61%</b><br/><br/>
                      <span className="span-list">Streams Growth Rate</span></h3> */}
                      <h3><b>{testcase.stats.find(val => val.source == 'spotify')?.data.followers_total}</b><br/><br/>
                      <span className="span-list">Social Media Following</span></h3>
                      <Link to="/dashboard">Artist Deep Dive</Link>
                  </div>
                  <hr />
                  </div>
              ))}   
        </div>
    )

    
};
export default ArtistList;
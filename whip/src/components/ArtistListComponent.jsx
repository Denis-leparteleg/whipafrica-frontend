import React, {useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dropdown,DropdownButton } from "react-bootstrap";

const ArtistList = ()=>{
  const [testcases, settestcases] = useState([]);
  const [sortBy, setSortBy] = useState('spotify');
  const [newArtists, setNewArtists] = useState([]);

  useEffect(() => {
    fetchData();
  }, [testcases.length]);
 
const fetchData = async () => {
  let res = await axios({
      method: "GET",
      url: "https://whipmusicafrica-backend.herokuapp.com/api/popular/",
  });

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
  settestcases(cleanTestCase(artisits))
  // setNewArtists(cleanTestCase(artisits))
  };

  function cleanTestCase(docs) {
    let ar = [];

    docs.forEach((doc) => {
      console.log(doc);

      if (Array.isArray(doc.stats)) {
        if (doc.stats[0] != "data") {
          ar.push(doc);
          console.log(doc);
        }
      }
    });
    return ar;
  }


  useEffect(() =>  {
    let cases = []
    if(sortBy === "spotify"){
     cases = testcases.sort((b,a) => {
     let x = a.stats.find((el) => el.source == 'spotify').data.streams_total - b.stats.find((el) => el.source == 'spotify').data.streams_total 
    //  console.log(b,a)
    //  console.log(x)
     return x
    })
    }
    else if(sortBy === "youtube"){
     cases = testcases.sort((b,a) => a.stats.find((el) => el.source == 'youtube').data.video_views_total - b.stats.find((el) => el.source == 'youtube').data.video_views_total )
    }else if(sortBy === "tiktok"){
      cases = testcases.sort((b,a) => a.stats.find((el) => el.source == 'tiktok').data.views_total - b.stats.find((el) => el.source == 'tiktok').data.views_total )
    }
    cases = cases.map((el, i) => ({...el, position: i}))
    settestcases(cases);
  }, [sortBy])

    return (
        <div>
          <div className="drop-btn">
          <DropdownButton id="dropdown-item-button" title="Filter by">
            <Dropdown.ItemText></Dropdown.ItemText>
            <Dropdown.Item as="button" onClick={() => setSortBy('youtube')}>YouTube Streams</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setSortBy('tiktok')}>TikTok Streams</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setSortBy('spotify')}>Spotify Streams</Dropdown.Item>
          </DropdownButton>
          </div>
          
          <h3 className="upcoming"><b>Leading Upcoming Artists</b></h3>
          {console.log(testcases)}
              {testcases.map(testcase => (
                <div>
                  <div className="list-cont text-center">
                      <h3 className="pt-5"><b></b></h3>
                      <img src={testcase.image} alt="..." height = "120px" width="140px"/>
                      <h3><b>{testcase.name}</b></h3>
                      {/* {console.log(testcase.stats[0].data)}
                      {console.log(typeof testcase.stats[0])} */}
                      
                      <h3><b>{testcase?.stats?.find(val => val.source == 'spotify')?.data.streams_total}</b><br/><br/>
                      <span className="span-list">Total Streams</span></h3>
                      <h3><b>{testcase.stats.find(val => val.source == 'spotify')?.data.followers_total}</b><br/><br/>
                      <span className="span-list">Social Media Following</span></h3>
                      <span className="link-list pointer">Artist Deep Dive</span>
                  </div>
                  <hr />
                  </div>
              ))}   
        </div>
    )    
};
export default ArtistList;
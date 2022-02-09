import React, {useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ArtistList = ()=>{
    const [artistList, setArtistList]=([]);
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
      
        // console.log(Arr);
        setArtistList(Arr);
        return Arr;
      }
      function objectArray(docs){
        let arr = []
        docs.forEach((doc)=>{
        })
      return arr
    };
    const fetchArtist = async () => {
        let res = await axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/popular/",
        });
        var stats = res.data.toString()
        // var statsElement = stats.split('source')
        // console.log(statsElement)
        console.log(stats)

    //    let arr = statsElement;
    let arr = stats
       console.log(arr)
       getCleanArr(arr);}
    fetchArtist()
    return (
        <div>
            <h1>This is the artist list component</h1>
        </div>
    )
};
export default ArtistList;
import React, {useState, useEffect} from "react";
import { BarChart } from "./Chart"


const DashboardChart = ()=>{
    const data = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: [55, 23, 96],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
              ],
              borderWidth: 1,
            }
        ]
    }

    useEffect(() => {
        const fetchPrices = async () => {
          const res = await fetch("")
          const data = await res.json()
          console.log(data)
          setChartData({
            labels: data.data.map((crypto) => crypto.name),
            datasets: [
              {
                label: "Price in USD",
                data: data.data.map((crypto) => crypto.priceUsd),
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ]
              }
            ]
          });
        };
        fetchPrices()
      }, []);

    const [chartData, setChartData] = useState({})

    return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
    )
}

export default DashboardChart;
import React from 'react'
import { Chart as ChartJS, BarElement,CategoryScale,LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

const BarChart = () => {
  var data = {
    labels: ['YouTube', 'TikTok', 'Spotify', 'Shazam', 'Amazon', 'AppleMusic'],
    datasets: [{
        label: 'Total Streams',
        data: [2587653, 1853648, 2914873, 2783019, 1367208, 371345],
        backgroundColor: [
            'rgba(255, 99, 132, 1.0)',
            'rgba(54, 162, 235, 1.0)',
            'rgba(255, 206, 86, 1.0)',
            'rgba(75, 192, 192, 1.0)',
            'rgba(153, 102, 255, 1.0)',
            'rgba(255, 159, 64, 1.0)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
    }]
}
var options = {
  maintainAspectRatio: false,
  scales: {
      y: {
          beginAtZero: true
      }
  },
  legend:{
    labels:{
      fontSize:26
    }
  }
}
  return (
    <div>
      <Bar 
        data={data}
        height={400}
        options={options}
      />
    </div>
  )
}

export default BarChart
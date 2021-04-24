import React from 'react';
import { Bar } from 'react-chartjs-2';

function Data({ poke }) {

  const data = {
    labels: poke.stats.map((stats) => stats.stat.name),
    datasets: [
      {
        label: 'Status',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgb(11,227,210)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,0,54,0.4)',
        hoverBorderColor: 'rgb(0,88,101)',
        indexAxis: 'x',
        data: poke.stats.map((stats) => stats.base_stat)
      }
    ]
  }
  return (
    <div className='horizontal-chart'>
      <Bar
        data={data}
      />
    </div>
  )
}

export default Data;
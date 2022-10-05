
import React from 'react'

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

  const GraduationYearChart =({labels,dataSet})=>{
    const data={
        labels,
        datasets: [
          {
            id: 1,
            label: 'BNB',
            data:dataSet,
            backgroundColor: 'yellow',
          },
        ],
      }
    return(
        <div className='graduation-chart'>
            <Chart type='line' data={data} style={{padding:12,width:400, height:200, backgroundColor:'#888' ,color:'#111'}}/>
        </div>
    )
}


export default GraduationYearChart
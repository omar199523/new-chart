/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react'
import GraduationYearChart from "../GraduationYearChart"
import './style.css'
const chart = ({data}) => {
    console.log(data)
    const [isShow,setIsShow] = useState(false)

    const [chartData,setChartData] = useState({
      labels:{},
      title:"",
      address:"",
      dataSet:{}
    })

    useEffect(()=>{
      let labels = [],
          dataSet = [];
      data.sort((a,b)=>(new Date(a.date.date).getDay())-(new Date(b.date.date).getDay())).slice(labels.length-20).map(item=>{
        labels.push(new Date(item.date.date).getDay());
        dataSet.push(item.buyAmount)
      })
      setChartData ({labels:labels,dataSet:dataSet,title:data[0].buyCurrency.symbol,address:""})
    })
  return (
    
    <div className="list" onMouseEnter={()=> {setIsShow(true)}} onMouseLeave ={()=> {setIsShow(false)}}>
        <div className='title'>
          <h2 className='tilte-name'>{chartData.title}</h2>
          <h2 className='tilte-address'>address</h2>
        </div>
        {isShow && <div className="chart-con">
           <GraduationYearChart dataSet={chartData.dataSet} labels={chartData.labels}/>
        </div>}
    </div>
  )
}

export default chart
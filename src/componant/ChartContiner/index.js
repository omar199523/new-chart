/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react'
import TokenChart from "../TokenChart";
import './style.css'
const ChartContiner = ({tokenData}) => {
    const [isShow,setIsShow] = useState(false)
    const [chartData,setChartData] = useState([]);

    useEffect(()=>{

      tokenData.axiosData.then((res)=>{
        setChartData(res)
      })
    },[])
  return (
    <>
      {(chartData.length !== 0)?(<div className="list" onMouseEnter={()=> {setIsShow(true)}} onMouseLeave ={()=> {setIsShow(false)}} key={tokenData.key} >
        <div className='title'>
          <h2 className='tilte-name'>{tokenData.title + "/ USD"}</h2>
          <h2 className='tilte-address'>{tokenData.address}</h2>
        </div>
        {isShow && <div className="chart-con">
           <TokenChart chartData = {chartData}/>
        </div>}
      </div>):null}
    </>
  )
}

export default ChartContiner

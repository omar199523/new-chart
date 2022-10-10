/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react'
import TokenChart from "../TokenChart";
import { v4 as uuidv4 } from 'uuid';
import './style.css'
const ChartContiner = ({tokenData}) => {
    const [isShow,setIsShow] = useState(false)
    const [chartData,setChartData] = useState();
    const [title,setTitle] =useState('');
    const [address,setAddress] = useState('')
    useEffect(()=>{
      setAddress(tokenData.address);
      setTitle(tokenData.title)
      tokenData.axiosData.then((res)=>{
        setChartData(res)
      })
    },[])
  return (
    <div className="list" onMouseEnter={()=> {setIsShow(true)}} onMouseLeave ={()=> {setIsShow(false)}} >
        <div className='title'>
          <h2 className='tilte-name'>{title + "/ USD"}</h2>
          <h2 className='tilte-address'>{address}</h2>
        </div>
        {isShow && <div className="chart-con">
           <TokenChart chartData = {chartData}/>
        </div>}
    </div>
  )
}

export default ChartContiner

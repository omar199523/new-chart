/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react'
import GraduationYearChart from "../GraduationYearChart"
import axios from 'axios'
import './style.css'
const chart = ({config}) => {
    const [isShow,setIsShow] = useState(false)
    const [tokenData,setTokenData] = useState({})
    useEffect(()=>{
        axios(config)
        .then((response)=>{
          const dexTrades = response.data.data.ethereum.dexTrades;
          console.log(dexTrades)
          let labels =[],
              dataSet =[];
          dexTrades.forEach((filItem)=>{
            labels.push(new Date(filItem.timeInterval.minute).getMinutes());
            dataSet.push(filItem.quoteAmount) 
          })
          setTokenData({labels,dataSet,title:dexTrades[0].baseCurrency.name})
        })
        .catch((error)=>{
          console.log(error);
        })
      
  },[])
  return (
    <div className="list" onMouseEnter={()=> {setIsShow(true)}} onMouseLeave ={()=> {setIsShow(false)}}>
        <div className='title'>
          <h2 className='tilte-name'>{tokenData.title + "/ USD"}</h2>
          <h2 className='tilte-address'>address</h2>
        </div>
        {isShow && <div className="chart-con">
           <GraduationYearChart labels ={tokenData.labels} dataSet ={tokenData.dataSet} title={tokenData.title}/>
        </div>}
    </div>
  )
}

export default chart
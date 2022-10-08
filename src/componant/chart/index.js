/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react'
import TokenChart from "../TokenChart";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './style.css'
const chart = ({config,key}) => {
    const [isShow,setIsShow] = useState(false)
    const [isRender,setIsRender] = useState(false)
    const [tokenData,setTokenData] = useState({})
    const [Key,setKey] = useState("") 
    const converNumber = (num)=>{
      const result = Number(num)
      return (result)
    }
    useEffect(()=>{
        axios(config.config)
        .then((response)=>{
          const dexTrades = response.data.data.ethereum.dexTrades;
          const address = dexTrades[0].baseCurrency.address
          const result = dexTrades.map((item)=>{
            return {
              date: new Date(item.timeInterval.minute),
              open: +converNumber(item.open),
              high:+converNumber(item.high),
              low: +converNumber(item.low),
              close: +converNumber(item.close),
              volume: 594858493,
            }
          })
          setTokenData({address,data:result})
          if(result.length < 5){
            setIsRender(true)
          }
        })
        .catch((error)=>{
          console.log(error);
        })

  },[])
  return (
    <>
    {(isRender)?( <div className="list" onMouseEnter={()=> {setIsShow(true)}} onMouseLeave ={()=> {setIsShow(false)}} key={key}>
        <div className='title'>
          <h2 className='tilte-name'>{config.title + "/ USD"}</h2>
          <h2 className='tilte-address'>{tokenData.address}</h2>
        </div>
        {isShow && <div className="chart-con">
           <TokenChart data = {tokenData.data} key = {tokenData.address}/>
        </div>}
    </div>):null}
  </>
  )
}

export default chart
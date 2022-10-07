/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react'
import GraduationYearChart from "../GraduationYearChart"
import './style.css'
const chart = ({data}) => {
    const [isShow,setIsShow] = useState(false)
  return (
    <div className="list" onMouseEnter={()=> {setIsShow(true)}} onMouseLeave ={()=> {setIsShow(false)}}>
        <div className='title'>
          <h2 className='tilte-name'>{data.title+ "/ USD"}</h2>
          <h2 className='tilte-address'>address</h2>
        </div>
        {isShow && <div className="chart-con">
           <GraduationYearChart labels ={data.labels} dataSet ={data.dataSet}/>
        </div>}
    </div>
  )
}

export default chart
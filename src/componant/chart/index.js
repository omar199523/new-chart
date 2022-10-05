import React from 'react'
import {useState} from 'react'
import GraduationYearChart from "../GraduationYearChart"
import './style.css'
const chart = ({data}) => {
  const {title,address,dataSet,labels} =data
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShow,setIsShow] = useState(false)
    console.log(data)
  return (
    
    <div className="list" onMouseEnter={()=> {setIsShow(true)}} onMouseLeave ={()=> {setIsShow(false)}}>
        <div className='title'>
          <h2 className='tilte-name'>{title}</h2>
          <h2 className='tilte-address'>address</h2>
        </div>
        {isShow && <div className="chart-con">
           <GraduationYearChart dataSet={dataSet} labels={labels}/>
        </div>}
    </div>
  )
}

export default chart
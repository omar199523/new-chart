import {useEffect, useState} from 'react'
import {query } from './getData'

import axios from 'axios';
import Chart from './componant/chart';
import './App.css'
function App() {
  const [tokenData,setTokenData] = useState([])
  useEffect(()=>{
   var config = {
      method: 'post',
      url: 'https://graphql.bitquery.io',
      headers: { 
         'Content-Type': 'application/json', 
         'X-API-KEY': 'BQYh5IhPL57WRiNvTavzEpHM3RKhX6VZ'
      },
      data : {query}
   };
   
   axios(config)
   .then(function (response) {
    const dexTrades = response.data.data.ethereum.dexTrades
    let labels = [],
        dataSet = [];
    dexTrades.forEach((filItem)=>{
      labels.push(new Date(filItem.timeInterval.minute).getMinutes());
      dataSet.push(filItem.quoteAmount) 
      })

    setTokenData({labels,dataSet,title:dexTrades[0].baseCurrency.name})
   })
   .catch(function (error) {
      console.log(error);
   });
},[])
  return (
    <div className="App">
      <div className='token-list'>
        <div className='title'>
          <h2 className='tilte-name'>name/symdol</h2>
          <h2 className='tilte-address'>Address</h2>
        </div>
        <Chart data={tokenData}/> 
      </div>
    </div>
  );
}

export default App;

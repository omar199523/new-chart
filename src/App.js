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
    const token = []
    const result = response.data.data.ethereum.dexTrades
    result.map((item)=>{
    if(token.indexOf(item.buyCurrency.symbol)===-1){
      token.push(item.buyCurrency.symbol)
    }
    })
    let lastResult = token.map(item=>{
      return result.filter((tokenItem)=>{
        return tokenItem.buyCurrency.symbol === item
      })
    })
    console.log(!!(lastResult))
    setTokenData(lastResult)
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
        {(tokenData)?tokenData.map(item=>{return (<Chart data={item}/>)}):null}
      </div>
    </div>
  );
}

export default App;

import {useEffect, useState} from 'react'


import axios from 'axios';
import Chart from './componant/chart';
import './App.css'
function App() {
  const [data,setData] = useState({})
  useEffect(()=>{
    var data = JSON.stringify({
      "query": "query MyQuery {\n  ethereum(network: bsc) {\n    transactions(options: {asc: \"block.timestamp.time\"}) {\n      amount(date: {since: null, till: null})\n      sender(txSender: {in: \"0xF6dDc8aCAFdA5BB95271CB73CFDe3AB7f67d3c99\"}) {\n        address\n      }\n      gasValue\n      hash\n      currency {\n        symbol\n        address\n        name\n      }\n      index\n      to {\n        address\n        smartContract {\n          contractType\n          currency {\n            name\n            tokenType\n            symbol\n          }\n        }\n      }\n      block {\n        height\n        timestamp {\n          time\n        }\n      }\n    }\n  }\n}\n",
      "variables": "{}"
   });
   
   var config = { 
      method: 'post',
      url: 'https://graphql.bitquery.io',
      headers: { 
         'Content-Type': 'application/json', 
         'X-API-KEY': 'BQYh5IhPL57WRiNvTavzEpHM3RKhX6VZ'
      },
      data : data
   };
   
   axios(config)
   .then( (response)=>{
      let arr =response.data.data['ethereum']['transactions']
      const labels = [];
      const dataSet =[];
      const title = `${arr[0].currency['name']}/${arr[0].currency.symbol}`;
      const address = arr[0].sender.address;
      if(arr.lingth !==0){
          arr.slice(arr.length-25).map((item)=>{
              labels.push(new Date(item.block.timestamp.time).getHours());
              dataSet.push(item.amount)
          })
      }
      setData({labels,dataSet,title,address})
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
        <Chart data={data}/>
        
      </div>
    </div>
  );
}

export default App;

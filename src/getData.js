
export const query = `{
  ethereum(network: ethereum) {
  dexTrades(
  options: {asc: "timeInterval.minute" ,limit: 30}
  quoteCurrency: {in: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
  baseCurrency: {is: "0xA81483a8E5a917be1BFe56f4eBA8d146d8E65Ba0"}
  date: {after: "2021-04-28"}
  ) {
  timeInterval {
  minute(count: 1)
  }
  high: quotePrice(calculate: maximum)
  low: quotePrice(calculate: minimum)
  open: minimum(of: block, get: quote_price)
  close: maximum(of: block, get: quote_price)
  quoteAmount(in: USD)
  baseCurrency {
  name
  }
  quoteCurrency {
  name
  }
  exchange {
  fullName
  }
  }
  }
  }
`

   //   var data = JSON.stringify({
  //     "query": "query MyQuery {\n  ethereum(network: bsc) {\n    transactions(options: {asc: \"block.timestamp.time\"}) {\n      amount(date: {since: null, till: null})\n      sender(txSender: {in: \"0xF6dDc8aCAFdA5BB95271CB73CFDe3AB7f67d3c99\"}) {\n        address\n      }\n      gasValue\n      hash\n      currency {\n        symbol\n        address\n        name\n      }\n      index\n      to {\n        address\n        smartContract {\n          contractType\n          currency {\n            name\n            tokenType\n            symbol\n          }\n        }\n      }\n      block {\n        height\n        timestamp {\n          time\n        }\n      }\n    }\n  }\n}\n",
  //     "variables": "{}"
  //  });
   
  //  var config = { 
  //     method: 'post',
  //     url: 'https://graphql.bitquery.io',
  //     headers: { 
  //        'Content-Type': 'application/json', 
  //        'X-API-KEY': 'BQYh5IhPL57WRiNvTavzEpHM3RKhX6VZ'
  //     },
  //     data : data
  //  };
   
  //  axios(config)
  //  .then( (response)=>{
  //     let arr =response.data.data['ethereum']['transactions']
  //     const labels = [];
  //     const dataSet =[];
  //     const title = `${arr[0].currency['name']}/${arr[0].currency.symbol}`;
  //     const address = arr[0].sender.address;
  //     if(arr.lingth !==0){
  //         arr.slice(arr.length-25).map((item)=>{
  //             labels.push(new Date(item.block.timestamp.time).getHours());
  //             dataSet.push(item.amount)
  //         })
  //     }
  //     setData({labels,dataSet,title,address})
  //  })
  //  .catch(function (error) {
  //     console.log(error);
  //  });
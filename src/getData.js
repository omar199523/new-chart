export const query = `{
   ethereum(network: bsc) {
     dexTrades(
       options: {desc: ["block.height", "tradeIndex"], limit: 1000}
       exchangeName: {in: ["Pancake", "Pancake v2"]}
       baseCurrency: {is: "0x6679eB24F59dFe111864AEc72B443d1Da666B360"}
       quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
       date: {after: "2021-04-28"}
     ) {
       transaction {
         hash
       }
       tradeIndex
       smartContract {
         address {
           address
         }
         contractType
         currency {
           name
         }
       }
       tradeIndex
       date {
         date
       }
       block {
         height
       }
       buyAmount
       buyAmountInUsd: buyAmount(in: USD)
       buyCurrency {
         symbol
         address
       }
       sellAmount
       sellAmountInUsd: sellAmount(in: USD)
       sellCurrency {
         symbol
         address
       }
       sellAmountInUsd: sellAmount(in: USD)
       tradeAmount(in: USD)
       transaction {
         gasValue
         gasPrice
         gas
       }
     }
   }
 }`

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
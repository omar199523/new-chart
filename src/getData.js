import axios from "axios";
export const getData = ()=>{
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
        const dataset =[];
        if(arr.lingth !==0){
            arr.map((item)=>{
                labels.push(item.block.timestamp.time);
                dataset.push(item.amount)
            })
        }
     })
     .catch(function (error) {
        console.log(error);
     });

}


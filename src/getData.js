
import axios from 'axios';
export const adresss =["0xCcB79DfEcedc84a34a9f30A143c0d27011b0A2cD",
                      "0x2A1c8974755fCd0EeF4D5620a778977a59ab18D2", 
                      "0x0C88CaC187e52819DbB02AEEbE50bA8922ac4770", 
                      "0x82758144037e2EDfa76D583E72e1485cEBbd0A10", 
                      "0xaab55eAf4d93BEea58169cc2bc3a41DF5c217a8D", 
                      "0xaF55252aE996A4C2219dA5B0AD70E37143CFC9c4",
                      "0x81f3831f6bAE022D37e5ED3F4E99a8F7B2346c53", 
                      "0xe2726C708abDD358812d4e3ce68dCfbEbA435142",
                      "0x2a77af20165a8247543C3E801518d0B813E1f02b", 
                      "0x45153B8f9d79797Ab41fd8aD170226e3EA9D9318",
                      "0xc900A56ECF7bAa617bA2B6b6fAaE7fE6E6FF263C", 
                      "0x28390B1aFa57C0adce8433613c87275bBb5771eD", 
                      "0x84A17A0C3B37a67A7851B2c6326F93E0fE30046b", 
                      "0x8A32572dD40B475148B2b97C7e05559dBa763e94",
                      "0xa001e9C2b71Ae6bb9Fb1fa7DC10E07Cf017a9FAD", 
                      "0x361630DFDE54414D30f2E11103aF4053C554F948", 
                      "0xf6ce982195Ae5961B561bE43066ADFCE0169E966", 
                      "0xcD078955CB64f1C4F4E2465A7B411617b72ef470", 
                      "0x801B1279d61cBc14fb778eD64A84363E257FA6bc", 
                      "0x3BC8a017d38CfE09093fbfeA3D91ef3a2cfA347B", 
                      "0x1497047C6954DAaE96C7C9Ab032125386602A176", 
                      "0xb108f91A698D0A5dae851aBF1164579895af4290", 
                      "0x49fF8058e8DC176cAE01c672E4B2175858C4aa45"] 
export const querys = adresss.map(item=>{
  return `{
    ethereum(network: ethereum) {
    dexTrades(
    options: {asc: "timeInterval.minute" ,limit: 30}
    quoteCurrency: {in: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    baseCurrency: {is:"${item}"}
                        
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
})
export const configArr = querys.map((query)=>{
  return {
    method: 'post',
    url: 'https://graphql.bitquery.io',
    headers: { 
      'Content-Type': 'application/json', 
      'X-API-KEY': 'BQYh5IhPL57WRiNvTavzEpHM3RKhX6VZ'
    },
    data : {query}
  };
})

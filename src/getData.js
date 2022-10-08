
import axios from 'axios';
export const adresss =[
  {address:"0xCcB79DfEcedc84a34a9f30A143c0d27011b0A2cD",title:"Ingot"},
  {address:"0x2A1c8974755fCd0EeF4D5620a778977a59ab18D2",title:"PSE"},
  {address:"0x0C88CaC187e52819DbB02AEEbE50bA8922ac4770",title:"InfinityFinance"},
  {address:"0x82758144037e2EDfa76D583E72e1485cEBbd0A10",title:"APEGANGSTER"},
  {address:"0xaab55eAf4d93BEea58169cc2bc3a41DF5c217a8D",title:"JengaBlocks"},
  {address:"0xaF55252aE996A4C2219dA5B0AD70E37143CFC9c4",title:"RENGA"},
  {address:"0x81f3831f6bAE022D37e5ED3F4E99a8F7B2346c53",title:"PixelPOM"},
  {address:"0xe2726C708abDD358812d4e3ce68dCfbEbA435142",title:"Kasumi"},
  {address:"0x2a77af20165a8247543C3E801518d0B813E1f02b",title:"UNKNOWN"},
  {address:"0x45153B8f9d79797Ab41fd8aD170226e3EA9D9318",title:"Foudre"},
  {address:"0xc900A56ECF7bAa617bA2B6b6fAaE7fE6E6FF263C",title:"GENSAKU"},
  {address:"0x28390B1aFa57C0adce8433613c87275bBb5771eD",title:"UNKNOWN"},
  {address:"0x84A17A0C3B37a67A7851B2c6326F93E0fE30046b",title:"Century2052"},
  {address:"0x8A32572dD40B475148B2b97C7e05559dBa763e94",title:"ENFLP"},
  {address:"0xa001e9C2b71Ae6bb9Fb1fa7DC10E07Cf017a9FAD",title:"VladTheImpaler"},
  {address:"0x361630DFDE54414D30f2E11103aF4053C554F948",title:"PowerofMOON"},
  {address:"0xf6ce982195Ae5961B561bE43066ADFCE0169E966",title:"NoAliensSeenAnywhere"},
  {address:"0xcD078955CB64f1C4F4E2465A7B411617b72ef470",title:"ProofOfTAMA"},
  {address:"0x801B1279d61cBc14fb778eD64A84363E257FA6bc",title:"TheGrimreaper"},
  {address:"0x3BC8a017d38CfE09093fbfeA3D91ef3a2cfA347B",title:"KIMETSU"},
  {address:"0x1497047C6954DAaE96C7C9Ab032125386602A176",title:"ChokiInu"},
  {address:"0xb108f91A698D0A5dae851aBF1164579895af4290",title:"GoktamaInu"},
  {address:"0x49fF8058e8DC176cAE01c672E4B2175858C4aa45",title:"Danzayemon"},
  {address:"0x3B61359541c543C203C9a02A462d500C215c837d",title:"TheGoldenEgg"},
  {address:"0x870C3D49c21d3bA9d8A5728f0B51214e34B0FC39",title:"RoboApe"},
  {address:"0xE8e4Ce7Efb64e81b9133B9E4b56CE8585c23d065",title:"Kimetsu"},
  {address:"0xB98ED79Fc1F43c336DDf61F84d58650bacD97322",title:"Kimetsu鬼滅"},
  {address:"0xf4F6f42dc1467Cf618aeaB91a579158C052B5Ea8",title:"Droge"},
  {address:"0xb867B21FCedA57cE10867486A8e8f20555aAf507",title:"NFOtoken"},
  {address:"0x338fDE30df1B5A4D4e4b5c57621Ab86c3eE1533d",title:"Dazzle"},
  {address:"0x6AeE783743f69cEAe590324d2a38879e22eD80cd",title:"BRIANARMSTRONGCOIN"},
  {address:"0x611A3Cf94f385C791c867881a9d87C8EFaf199d1",title:"TheAlchemyOfSouls"},
  {address:"0xe990A301c6ab0b556DCE9B91446225058088B436",title:"NEXXO"},
  {address:"0xb0d0d6B54Db3B2b0F3Bb49965a0fE1571FF65A3c",title:"Kimetsu"},
  {address:"0xE58381ab765D3B45408c333D6A614014617A3c73",title:"Kimetsu"},
  {address:"0x1aC836D27D3896cE53e742F6BFabd5D4e54e9c7e",title:"Apeology"},
  {address:"0xC3a07dD57327017718dca8C6841443320A540FF4",title:"TITON"},
  {address:"0xa2f127D9A414DcFE82f4Ba276FA73524D43063Be",title:"TITON"},
  {address:"0xeDb95dE7DEb7fE3ed5Ba6767323368549D45AE58",title:"TITON"},
  {address:"0x7fefE36c7E727681c50E9bd025C1b603fF04428d",title:"Apeology"},
  {address:"0x714c3aCC751112674eb0F806e851d55DEb4bacc7",title:"SHIKAINU"},
  {address:"0x72d509745B8868842d97e711C410D72fc420E4CA",title:"ABabyHuntersDream"},
  {address:"0x294c8d59A3C932C6F4Eef5B9bCf6805b03EB49B7",title:"Elevate"},
  {address:"0xaD08622892253F9de012Cfe7197bA4324b492c3f",title:"AReasonForBeing"},
  {address:"0xc0dABF7B87fB46e9b8b665676C08Fe0bEfc3115d",title:"LifesEnergy"},
  {address:"0x777fFaA7EA9DECfCACa5C59973491300C6f5716F",title:"SHIKAINU"},
  {address:"0xCaA5c644375C40Cc0A6a62D8818342f3809321e7",title:"FlameScape"},
  {address:"0xfdcf0a6388e801E333519c2f03505BBe4dfF390E",title:"Bitcoin"},
  {address:"0xc2C189fE9f80793bACf2eCbb9e2fe9fD5572F708",title:"Ryoichi"},
  {address:"0xc8b8D5A6a68Cfe88a63Bb62d3Adfa85DBa000ac7",title:"Shibolog"}] 
export const querys = adresss.map(item=>{
  return {query:`{
    ethereum(network: ethereum) {
    dexTrades(
    options: {asc: "timeInterval.minute" ,limit: 30}
    quoteCurrency: {in: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    baseCurrency: {is:"${item.address}"}
                        
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
    address
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
  `,title:item.title
}
})
export const configArr = querys.map((queryItem)=>{
  const {query,title} = queryItem
  return {config:{
                  method: 'post',
                  url: 'https://graphql.bitquery.io',
                  headers: { 
                    'Content-Type': 'application/json', 
                    'X-API-KEY': 'BQYh5IhPL57WRiNvTavzEpHM3RKhX6VZ'
                  },
                  data : {query}
                },
              title:title
          };
})


import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
// export const adresss =[
// {address:"0xC4fE18E6A4E503DFFF111E23b3feD940135DA2A9",title:"YINYANGINU"},
// {address:"0xdbA39dDFA52A8Fdd074960e4e367223bdec22D45",title:"XEN10"},
// {address:"0x90B21A76fDd2b7549949beBaA147274ED120EEA0",title:"SimpsofMara"},
// {address:"0x480D2a292bC77D0922003a136e57f6FCe151E91F",title:"OXYMETATOKEN"},
// {address:"0x02E96148BA6Bd87d09Be088487B0b643d1270290",title:"TheTenome"},
// {address:"0x82B13F268C16bc9DeF609b05ad49eC12cF92438c",title:"Only500"},
// {address:"0x1b4492C297F97dCF0Db51a016E77133A540087e4",title:"TheOne"},
// {address:"0x6760B31fF80F597bf1319688a67601D910C3fB31",title:"ChadInu"},
// {address:"0x7195df99845855D4C3F8d0B040355a3E5FE2A58A",title:"TheNextSocialExperiment"},
// {address:"0xaDe64d54Af2bC1400F39f81067d7125CF6aFEb35",title:"UNLEASHEDDAO"},
// {address:"0x560de0DeC03a982e59e60eD2547311fA3Ad8Aa21",title:"DieWelle"},
// {address:"0x8dF2aD670d0F7863C414b13b28788ea02C43B0B8",title:"Oneiroi"},
// {address:"0xfDEe6567FB212d775124dF071291B4fd9a94AAeA",title:"ProofOfPresidency"},
// {address:"0xF6476c54b63b0075f5A7E33c13391B4843F6095b",title:"BABYXEN"},
// {address:"0x393D2C766280a70ffbd33ABF72b5b55b80687C7c",title:"VitaliksTimeMachine"},
// {address:"0x04a3A87c60c65abF51458398e1dFDDC9b05E1D1c",title:"Tenome"},
// {address:"0x3c4B8f529AdbCC86D5e2f9F6022d18A2C3d302a9",title:"BABYXEN"},
// {address:"0x40700FA6047B37B4ae7bce2382d4DeF79b3c1a35",title:"XENInu"},
// {address:"0x04c92d4Ff54e51536b08FC544e388dcD366FA532",title:"KYO"},
// {address:"0x50F796166B646d7cc58ff48D8E2C4cd808437f62",title:"NekotoxinNetwork"},
// {address:"0x6AF2bd132E689f34b2fBd2607589a0C8edf371be",title:"Raster"},
// {address:"0x53028e7f4c53eA34c15CD424600AB392b67ed22F",title:"ProofofStables"},
// {address:"0xAa212624e86D601f1CA5F4b138668918373a7245",title:"DinoDash"},
// {address:"0x840afA4bA7d8AA3a3219e501eE8D82f52ef56Bb6",title:"TheHills"},
// {address:"0x1658fA6589e74d28AA7A3F25470eD6E574c67cB9",title:"InflationToken"},
// {address:"0x097242a5CaD85F62B12830754f1062587E13C18a",title:"XENCrypto"},
// {address:"0x77a479D1bbdcb449b3E15C9820c272314f81504a",title:"asdf"},
// {address:"0x500D19754249b08Da601BBfeC18472Fbf1a0DC06",title:"BitcoinKaBaap"},
// {address:"0x4299c2a17d776F7fD2c0bAf0025A135ED30cf15C",title:"SaladCat"},
// {address:"0x8f92cDf43dea64Ff00c1e6E8Ff57f0565e339fC1",title:"BurntHairMusky"},
// {address:"0x957e5da5cd1155a4Ef0249721F18fE25Ff3D499a",title:"BNB20"},
// {address:"0x51eFA450d25E92680C44438e33dB429C72ac116D",title:"KitsuneMask"},
// {address:"0x4Bf4Ae5463F4325DbCA9F231938DA13e24eBff53",title:"XENCrypto"},
// {address:"0x5fe81137647Cab0ec5B34b19C42A70c76803D285",title:"BurntHair"},
// {address:"0xEEb4Cd21E16Ac42aDc691952EEc24d3B089fE484",title:"夏祭り"},
// {address:"0x4B4b16e13019D6DE7D0c7dD12Ac67089B21a5f08",title:"IronManSale"},
// {address:"0xdaC2Ae92cFd3f32a557F7974BCe63734912128da",title:"PigBelly"},
// {address:"0x0e90b59e6b1f28d89a647F3224e24Af44e824BAF",title:"UshiOni"},
// {address:"0x25AD4aF27611c323E90130203db5B461E09FCd54",title:"ExtraXen"},
// {address:"0x9E669e48531b4bAaADC2b7b9EDc1bFcC59721456",title:"ProtectorsofKaguya"},
// {address:"0xDb65a6b0F7145984758D93F0D0a881699D1920C9",title:"GodofMemes"},
// {address:"0x9e73Ea0C245c6eb89e8E4D531CA6e53E543d2d48",title:"NoPainNoGain"},
// {address:"0xaA8E417Cc5c4Eb8baE3e28d2c2A90510754BD93B",title:"Generation"}] 
// export const querys = adresss.map(item=>{
//   const {address,title} = item;
//   return {query:`{
//     ethereum(network: ethereum) {
//     dexTrades(
//     options: {asc: "timeInterval.minute" ,limit: 30}
//     quoteCurrency: {in: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
//     baseCurrency: {is:"${item.address}"}
                        
//     date: {after: "2021-04-28"}
//     ) {
//     timeInterval {
//     minute(count: 1)
//     }
//     high: quotePrice(calculate: maximum)
//     low: quotePrice(calculate: minimum)
//     open: minimum(of: block, get: quote_price)
//     close: maximum(of: block, get: quote_price)
//     quoteAmount(in: USD)
//     baseCurrency {
//     name
//     address
//     }
//     quoteCurrency {
//     name
//     }
//     exchange {
//     fullName
//     }
//     }
//     }
//     }
//   `,title,address
// }
// })
const adresssOne =[
{address:"0x164AEfd334D42206eEDAE43E5e9D5bc9F9b88771",title: "TABI"},
{address:"0x65752Ad72b330cd09B1Bd52Fa82CC38a04B68757",title: "ARABIANAPEGROW"},
{address:"0x864cD6460eB4bd8B83EdEaac01174fC5Ca092b64",title: "MOTIGAZILLA"},
{address:"0xd57aD7Dae1a12E4ef043c492aC8404F756B96a40",title: "SportFanToken"},
{address:"0xBdc69f2c4398c6d751824bac4E5083E1BF1E9e03",title: "CCVG"},
{address:"0x2AD489186488694ae259F868aB1Fa895e212Bd7f",title: "SMXToken"},
{address:"0xaa266cD78f34cEa694BAa4Cc8850773a0b5fd196",title: "TokenL"},
{address:"0x027a9d301FB747cd972CFB29A63f3BDA551DFc5c",title: "mWOM"},
{address:"0x020ca56F36f4c843593C4CD4CD5CA3b630c1ce38",title: "PaulWalkerFan"},
{address:"0xeFa1b69DD606224a1fe26A6c083A08C0dDe8ece9",title: "Halloqueen"},
{address:"0x068BeB67121B9fCcc6DD254F9bd6aFf680cF3b9f",title: "GenjiInu"},
{address:"0x4f9bAfC7c280841e3bB8443D7CD082f1741FF6f4",title: "BUXCOIN"},
{address:"0x25bCdFF4E25BDeCF04462430eEa02d3f0Ad6080c",title: "Test"},
{address:"0xC98E82e5d8963631bfF9A7b61F39a881AEEf9cC7",title: "babyinukobsc"},
{address:"0x0d34f4c3419dbEaBaB49dF3E9A2999F4931847E7",title: "TAMAINU"},
{address:"0x2eE5a73e55A2485627D01f49067709D47512e9A9",title: "SUPERSHIBAGROW"},
{address:"0x1A496A51220e712F6C4EDf94285A544Cd89cBE13",title: "VARGOXToken"},
{address:"0x685082FE6443070eBCd442fF3d4eD9E43a8701AD",title: "BabyRustix"},
{address:"0x4f27b14c29CA9F146D98405B6Ba6d6D6C32f944f",title: "Aderax"},
{address:"0xF8d5470ddA02fF14AeddFeF4C0E950c7F4296Dde",title: "XENLAEEB"},
]

export const querys = adresssOne.map(item=>{
  const {address,title} = item;
  return {query:`{
    ethereum(network: bsc) {
      dexTrades(
        options: {asc: "timeInterval.minute", limit: 100}
        baseCurrency: {is: "${item.address}"}
        quoteCurrency:{in:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      ) {
        timeInterval {
          minute(count: 1)
        }
        volume: quoteAmount(in: USD)
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
        baseCurrency {
          name
          address
        }
        quoteCurrency {
          name
          address
        }
        exchange {
          fullName
        }
      }
    }
  }   
  `,title,address
}
})


export const configArr = ()=>{
  
  const allData = querys.map((queryItem)=>{
  const {query,title,address} = queryItem
  const config =  {
          method: 'post',
          url: 'https://graphql.bitquery.io',
          headers: { 
            'Content-Type': 'application/json', 
            'X-API-KEY': 'BQYh5IhPL57WRiNvTavzEpHM3RKhX6VZ'
          },
          data : {query}
          };
  
  return {title,address,config,key:uuidv4()}
})
return allData
}




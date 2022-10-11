
import {useEffect, useState} from 'react'
import ChartContiner from './componant/ChartContiner'
import {configArr,alldata} from "./getData"
import './App.css'
function App() {
  const [tokenDatas,setTokenDatas] = useState([])
  useEffect(() => {
    setTokenDatas(configArr())
  }, [])
  console.log(tokenDatas)
  return(
    <div className="App">
      <div className='token-list'>
        <div className='title'>
          <h2 className='tilte-name'>name/symdol</h2>
          <h2 className='tilte-address'>Address</h2>
        </div>
        {tokenDatas.map(tokenData=><ChartContiner tokenData={tokenData} key={tokenData.key}/> )}
      </div>

    </div>
  );
}

export default App;

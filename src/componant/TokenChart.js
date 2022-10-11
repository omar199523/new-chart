
import { useState ,useEffect} from "react";
import axios from 'axios';
import Chart from "react-google-charts";


const converNumber = (num)=>{
  const result = Number(num)
  return (result)
}

const GoogleChart =({config})=> {
  const [data,setData] = useState([])
  useEffect(() => {
    axios(config)
      .then((response)=>{
        const dexTrades = response.data.data.ethereum.dexTrades;
        console.log(dexTrades)
          const data = dexTrades.map((dexItem)=>{
              return [`${new Date(dexItem.timeInterval.minute).getHours()}:${new Date(dexItem.timeInterval.minute).getMinutes()}`,
              converNumber(dexItem.open),
              converNumber(dexItem.open),
              converNumber(dexItem.close),
              converNumber(dexItem.close)
              ]
            })
            setData(data)
            console.log(data) 
      })
      .catch((error)=>{
        console.log(error);
      })
  }, [])
  
      return (
          <>
              {(data.length !== 0)?(<Chart
                width={190}
                height={230}
                chartType="CandlestickChart"
                data={[['day', 'a', 'b', 'c', 'd'],...data]}
                options={{
                  legend: 'none',
                  backgroundColor:'#1e293b',
                  bar: {groupWidth: '100%'},
                  hAxis:{textPosition:'none'},
                  vAxis:{textPosition:'none'},
                  candlestick: {
                    fallingColor: { strokeWidth: 0,  fill: '#EC3138' }, // red
                    risingColor: { strokeWidth: 0, fill: '#01A85B' },  // green
                  }
                  }}
                rootProps={{ 'data-testid': '1' }}
              />):null}       
          </>                  
      )
}
export default GoogleChart;

import Chart from "react-google-charts";

const GoogleChart =({chartData})=> {
      return (
          <>
              <Chart
                max-width={180}
                max-height={230}
                chartType="CandlestickChart"
                data={[['day', 'a', 'b', 'c', 'd'],...chartData]}
                options={{
                  legend: 'none',
                  backgroundColor:'#1e293b',
                  candlestick: {
                    fallingColor: { strokeWidth: 0, fill: '#EC3138' }, // red
                    risingColor: { strokeWidth: 0, fill: '#01A85B' }   // green
                  }
                  }}
                rootProps={{ 'data-testid': '1' }}
              />             
          </>                  
      )
}
export default GoogleChart;
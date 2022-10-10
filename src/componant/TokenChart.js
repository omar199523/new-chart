
import Chart from "react-google-charts";

const GoogleChart =({chartData})=> {
  console.log(chartData)
      return (
          <>
              <Chart
                max-width={180}
                max-height={230}
                chartType="CandlestickChart"
                loader={<div>Loading Chart</div>}
                data={[['day', 'a', 'b', 'c', 'd'],...chartData]}
                options={{
                  legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
              />             
          </>                  
      )
}
export default GoogleChart;
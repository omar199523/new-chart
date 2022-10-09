import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import moment from "moment";
import { CRYPTO_COMPARE } from "../keys";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

import {
  XYPlot,
  Hint,
  LineSeries,
  FlexibleXYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  AreaSeries
} from "react-vis";


const TokenChart = (data) => {
  const [tokenData, setTokenData] = useState({
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BTC",
    leaderboard: [],
    addressData: "",
    symbol: ""
  });
  useEffect(() => {
    async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${CRYPTO_COMPARE}&limit=30`
      );
      const data = await response.json();
      const bulkData = data.Data.Data;
      const dataArray = [];
      {
        bulkData.map((y) =>
          dataArray.push({
            x: y.time * 1000,
            y: y.transaction_count * y.average_transaction_value
          })
        );
      }
      this.setState({ chartData: dataArray });
      this.setState({ symbol: this.state.query });
    };
  }, []);
  return (
    <>
      {tokenData.query.length > 2 ? (
        <TradingViewEmbed
          widgetType={widgetType.ADVANCED_CHART}
          widgetConfig={{
            interval: "1D",
            colorTheme: "dark",
            width: "100%",
            symbol: tokenData.query + "USD",
            studies: [
              "MACD@tv-basicstudies",
              "StochasticRSI@tv-basicstudies",
              "TripleEMA@tv-basicstudies"
            ]
          }}
        />
      ) : (
        "BTCUSD"
      )}
    </>
  );
};
export default TokenChart;

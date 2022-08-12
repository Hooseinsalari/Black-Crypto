import React, { useEffect, useState } from "react";

// component
import Loading from "./shared/Loading";

// style
import styled from "styled-components";

// api
import axios from "axios";
import { historicalChart } from "../config/api";

// chart js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// style
const Chart = styled.div `
`

const ChartBtns = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
    background-color: ${({chartValue, days}) => chartValue === days ? 'gold' : 'transparent'};
    font-weight: ${({chartValue, days}) => chartValue === days ? '500' : '300'};
    padding: 0.5rem;
    border: 2px solid gold;
    margin: 2rem 1rem 0;
    font-size: 1.1rem;
    border-radius: 5px;
    width: 8rem;
    color: ${({chartValue, days}) => chartValue === days ? 'black' : 'gold'};
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: gold;
      color: #000;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      width: 6rem;
    }
    
    @media (max-width: 425px) {
      font-size: 0.9rem;
    }
`;

const CoinChart = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(historicalChart(coin.id, days));
      setHistoricData(data.prices);
    };

    fetchData();
  }, [days]);

  return (
    <Chart>
      {historicData ? (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in USD`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              responsive: true,
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />

          <ChartBtns>
            {chartDays.map((chart) => (
              <Button chartValue={chart.value} days={days} key={chart.value} onClick={() => setDays(chart.value)}>
                {chart.label}
              </Button>
            ))}
          </ChartBtns>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </Chart>
  );
};

export default CoinChart;

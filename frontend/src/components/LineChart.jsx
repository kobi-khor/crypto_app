import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
    coinPrice.push(coinHistory.data.history[i].price);
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    // <>
    //   <Row className="chart-header">
    //     <Typography.Title level={2} className="chart-Typography.Title">
    //       {coinName} Price Chart
    //     </Typography.Title>
    //     <Col className="chart-container">
    //       <Typography.Title level={5} className="chart-Typography.Title">
    //         {coinHistory?.data?.change}
    //       </Typography.Title>
    //       <Typography.Title level={5} className="chart-Typography.Title">
    //         Current {coinName} Price: $ {currentPrice}
    //       </Typography.Title>
    //     </Col>
    //   </Row>
    //   <Line data={data} options={options} />
    // </>
    <div class="flex items-center justify-center py-8 px-4">
      <div class="w-11/12 lg:w-2/3">
                <div className="flex flex-col justify-between h-full">
                  <div>
                       <div className="lg:flex w-full justify-between">
                          <h3 className=" leading-5 text-base md:text-xl font-bold">{coinName} Price Chart</h3>
                          <div className="price-container flex justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                                    <Typography.Title>Change: {coinHistory?.data?.change}</Typography.Title>
                                    <Typography.Title>
                                        Current {coinName} Price: $ {currentPrice}
                                    </Typography.Title>
                                    {/* <Title>New title</Title> */}
                          </div>
                       </div>
                  </div>
                  <div className="w-11/12">
                      <div className="mt-4 w-full">
                              <Line data={data} options={options} width={1025} height={400} />
                      </div>
                  </div>
                  
                </div>
      </div>
      
    </div>
    
  );
};

export default LineChart;
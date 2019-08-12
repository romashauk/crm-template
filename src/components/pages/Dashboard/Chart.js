import React from 'react';
import {Line} from 'react-chartjs-2';
import moment from 'moment';

const Chart = ({data}) => {
  const convertDateString = dateString => {
    if (dateString == null) {
      return '';
    }
    let dateObj = new Date((dateString + ' 00:00:00').replace(' ', 'T'));
    let momentObj = moment(dateObj);
    return momentObj.format('DD');
  };
  const buildLabelDate = dateString => {
    if (dateString == null) {
      return '';
    }
    let dateObj = new Date((dateString + ' 00:00:00').replace(' ', 'T'));
    let momentObj = moment(dateObj);
    return momentObj.format('MMM DD,YYYY');
  };

  const getMonth = index => {
    let dateObj = new Date(Object.keys(data)[index]);
    let momentObj = moment(dateObj);
    return momentObj.format('MMM');
  };

  const getValue = (item, index, ticks) => {
    const width = window.innerWidth;
    if (index === 0) {
      return getMonth(index);
    }
    if (width > 360 && width < 500) {
      if (index % 4 === 0 || index === 29) {
        if (item[0] === '0' && +ticks[index - 4][0] > +item[0]) {
          return getMonth(index);
        }
        return item;
      } else {
        return;
      }
    }
    if (width >= 360 && index % 2 === 0) {
      if (item[0] === '0' && +ticks[index - 2][0] > +item[0]) {
        return getMonth(index);
      }
      return item;
    }
    if (width < 360) {
      if (item[0] === '0' && +ticks[index - 2][0] > +item[0]) {
        return getMonth(index);
      }
      return item;
    }
  };
  const buildDataForChart = () => {
    const values = Object.values(data).map(item => item.toFixed());
    const keys = Object.keys(data);
    const dataSet = {
      labels: keys.map(item => convertDateString(item)),
      datasets: [
        {
          label: 'Price',
          fill: true,
          backgroundColor: 'transparent',
          borderColor: '#1a94c7',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 7,
          pointHoverRadius: 9,
          pointHoverBackgroundColor: 'rgba(26,148,199,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          maintainAspectRatio: false,
          data: values
        }
      ]
    };
    return dataSet;
  };
  return (
    <div>
      <Line
        data={buildDataForChart()}
        responsive={false}
        height="400"
        options={{
          tooltips: {
            callbacks: {
              title: tooltipItem => {
                return buildLabelDate(Object.keys(data)[tooltipItem[0].index]);
              }
            }
          },
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                autoSkip: false,
                ticks: {
                  userCallback: (item, index, ticks) => {
                    return getValue(item, index, ticks);
                  }
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          plugins: {
            datalabels: {
              display: true,
              color: 'white',
              borderRadius: 6,
              font: {
                size: 12
              },
              formatter: function(value) {
                if (value > 0) {
                  return value;
                } else {
                  return null;
                }
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Chart;

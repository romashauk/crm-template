import React, {useEffect, useState} from 'react';
import Chart from './Chart';
import {getDataForBitcoin} from '../../../utils/api';
import {Card, CardBody, CardHeader} from 'reactstrap';
import './style.scss';

export default function Dashboard() {
  const [data, handleData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getDataForBitcoin();
      handleData(data);
    };
    getData();
  }, []);
  return (
    <div className="wrapper">
      <Card>
        <CardHeader>Price of Bitcoin last 30 days</CardHeader>
        <CardBody className="chart-container">
          {!data ? (
            <i className="fa fa-spinner fa-spin" />
          ) : (
            <Chart data={data} />
          )}
        </CardBody>
      </Card>
    </div>
  );
}

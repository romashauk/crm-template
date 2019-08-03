import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import data from './data';
import Row from './Row';
import './style.scss';

const TableComponent = ({searchValue}) => {
  const [sortBy, handleSort] = useState('name');
  const [list, handleData] = useState(data);

  useEffect(() => {
    const activeList = data.filter(
      item =>
        item.firstName.toLowerCase().includes(searchValue) ||
        item.lastName.toLowerCase().includes(searchValue)
    );
    handleData(activeList);
  }, [searchValue]);
  return (
    <Table>
      <thead className="table-header">
        <tr>
          <th className="first">
            A/Z <i className="fa fa-caret-up " />
          </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>
            Phase <i className="fa fa-caret-up " />
          </th>
          <th>
            Last Activity <i className="fa fa-caret-up " />
          </th>
          <th>
            Follow up <i className="fa fa-caret-up " />
          </th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {list.map((data, i) => (
          <Row key={i} data={data} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;

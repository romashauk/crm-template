import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import data from './data';
import Row from './Row';
import './style.scss';
import moment from 'moment';

const TableComponent = ({searchValue}) => {
  const [sortBy, handleSort] = useState('name-asc');
  const [list, handleData] = useState(data);

  useEffect(() => {
    const activeList = data.filter(
      item =>
        item.firstName.toLowerCase().includes(searchValue) ||
        item.lastName.toLowerCase().includes(searchValue)
    );
    handleData(activeList);
  }, [searchValue]);

  const changeSort = activeFilter => {
    handleSort(activeFilter);
    switch (activeFilter) {
      case 'name-asc':
        return sortByName('asc');
      case 'name-desc':
        return sortByName('desc');
      case 'lastActivity-asc':
        return sortByDate('asc', 'lastActivity');
      case 'lastActivity-desc':
        return sortByDate('desc', 'lastActivity');
      case 'followUp-desc':
        return sortByDate('desc', 'followUp');
      case 'followUp-asc':
        return sortByDate('asc', 'followUp');
      default:
        return;
    }
  };

  const sortByName = direction => {
    const updatedList = [...list];
    if (direction === 'asc') {
      updatedList.sort((a, b) =>
        a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
      );
    } else
      updatedList.sort((a, b) =>
        a.firstName.toLowerCase() > b.firstName.toLowerCase() ? -1 : 1
      );
    handleData(updatedList);
  };

  const sortByDate = (direction, field) => {
    const updatedList = [...list];
    if (direction === 'asc') {
      updatedList.sort((a, b) => {
        if (!a[field]) return -1;
        if (!b[field]) return 1;
        return moment(a[field]) - moment(b[field]);
      });
    } else {
      updatedList.sort((a, b) => {
        if (!a[field]) return 1;
        if (!b[field]) return -1;
        return moment(b[field]) - moment(a[field]);
      });
    }
    handleData(updatedList);
  };

  const renderIcon = sortedField => {
    if (`${sortedField}-asc` === sortBy)
      return (
        <i
          onClick={() => changeSort(`${sortedField}-desc`)}
          className="fa fa-caret-up active"
        />
      );
    return (
      <i
        onClick={() => changeSort(`${sortedField}-asc`)}
        className={`fa fa-caret-down ${sortedField + '-desc' === sortBy &&
          'active'}`}
      />
    );
  };
  return (
    <Table>
      {list.length ? (
        <>
          <thead className="table-header">
            <tr>
              <th className="first">A/Z {renderIcon('name')}</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phase {renderIcon('phase')}</th>
              <th>Last Activity {renderIcon('lastActivity')}</th>
              <th>Follow up {renderIcon('followUp')}</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data, i) => (
              <Row key={i} data={data} />
            ))}
          </tbody>
        </>
      ) : (
        <h4>No matching results found</h4>
      )}
    </Table>
  );
};

export default TableComponent;

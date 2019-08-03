import React from 'react';
import moment from 'moment';

const Row = ({data}) => {
  const trimComment = text => {
    if (text.length < 45) return text;
    return text.slice(0, 45) + '...';
  };
  const {phase, firstName, lastActivity, lastName, comment, followUp} = data;
  return (
    <tr>
      <td className="first-body">
        <div>
          {data.firstName[0]}
          <span>{data.lastName[0]}</span>
        </div>
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phase}</td>
      <td>{moment(lastActivity).format('D MMMM')}</td>
      <td>
        {followUp ? (
          <div className="table-followUp">
            <i className="fas fa-phone" />
            {moment(data.followUp).format('D MMMM')}
          </div>
        ) : (
          ''
        )}
      </td>
      <td>{trimComment(comment)}</td>
    </tr>
  );
};

export default Row;

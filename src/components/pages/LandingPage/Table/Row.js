import React from 'react';
import moment from 'moment';

const Row = ({data}) => {
  const trimComment = text => {
    if (text.length < 45) return text;
    return text.slice(0, 45) + '...';
  };
  return (
    <tr>
      <td className="first" />
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.phase}</td>
      <td>{moment(data.lastActivity).format('D MMMM')}</td>
      <td>
        {data.followUp ? (
          <div className="table-followUp">
            <i className="fas fa-phone" />
            {moment(data.followUp).format('D MMMM')}
          </div>
        ) : (
          ''
        )}
      </td>
      <td>{trimComment(data.comment)}</td>
    </tr>
  );
};

export default Row;

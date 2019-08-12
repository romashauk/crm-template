import React from 'react';

const Task = ({task}) => {
  return <div className="task-item">{task.name}</div>;
};

export default Task;

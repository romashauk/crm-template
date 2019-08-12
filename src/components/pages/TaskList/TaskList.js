import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import Column from './Column';
import './style.scss';
import {DragDropContext} from 'react-beautiful-dnd';

const TaskList = () => {
  const [data, handleData] = useState([]);
  const [nameOfColumn, handleName] = useState('');
  const [addingMode, handleMode] = useState(false);
  const addColumn = () => {
    const newColumn = {
      tasks: [],
      id: data.length + 1,
      name: nameOfColumn
    };
    handleData([...data, newColumn]);
    handleMode(false);
  };
  const onDragEnd = result => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={res => onDragEnd(res)}>
      <div className="task wrapper">
        {data.length
          ? data.map((list, i) => (
              <Column
                handleData={handleData}
                data={data}
                key={i}
                column={list}
              />
            ))
          : ''}
        {data.length < 4 &&
          (!addingMode ? (
            <div onClick={() => handleMode(true)} className="task-adding">
              <i className="fas fa-plus" />
              <span>Add one more column</span>
            </div>
          ) : (
            <div className="task-adding add-mode">
              <Input
                onChange={e => handleName(e.target.value)}
                placeholder="type name"
              />
              <div className="task-adding_container">
                <Button disabled={!nameOfColumn} onClick={addColumn}>
                  Add
                </Button>
                <Button onClick={() => handleMode(false)} color="danger">
                  Cancel
                </Button>
              </div>
            </div>
          ))}
      </div>
    </DragDropContext>
  );
};

export default TaskList;

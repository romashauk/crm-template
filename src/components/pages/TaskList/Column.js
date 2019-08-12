import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import Task from './Task';
import {Droppable, Draggable} from 'react-beautiful-dnd';

const Columns = ({column, data, handleData}) => {
  const [addingMode, handleMode] = useState(false);
  const [nameOfTask, handleName] = useState('');
  const addTask = () => {
    const newColumn = {
      ...column,
      tasks: [
        ...column.tasks,
        {
          id: column.tasks.length + 1 + column.id * 10,
          name: nameOfTask
        }
      ]
    };
    const newData = [...data];
    newData.splice(data.indexOf(column), 1, newColumn);
    handleData(newData);
    handleMode(false);
  };
  return (
    <div>
      <div className="task-column">
        <h1>{column.name} </h1>
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {column.tasks.length
                ? column.tasks.map((task, index) => (
                    <Draggable key={index} index={index} draggableId={task.id}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                        >
                          <Task index={index} key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))
                : ''}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {!addingMode ? (
          <div onClick={() => handleMode(true)} className="task-column_add">
            <i className="fas fa-plus" />
            Add one more task
          </div>
        ) : (
          <div>
            <Input
              onChange={e => handleName(e.target.value)}
              placeholder="type name"
            />
            <div className="task-adding_container">
              <Button disabled={!nameOfTask} onClick={addTask}>
                Add
              </Button>
              <Button onClick={() => handleMode(false)} color="danger">
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Columns;

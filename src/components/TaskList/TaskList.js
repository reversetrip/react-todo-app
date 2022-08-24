import React from 'react';
import Task from './Task/Task';
import ControlPanel from './ControlPanel/ControlPanel';
import { TaskListSection, ListBlock } from './TaskList.styled';

const TaskList = ({
  deleteTasks,
  sortByPriority,
  sortByDate,
  toggleTask,
  tasks
}) => {
  const list = tasks.map(task => (
    <Task key={task.id} toggleTask={toggleTask} {...task} />
  ));

  return (
    <TaskListSection>
      {tasks.length ? (
        <>
          <ListBlock>
            {list}
          </ListBlock>
          <ControlPanel
            deleteTasks={deleteTasks}
            sortByPriority={sortByPriority}
            sortByDate={sortByDate} />
        </>
      ) : <h3>There are no tasks</h3>}
    </TaskListSection>
  );
};

export default TaskList;
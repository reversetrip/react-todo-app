import React from 'react';
import { TaskBlock, TaskText } from './Task.styled';

const Task = ({
  id,
  desc,
  isDone,
  priority,
  date,
  toggleTask
}) => {
  const prName = ['low', 'medium', 'high'];

  return (
    <TaskBlock>
      <TaskText isDone={isDone} onClick={() => toggleTask(id)}>
        {desc} | priority: <b>{prName[priority - 1]}</b> | created: {date[1]}
      </TaskText>
    </TaskBlock>
  );
};

export default Task;
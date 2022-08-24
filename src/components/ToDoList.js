import React, { useState } from 'react';
import TaskList from './TaskList/TaskList';
import AddForm from './AddForm/AddForm';
import { Main, Title } from './ToDoList.styled';
import { nanoid } from 'nanoid';

const initialList = [
  {
    id: nanoid(),
    desc: 'take out the trash',
    isDone: false,
    priority: 2,
    date: [Date.now(), getActualDate()]
  },
  {
    id: nanoid(),
    desc: 'feed the pets',
    isDone: false,
    priority: 3,
    date: [Date.now(), getActualDate()]
  },
  {
    id: nanoid(),
    desc: 'read a book',
    isDone: false,
    priority: 1,
    date: [Date.now(), getActualDate()]
  },
  {
    id: nanoid(),
    desc: 'go to the shop',
    isDone: false,
    priority: 2,
    date: [Date.now(), getActualDate()]
  },
  {
    id: nanoid(),
    desc: 'call grandpa',
    isDone: false,
    priority: 3,
    date: [Date.now(), getActualDate()]
  }
];

function getActualDate() {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'June', 'July', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const h = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const m = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  const s = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
  return `${month} ${day} ${h}:${m}:${s}`;
}

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialList);

  const addTask = (newTask, priority) => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks, {
          id: nanoid(),
          desc: newTask,
          isDone: false,
          priority: priority,
          date: [Date.now(), getActualDate()]
        }
      ]);
    }
  };

  const deleteTasks = () => {
    setTasks(tasks.filter(task => !task.isDone));
  };

  const sortByPriority = () => {
    setTasks([...tasks].sort((t1, t2) => t2.priority - t1.priority));
  };

  const sortByDate = () => {
    setTasks([...tasks].sort((t1, t2) => t2.date[0] - t1.date[0]));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) task.isDone = !task.isDone;
      return task;
    }));
  };

  return (
    <Main>
      <Title>React todo list</Title>
      <TaskList
        deleteTasks={deleteTasks}
        sortByPriority={sortByPriority}
        sortByDate={sortByDate}
        toggleTask={toggleTask}
        tasks={tasks} />
      <AddForm addTask={addTask} />
    </Main>
  );
};

export default ToDoList;
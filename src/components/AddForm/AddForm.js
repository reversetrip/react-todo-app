import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NewTaskSection } from './AddForm.styled';

const AddForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState(2);

  const addBtnOnClick = () => {
    addTask(newTask, priority);
    setNewTask('');
    setPriority(2);
  };

  return (
    <NewTaskSection>
      <TextField
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='new task...'
        id='new-task'
        size='small'
        color='success'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <AssignmentIcon />
            </InputAdornment>
          )
        }}
        sx={{
          marginRight: '1rem'
        }} />
      <Select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        id='priority-select'
        size='small'
        sx={{
          marginRight: '1rem'
        }} >
        <MenuItem value={3}>High</MenuItem>
        <MenuItem value={2}>Medium</MenuItem>
        <MenuItem value={1}>Low</MenuItem>
      </Select>
      <Button
        onClick={addBtnOnClick}
        variant='contained'
        color='success'
        endIcon={<AddCircleIcon />} >
        add task
      </Button>
    </NewTaskSection>
  );
};

export default AddForm;
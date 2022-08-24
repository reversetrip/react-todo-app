import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import RestoreIcon from '@mui/icons-material/Restore';
import { ControlPanelBlock } from './ControlPanel.styled';

const ControlPanel = ({ deleteTasks, sortByPriority, sortByDate }) => {
  return (
    <ControlPanelBlock>
      <Button
        onClick={deleteTasks}
        variant='contained'
        color='error'
        endIcon={<DeleteIcon />}
        sx={{
          marginRight: '1rem'
        }} >
        remove completed
      </Button>
      <Button
        onClick={sortByPriority}
        variant='contained'
        color='primary'
        endIcon={<LowPriorityIcon />}
        sx={{
          marginRight: '1rem'
        }} >
        sort by priority
      </Button>
      <Button
        onClick={sortByDate}
        variant='contained'
        color='primary'
        endIcon={<RestoreIcon />} >
        sort by newest
      </Button>
    </ControlPanelBlock>
  );
};

export default ControlPanel;
import React from 'react';
import { Grid, Paper } from '@mui/material';
import UserForm from './USerForm';
import Checklist from './CheckList';


const FormAndCheckList = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Paper style={{ height: '642px', padding: '16px', background: 'linear-gradient(to bottom, #F5F5FF, #9999FF)' }}>
            <Checklist />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ height: '100%', padding: '16px', background: 'linear-gradient(to bottom, #B3B3FF, #4D4DFF)'}}>
            <UserForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormAndCheckList;

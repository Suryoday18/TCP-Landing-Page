import React from 'react';
import { Grid, Paper } from '@mui/material';
import UserForm from './USerForm';
import Checklist from './CheckList';
import Notification from './Info/Notification';


const FormAndCheckList = () => {
  return (
    <div style={{}}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Paper style={{ height: '700px', padding: '16px', display: 'flex', flexDirection: 'column', background: 'linear-gradient(to bottom, #F5F5FF, #9999FF)' }}>
            <Checklist />
            <Notification />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ height: '700px', padding: '16px', backgroundColor: '#1F4A7C'}}>
            <UserForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormAndCheckList;

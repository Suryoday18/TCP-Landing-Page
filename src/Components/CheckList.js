import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2'
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '10px',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    color: '#330032', 
    
  },
  heading: {
    padding: '10px',
    borderBottom: '1px solid white'
  },
  paragraph: {
    padding: '10px',
    marginBottom: '8px',
  },
});

const Checklist = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
     <div style={{display: 'flex', flexDirection: 'row'}}>
     <HiOutlineClipboardDocumentList style={{width: '50px', height: '50px'}}/>
      <Typography variant="h4" className={classes.heading}>
        Form / CheckList
      </Typography>
      </div>
      <Typography variant="body1" className={classes.paragraph}>
        Internal Procedure For Change Of Land Use ...
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
         Internal Procedure For Building Planning ...
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      Inspection Procedure And Checklist Of ...
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      Inspection Procedure And Checklist Of ...
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      Procedure And Guidelines For Obtaning ...
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      Form Application for composition of offences under section 39-C read with sub-section (3) of section
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      Procedure And Guidelines For Obtaning Planning Permission On Form 12
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      Procedure, Checklist For Obtaning Noc After ...     
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      Inspection Procedure & Checklist For ...
      </Typography>
      <Button style={{color: 'white', padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '30px', background: 'linear-gradient(to right, #4d4dff, #000033)', transform: 'translateX(400px)' }}>Read More +</Button>
    </div>
  );
};

export default Checklist;
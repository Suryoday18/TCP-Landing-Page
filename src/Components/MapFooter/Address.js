import React from 'react';
import { Typography } from '@material-ui/core';
import {ImLocation2} from 'react-icons/im'
import {IoIosCall} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'

const OfficeAddress = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white'}}>   
      <Typography variant="body1">
          <br></br>
          <span><ImLocation2 style={{marginRight: '10px'}}/></span>
          Town Country Planning Organisation
          <br></br>
          Ministry of Housing and Urban Affairs
          <br></br>
          Government of India,
          <br></br>
          E- Block, Vikas Bhawan
          <br></br>
          I.P. Estate
          <br></br>
          New Delhi - 110002
      </Typography>
      <Typography variant="body1" style={{display: 'flex', flexDirection: 'row', margin: '10px 200px 0px 0px'}}>
         <div><IoIosCall style={{margin: '5px'}}/></div>
          <br></br>
          <div>
          +91-11-23370306
          <br></br>
          +91-11-23379353
          <br></br>
          +91-11-23379197
          </div>
      </Typography>
      <Typography variant="body1" style={{display: 'flex', flexDirection: 'row', margin: '10px 120px 0px 0px'}}>
        <div><AiOutlineMail  style={{marginTop: '30px 50px 0px 0px', padding: '5px'}}/></div>
        <div>
          <br></br>
          cp-tcpo-mud[at]nic[dot]in
          <br></br>
          cp[dot]tcpo[at]yahoo[dot]com
        </div>
      </Typography>
    </div>
  );
};

export default OfficeAddress;

import React from 'react';
import { AppBar, Toolbar, Button, } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import {FcHome} from 'react-icons/fc'

const Navbar = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    return null
    // setAnchorEl(event.currentTarget);
  };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  return (
    <AppBar position="static" style={{background: '#1F4A7C', height: '44px'}} >
      <Toolbar>
        <Button color='inherit' style={{marginLeft: '70px', marginBottom: '18px', fontSize: '12px', color: 'white'}}><FcHome style={{width: '30px', height: '30px'}}/></Button>
        <Button color="inherit" style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>About Us</Button>
        <Button color="inherit" style={{marginLeft: '30px', marginBottom: '18px',  color: 'white'}}>Planning Regulations</Button>
        <Button color="inherit" onClick={handleClick} style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>Development Plan</Button>
        <Button color='inherit' style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>Notifications / Orders</Button>
        <Button color='inherit' style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>Act & Rules</Button>
        <Button color="inherit" style={{marginLeft: '30px', marginBottom: '18px',  fontSize: '12px', color: 'white'}}>Media</Button>
        {/* <Button color="inherit" style={{marginLeft: '20px', fontSize: '12px'}}>Act & Rules</Button> */}
        <Button color="inherit" style={{marginLeft: '30px', marginBottom: '18px',  fontSize: '12px', color: 'white'}}>RTI</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar
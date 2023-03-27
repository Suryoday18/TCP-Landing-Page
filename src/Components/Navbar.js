import React from 'react';
import { AppBar, Toolbar, Button, } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

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
    <AppBar position="static" style={{backgroundColor: '#1F47AC', height: '60px'}} >
      <Toolbar>
        <Button color='inherit' style={{marginLeft: '80px', fontSize: '12px', color: 'white'}}>Home</Button>
        <Button color="inherit" style={{marginLeft: '20px', fontSize: '12px', color: 'white'}}>About Us</Button>
        <Button color="inherit" style={{marginLeft: '20px', color: 'white'}}>Planning Regulations</Button>
        <Button color="inherit" onClick={handleClick} style={{marginLeft: '20px', fontSize: '12px', color: 'white'}}>Colonies Appartment</Button>
        <Button color='inherit' style={{marginLeft: '20px', fontSize: '12px', color: 'white'}}>Notifications / Orders</Button>
        <Button color="inherit" style={{marginLeft: '20px', fontSize: '12px', color: 'white'}}>Media</Button>
        {/* <Button color="inherit" style={{marginLeft: '20px', fontSize: '12px'}}>Act & Rules</Button> */}
        <Button color="inherit" style={{marginLeft: '20px', fontSize: '12px', color: 'white'}}>RTI</Button>
        <Button color="inherit" onClick={handleClick} style={{marginLeft: '20px', fontSize: '12px', color: 'white'}}>Development Plan</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar
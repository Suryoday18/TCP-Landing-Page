import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DetailTable from './DetailTable';

function StickingwithScroll() {
  const [componentOpen, setComponentOpen] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  function handleOpenComponent() {
    setComponentOpen(true);
  }

  function handleCloseComponent() {
    setComponentOpen(false);
  }

  function handleScroll() {
    console.log('getting scrolled');
    if (window.pageYOffset > 100) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {buttonVisible && (
        <Button onClick={handleOpenComponent} style={{ position: 'fixed', zIndex: 999999999 }}>
          Open Component
        </Button>
      )}
      <Dialog open={componentOpen} onClose={handleCloseComponent}>
        <Button onClick={handleCloseComponent} style={{ position: 'absolute', top: 0, right: 0 }}>Close</Button>
        <DetailTable />
      </Dialog>
    </div>
  );
}

export default StickingwithScroll

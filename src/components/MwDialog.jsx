import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



export default function MwDialog() {
  const [open, setOpen] = useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen} minWidth>
        Open max-width dialog
      </Button>
      <Dialog open={open} onClose={handleClose}  sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}>
  <DialogTitle sx={{margin:'0 auto',width:'100%', color:'primary.main'}}>ADD DETAILS</DialogTitle>
  <DialogContent>
    <TextField sx={{ mt: 2, minWidth: '110px' }}
      autoFocus
      margin="dense"
      id="fname"
      label="First Name"
      type="text"
      minWidth
    />
     <TextField sx={{ mt: 2, minWidth: '110px',marginLeft:'12px' }}
      autoFocus
      margin="dense"
      id="lname"
      label="Last Name"
      type="text"
      minWidth
    />
    <TextField sx={{ mt: 2, minWidth: '110px' }}
      autoFocus
      margin="dense"
      id="title"
      label="Title"
      type="text"
      minWidth
    />

<TextField sx={{ mt: 2, minWidth: '110px' ,marginLeft:'12px' }}
      autoFocus
      margin="dense"
      id="description"
      label="description"
      type="desc"
      minWidth
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button onClick={handleClose} color="primary">
      Submit
    </Button>
  </DialogActions>
</Dialog>

    </React.Fragment>
  );
}

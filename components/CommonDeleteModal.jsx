import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function CommonDeleteModal({ 
  title = "Confirm Delete?", 
  message = "Are you sure to delete this?", 
  open, 
  setOpen = (value) => {}, 
  onConfirm = () => {} 
}) {
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="btn btn-dark" onClick={handleConfirm}>Confirm</Button>
        <Button className="btn btn-secondary" onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
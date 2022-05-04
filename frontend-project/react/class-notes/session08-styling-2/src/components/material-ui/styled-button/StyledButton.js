import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  btn: {
    background: 'Linear-gradient(45deg, #FF688B, #FF8E53)',
    border: 0,
    borderRadius: 7,
    color: '#fff',
    padding: '5px 30px',
    marginBottom: '1rem',
  },
});

const StyledButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.btn}>Styled Button</Button>
    </div>
  );
};

export default StyledButton;

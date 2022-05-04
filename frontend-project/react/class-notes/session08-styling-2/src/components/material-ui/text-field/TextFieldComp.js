import { TextField } from '@mui/material';
import React from 'react';

const TextFieldComp = () => {
  return (
    <div>
      <TextField
        color="secondary"
        variant="filled"
        type="email"
        label="Email"
        placeholder="mui@mui.com"
        error
        helperText="Incorrect Entry"
      />
    </div>
  );
};

export default TextFieldComp;

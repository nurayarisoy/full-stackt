import { Button, ButtonGroup } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const Buttons = () => {
  return (
    <ButtonGroup variant="contained" size="large">
      <Button color="secondary" startIcon={<SaveIcon color="disabled" />}>
        Save
      </Button>
      <Button color="primary" endIcon={<DeleteIcon color="disabled" />}>
        Delete
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;

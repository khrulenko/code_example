import { createTheme } from '@mui/material';

const { spacing } = createTheme();

const MuiTextField = {
  styleOverrides: {
    root: {
      '& fieldset': {
        borderRadius: spacing(2),
      },
    },
  },
};

export default MuiTextField;

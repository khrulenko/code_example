import { createTheme } from '@mui/material';

const { spacing } = createTheme();

const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: spacing(2),
    },
  },
};

export default MuiButton;

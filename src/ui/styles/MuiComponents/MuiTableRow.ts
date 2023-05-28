import { blueGrey } from '@mui/material/colors';

const MuiTableRow = {
  styleOverrides: {
    root: () => ({
      button: {
        visibility: 'hidden',
      },

      '&:hover': {
        backgroundColor: blueGrey[50],
        button: {
          visibility: 'visible',
        },
      },
    }),
  },
};

export default MuiTableRow;

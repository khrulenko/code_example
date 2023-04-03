import { DialogContentProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiDialogContent = {
  styleOverrides: {
    root: ({}: OwnerStateWithTheme<DialogContentProps>) => ({
      display: 'flex',
      justifyContent: 'center',

      padding: '0',
    }),
  },
};

export default MuiDialogContent;

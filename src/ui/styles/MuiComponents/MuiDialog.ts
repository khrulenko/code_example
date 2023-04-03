import { DialogProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiDialog = {
  defaultProps: {
    fullWidth: true,
  },
  styleOverrides: {
    root: ({ theme: { spacing } }: OwnerStateWithTheme<DialogProps>) => ({
      '& .MuiDialog-paper': {
        padding: spacing(2),

        borderRadius: spacing(3),
      },
    }),
  },
};

export default MuiDialog;

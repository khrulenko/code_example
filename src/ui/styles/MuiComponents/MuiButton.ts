import { ButtonProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiButton = {
  styleOverrides: {
    root: ({ theme: { spacing } }: OwnerStateWithTheme<ButtonProps>) => ({
      minWidth: spacing(3),

      borderRadius: spacing(2),
    }),
  },
};

export default MuiButton;

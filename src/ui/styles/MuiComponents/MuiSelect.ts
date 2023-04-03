import { SelectProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiSelect = {
  styleOverrides: {
    root: ({ theme: { spacing } }: OwnerStateWithTheme<SelectProps>) => ({
      borderRadius: spacing(3),
    }),
  },
};

export default MuiSelect;

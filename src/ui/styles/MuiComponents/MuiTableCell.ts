import { TableCellProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiTableCell = {
  styleOverrides: {
    root: ({ theme: { spacing } }: OwnerStateWithTheme<TableCellProps>) => ({
      maxWidth: spacing(12),
      whiteSpace: 'normal',
      wordWrap: 'break-word',

      padding: spacing(1),
    }),
  },
};

export default MuiTableCell;
